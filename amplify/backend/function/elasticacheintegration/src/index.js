const Redis = require("ioredis")

const BESTSELLER_KEY = 'Bestsellers:AllTime';

let redis = new Redis.Cluster([
  {
    host: process.env.ELASTICACHE_HOST,
    port: process.env.ELASTICACHE_PORT
  }
]);

async function bestsellers(start, end) {
  try {
    let result = await redis.zrevrange(BESTSELLER_KEY, start, end);

    if (!result) { return []; }

    // map from Redis response
    return result.map( (r) => { return { id: r[0] } });

  } catch (error) {
    console.error(JSON.stringify(error));
    return { error: error.message };
  }
}

exports.handler = async(event) => {
  switch(event.action) {
    case "bestsellers":
      let start = event.arguments.start || 0;
      let end = event.arguments.end || 19;
      return await bestsellers(start, end);
    default:
      throw new Error("No such method");
  }
}
