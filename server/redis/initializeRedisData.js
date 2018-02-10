const redis = require('redis');
const client = require('./redisClient');
const fetchCoindeskBPI = require('../../api/coindesk');

const initializeRedisData = () => {
  fetchCoindeskBPI(365, 0, (err, res) => {
    if (err) throw err;
    client.set('coindeskBPI', res, redis.print);
    client.get('coindeskBPI', (error, result) => {
      if (error) throw error;
      if (result) console.log(JSON.parse(result).bpi);
    });
  });
};

module.exports = initializeRedisData;

// client.set('string key', 'string val', redis.print);
// client.hset('hash key', 'hashtest 1', 'some value', redis.print);
// client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print);
// client.hkeys('hash key', (err, replies) => {
//   console.log(`${replies.length} replies:`);
//   replies.forEach((reply, i) => {
//     console.log(`    ${i}: ${reply}`);
//   });
//   client.quit();
// });
