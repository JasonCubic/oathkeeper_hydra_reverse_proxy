const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const webserverWorker = require('./web-server-worker.js');
const config = require('../config/config.js');

(() => {
  if (cluster.isMaster) {
    // Fork workers.
    for (let j = 0; j < numCPUs; j += 1) {
      cluster.fork();
    }
    cluster.on('exit', (worker, code /* , signal */) => {
      console.log(`worker ${worker.process.pid} died`);
      if (code === 126) {
        console.log(`ERROR: unable to execute this command at this time.  Is port ${config.EXPRESS_PORT} already in use?`);
      } else {
        cluster.fork();
      }
    });
  } else {
    webserverWorker(cluster.worker);
  }
})();
