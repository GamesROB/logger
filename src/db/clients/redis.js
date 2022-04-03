const Redis = require('ioredis')
require('dotenv').config()

const redis = new Redis({
  host: process.env.REDIS_HOST || 'localhost', // Redis host IP (localhost is fine)
  port: process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT) : 6379, // Redis port
  family: process.env.REDIS_FAMILY || 4, // IP family- 4 for IPv4 or 6 for IPv6
  password: process.env.REDIS_AUTH,
  db: process.env.REDIS_DATABSE || 0 // Databse ID, default is 0
})

module.exports = redis
