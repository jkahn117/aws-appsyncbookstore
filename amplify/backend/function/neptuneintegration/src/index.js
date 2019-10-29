const gremlin = require('gremlin')
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;

const Graph = gremlin.structure.Graph;
// const P = gremlin.process.P;
// const Order = gremlin.process.order;
// const Scope = gremlin.process.scope;
// const Column = gremlin.process.column;

const dc = new DriverRemoteConnection(
  `wss://${process.env.NEPTUNE_ENDPOINT}:${process.env.NEPTUNE_PORT}/gremlin`
);

const graph = new Graph()
const g = graph.traversal().withRemote(dc)



exports.handler = async(event) => {
  switch(event.action) {
    case "recommendations":
      return;
    default:
      return { error: "No such method" }
  }
}