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
});

function getInfo(){
//TODO- "What would you like to do?" - using Inquirer 

//Switches inside of switches
/*
- View info
  - Departments
  - Roles
  - Employees
- Add info
  - Departments
  - Roles
  - Employees
- Update info
  - Roles
*/
}


