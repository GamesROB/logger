const { Client, Pool } = require('pg') // PREREQUISITE: Have postgres installed and your user can connect

require('dotenv').config()
const pool = new Pool({
  user: process.env.PGUSER || postgres,
  host: process.env.PGHOST || localhost,
  database: process.env.PGDATABASE || logger,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT || 5432
})

pool.on('error', (e) => {
  console.error('Postgres error', e)
})

module.exports = pool
