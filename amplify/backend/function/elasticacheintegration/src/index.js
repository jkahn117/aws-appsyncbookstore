const Redis = require("ioredis")

const BESTSELLER_KEY = 'Bestsellers:AllTime';

let redis = new Redis.Cluster([
  {
    host: process.env.ELASTICACHE_HOST,
    port: process.env.ELASTICACHE_PORT
  }
]);

async function bestsellers(start, end) {
  console.log(start)
  console.log(end)
  
  try {
    let result = await redis.zrevrange(BESTSELLER_KEY, start, end);

    if (!result) { return []; }

    // map from Redis response
    return result.map( (r) => { return { id: r } });
  } catch (error) {
    console.error(JSON.stringify(error));
    return { error: error.message };
  }
}

exports.handler = async(event) => {
  const { action } = event;
  
  if (!action) { throw new Error("No action specified"); }
  
  switch(action) {
    case "bestsellers":
      const { arguments: { start, end } } = event;

      return await bestsellers(start || 0, end || 19);
    default:
      throw new Error("No such method");
  }
}
