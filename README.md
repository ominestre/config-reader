# Config Reader

[![Build Status](https://travis-ci.org/ominestre/config-reader.svg?branch=master)](https://travis-ci.org/ominestre/config-reader)

Node module for reading JSON or YAML config and returning a Plain Ol' JavaScript Object.

## Contributing

Reference [CONTRIBUTING.md](CONTRIBUTING.md) for instructions on how to contribute to this project.

## Usage

### configReader.getConfig( String )

```javascript
const configReader = require('@ominestre/config-reader');
const config = configReader.getConfig('/path/to/my/config.json');
```

The string should preferrably be an absolute path to your configuration file. This module will attempt to resolve a relative path to your current working directory but that should be considered volatile.

It will throw an exception if you point to a file that isn't of extension `.json`, `.yml`, or `.yaml`. It will also throw an exception if your path can't be resolved or if the file can't be read.
