const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log("DB Connection Error:", err.message);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;
