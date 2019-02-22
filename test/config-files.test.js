const { assert } = require('chai');
const path = require('path');

const configModule = require('../reader');

describe('MODULE: Config File Reader', () => {
  const desiredResults = {
    topObject: {
      nestedObject: {
        someText: 'foo',
        someLogic: false,
        someMath: 35,
        someList: [
          'foo',
          'bar',
          'baz',
        ],
      },
      emptySiblingObject: {},
    },
    topArray: [
      'foo',
      'bar',
      'baz',
    ],
    topArrayOfObjects: [
      { foo: 'foo', bar: 'bar', baz: 'baz' },
      { foo: 'bar', bar: 'baz', baz: 'foo' },
    ],
    topInt: 9,
    topBoolean: true,
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

  it('Should throw an exception when an absolute path cannot be resolved to a valid file', () => {
    assert.throws(() => {
      configModule.getConfig('this/is/a/bad/path.json');
    }, 'ENOENT: no such file or directory');
  });
});
