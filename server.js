var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3000,

  user: "root",

  password: "",
  database: "employee_trackerDB"
});

connection.connect( error => {
  if (error) throw error;
  getInfo();

  connection.end();
});