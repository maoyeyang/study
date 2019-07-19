const delegates = require('delegates')

const proto = module.exports = {

}
delegates(proto, 'response').access("body")
delegates(proto, 'request').access("method").access("url")