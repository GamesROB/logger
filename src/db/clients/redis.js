const Redis = require('ioredis')
require('dotenv').config()
const redis = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
  family: 4, // 4 (IPv4) or 6 (IPv6)
  password: process.env.REDIS_AUTH,
  db: process.env.REDIS_DATABASE,
})


module.exports = redis
