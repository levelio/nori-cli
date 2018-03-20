const ip = require('./ip')
const color = require('./color')
const ssh = require('./ssh')
const user = require('./user')
const site = require('./site')

const commands = [
  ip,
  color,
  ssh,
  user,
  site
]

module.exports = function (program) {
  return commands.reduce(
    (prev, next) => next(prev),
    program
  )
}
