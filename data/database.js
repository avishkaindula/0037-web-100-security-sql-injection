const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  database: 'security',
  user: 'root',
  password: 'pass mysql8',
  // multipleStatements: true
  // By default the multipleStatements value is false.
  // So by default, the mysql2 package won't accept sql queries as input values more than once.
  // So even if we use an unsafe method where the users can inject sql queries as
  // a second sql statement inside user input fields, this built in protection will
  // automatically ignore that sql query passed by user through that input field.
  // We've set this value to true before just for demo purposes.
  // So all this means, nowadays it is so hard to perform sql injection attacks for modern
  // back-ends like this. Because, there's multiple layers of protections built in 
  // against sql injection attacks.
})

module.exports = pool;