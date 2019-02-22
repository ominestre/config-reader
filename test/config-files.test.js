const { assert } = require('chai');
const path = require('path');

const configModule = require('../reader');

describe('MODULE: Config File Reader', () => {
  const desiredResults = {
    'level-1-dir': {
      'level-2-dir-1': {},
      'level-2-dir-2': {
        'level-3-dir': {},
      },
    },
  };

  it('Should read a yml file and return a matching config object', () => {
    const configFile = path.resolve(__dirname, 'resources/test-config.yml');
    const results = configModule.getConfig(configFile);
    assert.deepEqual(results, desiredResults);
  });

  it('Should read a yaml file and return a matching config object', () => {
    const configFile = path.resolve(__dirname, 'resources/test-config.yaml');
    const results = configModule.getConfig(configFile);
    assert.deepEqual(results, desiredResults);
  });

  it('Should read a json file and return a matching config object', () => {
    const configFile = path.resolve(__dirname, 'resources/test-config.json');
    const results = configModule.getConfig(configFile);
    assert.deepEqual(results, desiredResults);
  });

  it('Should throw an exception when passed a file that is not .yml .yaml or .json', () => {
    const configFile = path.resolve(__dirname, 'resources/test-config.txt');

    assert.throws(() => {
      configModule.getConfig(configFile);
    }, 'Configuration file should be .yaml .yml or .json');
  });
});
