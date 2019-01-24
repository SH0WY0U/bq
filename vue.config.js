module.exports = {
  devServer: {
    proxy: {
      "/api": {
        //自定义的链接或者history模式的vue router也不要用到'/api'这样开头或中间出现
        // 会被拦截，起冲突报错
        target: "http://localhost:9090",
        changeOrigin: true
      }
    }
  }
}