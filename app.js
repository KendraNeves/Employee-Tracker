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
        ]
      },
    ])
//------------------------------------ADD-------------------------------------------------------
    .then((answers) =>{
      if (answers.question1 === "ADD department, role, or employee") {
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
          if (answers.add === "Add department") {
            return inquirer.prompt([
              {
                type: "input",
                name: "addDepartment",
                message: "Which department would you like to add?"
              }
            ])  
          }
        })
      }

  //----------------------------------View--------------------------------------------
      if(answers.question1 === "VIEW departments, roles, or employees") {
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
      }

  //------------------------------------Update----------------------------------------------------
      if(answers.question1 === "UPDATE employee's role") {
        return inquirer.prompt([
          {
            type: "list",
            name: "update",
            message: "Which role would you like to update?",
            choices: [
              "Manager",
              "Software Engineer",
              "Intern",
            ]
          }
        ])
      }
    
    
    
    
    })

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

getInfo();
