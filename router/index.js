const express = require('express');
const mysql = require('../module/mysql');
const router = express.Router();


// @see [node-blog](https://github.com/Jesonhu/nodejsblog/blob/master/router/index.js)
router.use('/api/register', require('./register'));

router.use('/api/login', require('./login'));

module.exports = router;