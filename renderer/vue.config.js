const { defineConfig } = require('@vue/cli-service')
const path = require('path')

console.log(process.env.NODE_ENV)

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV  ===  'production'  ?  path.join(__dirname, 'dist')  :  '/'
})
