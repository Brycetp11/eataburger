var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "o70wg2ptf3oi64qm",
  password: "lci5vdw1nwkl5e62",
  database: "hlaqbh3lfjzass64"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
