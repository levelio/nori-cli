const action = require('./action')

module.exports = function addProgram (program) {
  program
    .command('site')
    .description('快捷网站打开')
    .action(action)
  return program
}
