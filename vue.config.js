const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  assetsDir: './static',
  pages: {
    index: {
      entry:'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Index page',
    }
  },
  transpileDependencies: true,
  lintOnSave:false, /*关闭语法检查*/
})

