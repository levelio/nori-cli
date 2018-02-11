const ip = require('./ip')
const color = require('./color')

const commands = [
  ip,
  color
]

module.exports = function (program) {
  return commands.reduce(
    (prev, next) => next(prev),
    program
  )
}
