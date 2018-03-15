const action = require('./action')

module.exports = function addProgram (program) {
  program
    .command('site')
    .description('快捷地址访问')
    .option('-n, --not-open', '不跳转，但是将地址复制到剪贴板')
    .action(action)
  return program
}
