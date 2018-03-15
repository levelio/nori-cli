const ip = require('./ip')
const color = require('./color')
const site = require('./site')

const commands = [
  ip,
  color,
  site
]

module.exports = function (program) {
  return commands.reduce(
    (prev, next) => next(prev),
    program
  )
}
