const http = require('http');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('./module/mysql');
const { SERVER_CONFIG } = require('./config');
const app = express();


// 静态资源配置 start 
// @see [path.join()](http://nodejs.cn/api/path.html#path_path_join_paths)
// @see [__dirname](http://nodejs.cn/api/modules.html#modules_dirname)
// @see [node-blog](https://github.com/Jesonhu/nodejsblog/blob/master/app.js)
// app.use(express.static(path.join(__dirname, 'project')));
app.use(express.static(__dirname + '/public'));
// 访问`/`默认打开`./public/index.html`
app.use('/', express.static(__dirname + './public'));
// 静态资源配置 end

// `http(s)` `post`请求方式设置
// 如果`get`方式不用设置就能获取到请求的参数
// 但是`post`方式需要使用`body-parser`来获取请求的参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// 使用路由拆分
app.use('/', require('./router'));

// 创建服务，开启在`SERVER_CONFIG.port`端口
http.createServer(app).listen(SERVER_CONFIG.port);

// 开启服务后提示
console.log(`Server running on 127.0.0.1:${SERVER_CONFIG.port}`);




