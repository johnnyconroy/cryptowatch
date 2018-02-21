const client = require('../redis/redisClient');

const routerHandler = (req, res) => {
  const mainPath = req.url.split('/')[2];
  switch (mainPath) {
    case 'timeline':
      client.get('coindeskBPI', (error, result) => {
        if (error) throw error;
        if (result) res.send(JSON.parse(result).bpi);
      });
      break;
    default:
      res.send('{"Error": "this api path is not valid"}');
  }
};

module.exports = routerHandler;
