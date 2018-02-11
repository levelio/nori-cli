const colorString = require('color-string')
const { Text, write, exit } = require('../../utils')
const chalk = require('chalk')

module.exports = (colorInput = '') => {
  const colorInfo = colorString.get(colorInput)
  if (!colorInfo) {
    Text.error('请输入正确的色彩格式')
  } else {
    const colorValue = colorInfo.value
    const hex = colorString.to.hex(colorValue)
    const rgb = colorString.to.rgb(colorValue)
    const hsl = colorString.to.hsl(colorValue)
    write(chalk.hex(hex)(`
      ▉▉▉▉▉▉▉▉▉▉\n
      hex: ${hex}\n
      rgb: ${rgb}\n
      hsl: ${hsl}
    `))
  }

  exit()
}
