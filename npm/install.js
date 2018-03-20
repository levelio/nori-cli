const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

require('../src/welecome')()
const ymlPath = path.resolve(__dirname, '../config/nori.yml')
const externalPath = path.resolve(process.env.HOME, '.nori.yml')
if (!fs.existsSync(externalPath)) {
  shell.cp(
    ymlPath,
    externalPath
  )
}
