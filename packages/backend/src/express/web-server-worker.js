const express = require('express');
const apiRouter = require('./api-router.js');
const config = require('../config/config.js');

function webserverWorker() {
  const app = express();
  app.use('/api', apiRouter);
  app
    .listen(config.EXPRESS_PORT, config.EXPRESS_HOST, () => {
      console.log(`Express server worker started, pid ${process.pid}, port ${config.EXPRESS_PORT}, ${app.get('env')} mode`);
    })
    .once('error', (err) => {
      console.log('err: ', err);
      process.exit(126);
    });
}

module.exports = webserverWorker;
