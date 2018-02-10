const ip = require('./ip')

const commands = [
  ip
]

module.exports = function (program) {
  return commands.reduce(
    (prev, next) => next(prev),
    program
  )
}
