let mysql = require("mysql");

//koneksi ke database mysql

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "restapinodejs",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("MYSQL CONNECTED SUCCESS");
});

module.exports = conn;
