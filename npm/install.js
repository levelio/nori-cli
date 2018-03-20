const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const config = require('../config')

require('../src/welecome')()
const ymlPath = path.resolve(__dirname, '../config/nori.yml')
if (!fs.existsSync(ymlPath)) {
  shell.cp(
    ymlPath,
    config.configPath
  )
}
