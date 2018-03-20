const action = require('./action')

module.exports = function addProgram (program) {
  program
    .command('user')
    .description('获取测试环境用户信息')
    .option('-a, --all', '查询全部属性')
    .option('-n, --user-name [name]', '用户账号')
    .option('-p, --phone [phone]', '手机号码')
    .option('-u, --user-id [user-id]', '用户id')
    .action(action)
  return program
}
