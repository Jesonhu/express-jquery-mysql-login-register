/**
 * 登录页面路由 
 */
const express = require('express');
const mysql = require('../module/mysql');
const router = express.Router();

// 匹配到`/api/register`时处理
router.post('/', (req, res) => {
  const { username, password } = req.body;
  const user_search = 'SELECT * FROM user where username = ?';

  if (username.length === 0) {
    res.json({
      "code": 0,
      "msg": "用户名不能为空"
    });
    return;
  }
  if (password.length === 0) {
    res.json({
      "code": 0,
      "msg": "密码不能为空"
    });
    return;
  }

  mysql(user_search, [username], (err, data) => {
    if (err) {
      throw err;
      return;
    }
    // `该用户名`不存在
    if (Array.isArray(data) && data.length === 0) {
      res.json({
        "code": 0,
        "msg": "用户名输入错误"
      });
      return;
    }

    // `密码`输入不对
    if (password !== data[0].password) {
      res.json({
        "code": 0,
        "msg": "密码输入不正确"
      });
      return;
    }

    res.json({
      "code": 1,
      "msg": "欢迎回来\(^o^)/~"
    });
  });
});

module.exports = router;