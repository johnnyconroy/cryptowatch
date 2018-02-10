// @flow
const redis = require('redis');

// Create redis client
const client = redis.createClient({
  // host: 'redis',
}); // localhost:6379
console.log('Redis running locally...');

// Connect to redis
client.on('connect', () => {
  console.log('Redis connected');
});

client.on('error', (err) => {
  console.log('Redis Error:', err); // errors here
});

module.exports = client;
