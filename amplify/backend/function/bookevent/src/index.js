/**
 * This function is responsible for handling a DynamoDB stream via EventBridge.
 * When a new book is created or one is removed, the same action should be taken
 * in the Neptune cluster.
 */

const gremlin = require('gremlin')
const DriverRemoteConnection = gremlin.driver.DriverRemoteConnection;
const Graph = gremlin.structure.Graph;
const { t: { id } } = gremlin.process;

const util = require('util');

const dc = new DriverRemoteConnection(
  `wss://${process.env.NEPTUNE_ENDPOINT}:${process.env.NEPTUNE_PORT}/gremlin`
);

const graph = new Graph()
const g = graph.traversal().withRemote(dc)


async function insertBookInGraph(record) {
  return await g.addV('Book')
          .property(id, record.keys.id.s)
          .property('title', record.newImage.title.s)
          .next();
}


async function removeFromGraph(record) {
  return await g.V(record.keys.id.s)
          .drop()
          .next();
}

exports.handler = async(event) => {
  console.log(util.inspect(event, { depth: 5 }));

  let { detail: { eventName, dynamodb: record } } = event;
  if (eventName && record) {
    console.log(`[${eventName}] ${record.keys.id.s}`);
    switch(eventName) {
      case 'INSERT':
        await insertBookInGraph(record);
        break;
      case 'REMOVE':
        await removeFromGraph(record);
        break;
      default:
        console.warn(`Unknown event: ${eventName}`);
    }
  }


  return;
}