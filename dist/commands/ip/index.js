const action = require('./action');

module.exports = function addProgram(program) {
  program.command('ip').description('获取本机IP地址').option('-c, --copy', '拷贝到剪切板').action(action);
  return program;
};