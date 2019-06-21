const Hapi = require('hapi');
const routesHelloHapi = require('./routes/hello-hapi')
const routesShop = require('./routes/shops')
const routesOrders = require('./routes/orders')
const config = require('./config')
const pluginHapiSwagger = require('./plugins/hapi-swagger')

const server = new Hapi.Server();
// 配置服务器启动 host 与端口
server.connection({
  port: config.post,
  host: config.host
});

const init = async () => {
  await server.register([
    ...pluginHapiSwagger
  ])
  server.route([
    ...routesHelloHapi,
    ...routesShop,
    ...routesOrders
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();