const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "halffar",
  password: "adminroot",
  port: 5432,
});

module.exports = pool;
