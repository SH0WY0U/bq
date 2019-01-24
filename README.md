# bq

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run www
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###几点管理员补充
1.设计图纸以iPhone6/7/8为基准横向（750）375px，rem为单位；
2.玫红主题色使用：#f1457c；
3.全局背景色已设置：#999；
4.已引入重置样式表且包含万能清除浮动；
5.已引入border.css，请妥当使用；
6.启动项目指令：npm run www；
7.项目ui框架统一使用vant（icon已全局引入）且已设置组件实现自动引入样式，使用时按需引入即可；
8.所有ajax请求使用/api开头，且已设置全局代理该开头请求到http://localhost:9090，请自行配置相关服务器
