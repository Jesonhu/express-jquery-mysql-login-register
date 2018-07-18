## 使用 `phpMyAdmin` 管理数据库，以下操作均在里面操作

+ 创建数据库 `node_demo`
+ 创建 `node_demo` `user` 表
```mysql
CREATE TABLE `node`.`user`(
       `id`     INT(11)  NOT NULL AUTO_INCREMENT,
       `username` varchar(64)   NOT NULL ,
        `password` varchar(64) NOT NULL ,
        `email` varchar(64) NOT NULL ,
        PRIMARY KEY (`id`)
        )
      ENGINE = InnoDB
```