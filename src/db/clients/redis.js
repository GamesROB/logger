const Redis = require('ioredis')
require('dotenv').config()
const redis = new Redis({
  port: process.env.REDIS_PORT || 6379, // Redis port
  host: process.env.REDIS_HOST || localhost, // Redis host
  family: process.env.REDIS_FAMILY || 4, // 4 (IPv4) or 6 (IPv6)
  password: process.env.REDIS_AUTH,
  db: process.env.REDIS_DATABASE || 0,
})


module.exports = redis
