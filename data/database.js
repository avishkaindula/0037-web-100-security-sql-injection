const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'pass mysql8',
  multipleStatements: true
})

module.exports = pool;