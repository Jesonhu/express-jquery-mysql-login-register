const mysql = require('mysql');
const { MYSQL_CONFIG } = require('../config');


/**
 * 
 * @param {string} str `mysql`操作语句
 * @param {string} value
 * @param {callback} callback 回调函数 
 * @see [Introduction](https://www.npmjs.com/package/mysql#introduction)
 */
module.exports = function(str, value, callback) {
  const config = mysql.createConnection({
    host: MYSQL_CONFIG.host,
    user: MYSQL_CONFIG.user,
    password: MYSQL_CONFIG.password,
    port: MYSQL_CONFIG.port,
    database: MYSQL_CONFIG.database
  });

  // 创建数据库连接
  config.connect();

  // 数据库操作
  config.query(str, value, (error, results, fields) => {
    if (error) throw error;
    callback && callback(error, results);
  });

  // 终止数据库连接
  config.end();
}