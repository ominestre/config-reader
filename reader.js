const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const getConfig = (configFilePath) => {
  const extension = path.extname(configFilePath);

  if (!extension.match(/yaml|yml|json/)) {
    throw Error('Configuration file should be .yaml .yml or .json');
  }

  if (extension.match(/json/)) {
    const jsonConfig = fs.readFileSync(configFilePath);
    return JSON.parse(jsonConfig);
  }

  return yaml.safeLoad(fs.readFileSync(configFilePath));
};

module.exports = {
  getConfig,
};
