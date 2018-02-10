const ip = require('ip');
const { copyText, Text, exit } = require('../../utils');
const { pipe } = require('ramda');

module.exports = options => {
  const ipAddress = ip.address();
  Text.info(`你的IP地址是：\n${ipAddress}`);

  if (options.copy) {
    copyText(ipAddress).then(pipe(Text.success('已粘贴到剪切板'), exit)).catch(pipe(Text.error('复制失败'), exit));
  } else exit();
};