const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Rp0p",
  database: "loginapp"
});

connection.connect((err) => {
  if (err) {
    console.log("Database Error");
  } else {
    console.log("Database Connected");
  }
});

module.exports = connection;