# Docker

- 项目要经过开发,测试,上线

  env cross-env

  这些环境是在不同机器上的 运维

  一键发布我们的项目 容器

- os linux mysql mongodb

  独立 应用之间没有影响, 共享动力 ,数据库存储

  机器的性能 VMWare

  测试服务器

  前端可以独立的做运维

- 运维,发布 更简单 前端可以利用 docker

- 微服务架构

  端口

- 制作 Dockerfile 文件

  1. FROM ... 拉取镜像到本地 跨机器安装时很方便
  2. WORKDIR /app 设置镜像中的工作目录
  3. COPY package.json /app 拷贝文件
  4. RUN npm install 安装 node 包
  5. COPY . /app
  6. EXPOSE 8081 暴露端口
  7. CMD node index.js

- 根据 Dockerfile 构建镜像

  `docker build -t first-docker-node .`

  `docker images`

  `docker container run -p 1234:8081 first-docker-node app listening on port 8081`
