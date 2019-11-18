const Redis = require("ioredis")
const util = require('util')

const BESTSELLER_KEY = 'Bestsellers:AllTime';

let redis = new Redis.Cluster([
  {
    host: process.env.ELASTICACHE_HOST,
    port: process.env.ELASTICACHE_PORT
  }
]);

async function addBookSaleToBestsellers(bookId, quantity) {
  console.log(`Writing book ID to bestsellers: ${bookId}`)

  try {
    await redis.zadd(BESTSELLER_KEY, quantity, bookId);
  } catch (error) {
    console.error('[ERROR - addBookSaleToBestsellers ', error);
    return { error: error.message };
  }
}

/**
 * Expected event:
 *   {
 *     'bookId': 'xxxxx',
 *     'quatity': 0,
 *     'customerId': 'xxxxx'
 *   }
 */
exports.handler = async(event) => {
  console.log(util.inspect(event, { depth: 6 }))

  const { bookId, quantity, customerId } = event;
  await addBookSaleToBestsellers(bookId, quantity);

  // add handling for Neptune
  
}
