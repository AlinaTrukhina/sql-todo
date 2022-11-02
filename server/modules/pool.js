const pg = require('pg');

// set up environment variable
// DATABASE_HOST = prime-alina-demo-db.cdaqcqcrctlc.us-east-2.rds.amazonaws.com 

/*
Database URL
postgresql://username:password@databaseurl/database_name
postgres://postgres:
*/

let pool;
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
  })
}
else {
  pool = new pg.Pool({
    database: "cloud-todo", // localhost
  });
}
module.exports = pool;