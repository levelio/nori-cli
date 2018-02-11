#!/usr/bin/env node

const program = require('commander')
const readPkgUp = require('read-pkg-up')
const { has, when } = require('ramda')

const welcome = require('./welecome')
const commands = require('./commands')
const pkg = readPkgUp.sync().pkg

program
  .version(pkg.version)
  .option('-w, --welcome-nori-cli', 'welcome nori-cli')

commands(program)

program.parse(process.argv)

const hello = when(
  has('welcomeNoriCli'),
  welcome
)

hello(program)

//     user         获取测试环境用户信息
//     ip           获取本机 IP 地址
//     www          指定目录启动本地服务
//     ssh          SSH 快速登录
//     aqi          查询城市 AQI 指数
//     url          URL 地址操作
//     qr           生成和识别二维码
//     rn           RN 功能支持
//     color        色值转换
//     yd           有道翻译
