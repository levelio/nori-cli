// const { copyText, Text, exit } = require('../../utils')
const shell = require('shelljs')

module.exports = options => {
  console.log(1)
  shell.exec(`expect -c "
      spawn ssh -p 22 master@10.8.8.8
      expect {
        \\"*assword\\" {set timeout 6000; send \\"unitedmaster\n\\"; exp_continue ; sleep 3; }
        \\"yes/no\\" {send \\"yes\n\\"; exp_continue;}
        \\"Last*\\" {  send_user \\"\n成功登录【】\n\\"; }
      }
      interact"
      echo "您已退出【】"
  `)
}
