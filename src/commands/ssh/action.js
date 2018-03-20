const shell = require('shelljs')
const inquirer = require('inquirer')
const { getConf, exit, Text } = require('../../utils')

function sshLogin (sshModel) {
  if (!sshModel) return
  const { name, domain, port, user, password } = sshModel.ssh
  const code = shell.exec(`expect -c "
    spawn ssh -p ${port} ${user}@${domain}
    expect {
      \\"*assword\\" {set timeout 6000; send \\"${password}\n\\"; exp_continue; sleep 3; }
      \\"yes/no\\" {send \\"yes\n\\"; exp_continue;}
      \\"Last*\\" {  send_user \\"\n成功登陆【${name}】\n\\";}
    }
    interact"
    echo "您已退出【${name}】"
  `, function (code, stdout, stderr) {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  })
}

module.exports = options => {
  // shell.exec('sh /Users/hezhiqiang/Studio/onion/nori-cli/bin/ssh_login')
  const { ssh } = getConf()
  const prompt = inquirer.prompt({
    type: 'rawlist',
    name: 'ssh',
    message: 'what do you want to do?',
    choices: () => ssh.map(x => x.name),
    filter: answer => ssh.filter(x => x.name === answer)[0]
  }).then(sshLogin)
}
