const _ = require('lodash');

const configData = {
  dev: {
    EXPRESS_HOST: _.get(process, 'env.EXPRESS_HOST', '0.0.0.0'),
    EXPRESS_PORT: _.toInteger(_.get(process, 'env.EXPRESS_PORT', 8084)),
  },
  qa: {
    EXPRESS_HOST: _.get(process, 'env.EXPRESS_HOST', '0.0.0.0'),
    EXPRESS_PORT: _.toInteger(_.get(process, 'env.EXPRESS_PORT', 8084)),
  },
  prod: {
    EXPRESS_HOST: _.get(process, 'env.EXPRESS_HOST', '0.0.0.0'),
    EXPRESS_PORT: _.toInteger(_.get(process, 'env.EXPRESS_PORT', 8084)),
  },
};

function config() {
  if (process.env.NODE_ENV === 'production') {
    return configData.prod;
  }
  if (process.env.NODE_ENV === 'test') {
    return configData.qa;
  }
  return configData.dev;
}

module.exports = (config)();
