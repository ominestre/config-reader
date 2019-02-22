const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Reads a YAML or JSON configuration file and returns a JavaScript object
 * @param {String} configFilePath Path to your config file. Prefers an absolute path but will
 * attempt to resolve one to your current working directory should you pass a relative path.
 * @returns {Object} provided config file as a POJO
 * @throws if config file isn't of extension .json .yml or .yaml
 * @throws if the path or file can't be resolved or read
 */
const getConfig = (configFilePath) => {
  const absolutePath = path.isAbsolute(configFilePath)
    ? configFilePath
    : path.resolve(configFilePath);

  const extension = path.extname(absolutePath);

  if (!extension.match(/yaml|yml|json/)) {
    throw Error('Configuration file should be .yaml .yml or .json');
  }

  if (extension.match(/json/)) {
    const jsonConfig = fs.readFileSync(absolutePath);
    return JSON.parse(jsonConfig);
  }

  return yaml.safeLoad(fs.readFileSync(absolutePath));
};

module.exports = {
  getConfig,
};
