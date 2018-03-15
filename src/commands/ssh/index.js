const action = require('./action')

module.exports = function addProgram (program) {
  program
    .command('ssh')
    .description('快捷登录SSH')
    .action(action)
  return program
}
