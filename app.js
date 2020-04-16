var mysql = require("mysql");
var inquirer = require("inquirer");


function getInfo(){ 
  return inquirer
    .prompt([
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
    .then((answers) =>{
      switch(answers.question1) {
      case "ADD department, role, or employee": 
        return addPrompt();
      case "VIEW departments, roles, or employees":
        return viewPrompt();
      case "UPDATE employee's role":
        return updateRole();
      case "Exit":
        return;
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
      return inquirer.prompt([
        {
          type: "input",
          name: "addDepartment",
          message: "Which department would you like to add?"
        }
      ]) 
    case "Add role":
      return inquirer.prompt([
        {
          type: "input",
          name: "addRole",
          message: "Which role would you like to add?"
        }
      ])
    case "Add employee":
      return inquirer.prompt([
        {
          type: "input",
          name: "addEmployee",
          message: "Which employee would you like to add?"
        }
      ])
    default: 
      break;
    }
  })
}
//=====================================View-====================================================
let viewPrompt = () => {
  return inquirer.prompt([
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
    switch(answers.add) {
    case "View departments": 
      return inquirer.prompt([
        {
          type: "input",
          name: "viewDepartment",
          message: "Here are the current departments:"
          //TODO- get and print all the departments here
        }
      ]) 
    case "View roles":
      return inquirer.prompt([
        {
          type: "input",
          name: "viewRole",
          message: "Here are the current roles:"
          //TODO- get and print all here
        }
      ])
    case "View employees":
      return inquirer.prompt([
        {
          type: "input",
          name: "viewEmployee",
          message: "Here are the current employees:"
           //TODO- get and print all here

        }
      ])
    default: 
      break;
    }
  })
}
//=====================================Update========================================
let updateRole = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "update",
      message: "Who's role do you want to update?",
      choices: [
        //TODO for each loop through all the employees names in seeds.sql and print them here
      ]
    }
  ])
  .then((answers) => {
    return inquirer.prompt([
      {
        type: "list",
        name: "update",
        message: "What is this employee's new role?",
        choices: [
          //TODO- for each loop through all current roles
        ]
      }
    ])
  })
}







getInfo()
