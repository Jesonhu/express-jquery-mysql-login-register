/**
 * 页面注册路由 
 */
const express = require('express');
const mysql = require('../module/mysql');
const router = express.Router();

// 匹配到`/api/register`时处理
router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  const user_search = 'SELECT * FROM user where username = ?';
  const user_insert = 'INSERT INTO `user` (`username`, `email`, `password`) VALUES (?, ?, ?)';

  if (username.length === 0) {
    res.json({
      "code": 0,
      "msg": "用户名不正确"
    });
    return;
  }
  if (email.length === 0) {
    res.json({
      "code": 0,
      "msg": "邮箱不正确"
    });
    return;
  }
  if (password.length === 0) {
    res.json({
      "code": 0,
      "msg": "密码不正确"
    });
    return;
  }

  mysql(user_search, [username], (err, data) => {
    if (err) {
      throw err;
      return;
    }
    // 不存在相同`用户名`的用户
    if (data.length === 0) {
      mysql(user_insert, [username, email, password], (error, data) => {
        if(error){
            // res.locals.result = '<p class="err">注册失败，请重试</p>';
            res.json({
              code: 0,
              msg: '注册失败，请重试'
            })
            return;
        }
        // @see [express-res](http://www.expressjs.com.cn/4x/api.html#res)
        // res.locals.result = '<p class="ok">恭喜注册成功</p>';
        res.json({
          "code": 1,
          "msg": "恭喜注册成功!!!"
        });
      });
    } else {
      res.json({
        "code": 0,
        "msg": "请勿重复注册"
      });
    }
  });
});

module.exports = router;