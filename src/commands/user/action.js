const shell = require('shelljs')
const inquirer = require('inquirer')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { getConf, exit, Text, copyText } = require('../../utils')


function fetchUser (findKey, value, isAll) {
  const { secret, mongodb } = getConf().user
  mongoose.connect(mongodb)
  const db = mongoose.connection
  db.on('err', err => {
    Text.error('数据库连接失败，请检查配置文件')
    exit()
  })
  db.once('open', () => {
    const users = db.collection('users')
    users.findOne(
      { [findKey]: value },
      (err, user) => {
        if (err) {
          Text.error('未查找到用户')
          exit()
        }
        const { _id: id, role } = user
        const token = `Bearer ${jwt.sign({ id: id.toString(), role }, secret, {expiresIn: 60 * 60 * 24 * 30})}`
        user.token = token
        if (isAll) {
          const userJson = JSON.stringify(user)
          Text.info(userJson)
        } else {
          Text.info(`\u{1F511}  id: ${user._id}`)
          Text.info(`\u{1F40B}  name: ${user.name}`)
          Text.info(`\u{1F95A}  nickname: ${user.nickname}`)
          Text.info(`\u{1F4F1}  phone: ${user.phone}`)
          Text.info(`\u{1F47C}  role: ${user.role}`)
          Text.info(`\u{1F512}  token: ${user.token}`)
        }
        exit()
      }
    )
  })
}

module.exports = (options) => {
  const { userName, phone, userId, all } = options
  const { user } = getConf()
  const { secret, mongodb } = user
  if (userName) {
    fetchUser('name', userName, all)
  } else if (phone) {
    fetchUser('phone', phone, all)
  } else if (userId) {
    fetchUser('_id', userId, all)
  }
}
