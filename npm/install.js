const path = require('path')
const fs = require('fs')
const shell = require('shelljs')

require('../src/welecome')()
const ymlPath = path.resolve(__dirname, '../config/nori.yml')
<<<<<<< HEAD
const userConfig = path.resolve(process.env.HOME, '.nori.yml')
if (!fs.existsSync(userConfig)) {
  shell.cp(
    ymlPath,
    userConfig
=======
const externalPath = path.resolve(process.env.HOME, '.nori.yml')
if (!fs.existsSync(externalPath)) {
  shell.cp(
    ymlPath,
    externalPath
>>>>>>> b1bec6046abe06514a24579a8bf198d53bcf4b0c
  )
}
