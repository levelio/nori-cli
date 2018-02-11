const action = require('./action')
const { write } = require('../../utils')
const Example = `
  Examples:
    $ onion color '#FFF'
    $ onion color 'rgb(255, 255, 255)'
`

module.exports = function addProgram (program) {
  program
    .command('color [cs]')
    .description('转换各种格式的色值')
    .action(action)
    .on('--help', function () {
      write(Example)
    })
  return program
}
