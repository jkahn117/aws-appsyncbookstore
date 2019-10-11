const gremlin = require('gremlin')
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

const Graph = gremlin.structure.Graph;
const P = gremlin.process.P;
const Order = gremlin.process.order;
const Scope = gremlin.process.scope;
const Column = gremlin.process.column;

const dc = new DriverRemoteConnection(
  `wss://${process.env.NEPTUNE_ENDPOINT}:${process.env.NEPTUNE_PORT}/gremlin`
);
const graph = new Graph();
const g = graph.traversal().withRemote(dc);


async function recommendationsForUser(userId) {
  try {
    let result = await g.V()
      .has('User', 'name', userId).as('user')
      .out('purchased').aggregate('self')
      .in_('purchased').where(P.neq('user'))
      .out('purchased').where(P.without('self'))
      .values('id')
      .groupCount()
      .order(Scope.local)
        .by(Column.values, Order.decr)
      .select(Column.keys)
      .next()

    return result.value.map( (r) => {
      return { id: r }
    })
  } catch (error) {
    console.error(JSON.stringify(error))
    return { error: error.message }
  }
}


exports.handler = async(event) => {
  switch(event.action) {
    case "recommendationsForUser":
      return await recommendationsForUser(event.arguments.userId);
    default:
      return { error: "No such method" }
  }
}