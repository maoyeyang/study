require('env2')('./.env')
const {
  env
} = process
console.log(env);
module.exports = {
  host: env.HOST,
  post: env.PORT
}