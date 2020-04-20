var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');


var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "",
  database: "employee_trackerDB"
});

connection.connect( function(err) {
  if (err) throw err;
  getInfo();
});

let getInfo = () => { 
  inquirer.prompt([
      {
        type: 'list',
        name: 'question1',
        message: "What would you like to do?",
        choices: [
            'ADD department, role, or employee',
            'VIEW departments, roles, or employees',
            "UPDATE employee's role",
            "Exit"
        ]
      },
    ])
    .then((answers) => {
      switch(answers.question1) {
      case "ADD department, role, or employee": 
        addPrompt();
        break;
      case "VIEW departments, roles, or employees":
        viewPrompt();
        break;
      case "UPDATE employee's role":
        updateRole();
        break;
      case "Exit":
        connection.end();
      default:
        connection.end();
      }
    })
}  


// ================================= ADD ======================== /
let addPrompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "add",
      message: "Which would you like to add?",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
      ]
    }
  ])
  .then((answers) => {
    switch(answers.add) {
    case "Add department": 
      inquirer.prompt([
        {
          type: "input",
          name: "addDepartment",
          message: "Which department would you like to add?"
        }
      ])
      .then((answers) => {
        let sql = "INSERT INTO department SET ?";
        connection.query(sql, {department_name: answers.addDepartment}, (err, res) => {
          if (err) throw err;
          console.log(`${answers.addDepartment} has been added to the department list`);
          getInfo();
        });
        return;
      }) 
      break;

    case "Add role":
      inquirer.prompt([
        {
          type: "input",
          name: "addRole",
          message: "Which role would you like to add?"
        }
      ])
      .then((answers) => {
        let sql = "INSERT INTO role SET ?";
        connection.query(sql, {title: answers.addRole}, (err, res) => {
          if (err) throw err;
          console.log(`${answers.addRole} has been added to the list of roles`);
          getInfo();
        });
        return;
      })
      break;

    case "Add employee":
      return inquirer.prompt([
        {
          type: "input",
          name: "addFirstName",
          message: "What is the new employee's first name?"
        },
        {
          type: "input",
          name: "addLastName",
          message: "What is the new employee's last name?"
        }
      ])
      .then((answers) => {
        let sql = "INSERT INTO employee SET ?";
        connection.query(sql, {first_name: answers.addFirstName, last_name: answers.addLastName}, (err, res) => {
          if (err) throw err;
          console.log(`${answers.addFirstName} ${answers.addLastName} has been added to the list of employees`);
          getInfo();
        });
        return;
      })
      break;

    default: 
    break;
    }
  })
}
//=====================================View-====================================================
let viewPrompt = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "view",
      message: "Which would you like to view?",
      choices: [
        "View departments",
        "View roles",
        "View employees",
      ]
    }
  ])
  .then((answers) => {
    switch(answers.view) {
    case "View departments": 
      console.log("Here are the current departments:");
      connection.query("SELECT department_name FROM department", (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
          console.log(res[i]["department_name"]);
        }
        getInfo();
      });
      return;

    case "View roles":
      console.log("Here are the current roles:")
      connection.query("SELECT title FROM role", (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
          console.log(res[i]["title"]);
        }
        getInfo();
      });
      return;

    case "View employees":
      console.log("Here are the current employees:")
      connection.query("SELECT first_name, last_name FROM employee", (err, res) => {
        if (err) throw err;
        for (let i = 0; i < res.length; i++) {
          console.log((res[i]["first_name"]) + " " + (res[i]["last_name"]));
        }
        getInfo();
      });
      return;
    }
  })
}
//=====================================Update========================================
let updateRole = () => {
  //GET VALUES FROM EMPLOYEE DATABASE, PUT THOSE IN INQUIRER PROMPT
  return inquirer.prompt([
    {
      type: "input",
      name: "updateFirstName",
      message: "Type the FIRST name of the employee whose role you'd like to change?"
    },
    {
      type: "input",
      name: "updateLastName",
      message: "Type the LAST name of the employee whose role you'd like to change?" 
    },
    {
      type: "input",
      name: "updateRole",
      message: "What is this employee's NEW role (role must already exist)?"
    }
  ])
  .then((answers) => {
    console.log(`You'd like to update the role of ${answers.updateFirstName} ${answers.updateLastName} to ${answers.updateRole}`);
  })
}