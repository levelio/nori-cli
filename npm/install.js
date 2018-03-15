const path = require('path')
const shell = require('shelljs')
const config = require('../config')

require('../src/welecome')()

shell.cp(
  path.resolve(__dirname, '../config/nori.yml'),
  config.configPath
)
