const ip = require('ip')
const { copyText, Text, exit } = require('../../utils')

module.exports = options => {
  const ipAddress = ip.address()
  Text.info(`你的IP地址是：\n${ipAddress}`)

  if (options.copy) {
    copyText(ipAddress)
      .then(() => {
        Text.success('已粘贴到剪切板')
        exit()
      })
      .catch(() => {
        Text.error('复制失败')
        exit()
      })
  } else exit()
}
