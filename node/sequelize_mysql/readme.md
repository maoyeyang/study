# sequelize 数据库脚手架

- mysql2 数据库驱动

- sequelize orm 工具 table -> Object
  对底层的 sql API 化 优化 model 层

- sequelize-cli 命令行工具

- config 数据库配置文件

`yarn add mysql2 sequelize sequelize-cli` 项目依赖

`./node_modules/.bin/sequelize init` 初始化

`./node_modules/.bin/sequelize db:create` 创建数据库

`./node_modules/.bin/sequelize migration:create --name create-shops-table` 创建表的 js 文件

`./node_modules/.bin/sequelize db:migrate` 执行迁移(执行后数据库就有表了)

`./node_modules/.bin/sequelize db:migrate:undo` 回退表操作

`./node_modules/.bin/sequelize seed:create --name init-shops` 初始化数据(js)

`./node_modules/.bin/sequelize db:seed:all` 插入数据
