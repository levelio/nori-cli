const inquirer = require('inquirer')
const opn = require('opn')
const { getConf, exit, Text, copyText } = require('../../utils')

function openUrl (data) {
  const { name, url } = data.site
  opn(url)
  copyText(url)
  Text.success('已打开：')
  Text.info(`${name}：${url}`)
  exit()
}

module.exports = (options) => {
  const { quicksite } = getConf()
  inquirer.prompt({
    type: 'rawlist',
    name: 'site',
    message: 'what do you want to do?',
    choices: () => quicksite.map(x => x.name),
    filter: answer => quicksite.filter(x => x.name === answer)[0]
  }).then(openUrl)
}
