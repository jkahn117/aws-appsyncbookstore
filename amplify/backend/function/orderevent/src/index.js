const Redis = require("ioredis")
const util = require('util')

const BESTSELLER_KEY = 'Bestsellers:AllTime';

let redis = new Redis.Cluster([
  {
    host: process.env.ELASTICACHE_HOST,
    port: process.env.ELASTICACHE_PORT
  }
]);

async function addBookSaleToBestsellers(bookId) {
  try {
    await redis.zadd(BESTSELLER_KEY, bookId);
  } catch (error) {
    console.error(JSON.stringify(error));
    return { error: error.message };
  }
}

exports.handler = async(event) => {
  console.log(util.inspect(event, { depth: 6 }))

  let { detail: { eventName, dynamodb: record } } = event;

  if (eventName && record) {
    console.log(`[${eventName}] ${record.keys.id.s}`);
    switch(eventName) {
      case 'INSERT':
        for (let item of record.newImage.items) {
          let bookId = item.M.bookId.S;
          console.log(`Writing book ID to bestsellers: ${bookId}`)
          await addBookSaleToBestsellers(bookId);
        }
        break;
      default:
        console.warn(`Unknown event: ${eventName}`);
    }
  }
}
