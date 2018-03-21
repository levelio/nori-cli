const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

require('../src/welecome')()
const ymlPath = path.resolve(__dirname, '../config/nori.yml')
const userConfig = path.resolve(process.env.HOME, '.nori.yml')
if (!fs.existsSync(userConfig)) {
  shell.cp(
    ymlPath,
    userConfig
  )
}
