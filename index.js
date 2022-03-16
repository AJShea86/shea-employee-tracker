const inquirer = require("inquirer");
const table = require("console.table")
const mysql = require('mysql2');


// this function asks the initial questions
function mainPrompt() {
  inquirer
    .prompt({
      type: "list",
      message: "Make a selection.",
      name: "selection",
      choices: [
        "view all departments",
        "view all roles",
        "view all employees",
        "add a department",
        "add a role",
        "add an employee",
        "update an employee role",
        "quit the program",
      ],
    })
    .then((data) => {
      console.log(data);
      if (data.selection === "view all departments") {
        viewAllDepts();
      } else if (data.selection === "view all roles") {
        viewAllRoles();
      } else if (data.selection === "view all employees") {
        viewAllEmps();
      } else if (data.selection === "add a department") {
        addDept();
      } else if (data.selection === "add a role") {
        addRole();
      } else if (data.selection === "add an employee") {
        addEmployee();
      } else if (data.selection === "update an employee role") {
        updateEmployee();
      } else {
        quitProgram();
      }
    });
}

function viewAllDepts() {
  console.log("get depts from database");
  //mysql to view depts from the database
  mainPrompt();
}

function viewAllRoles() {
  console.log("get roles from database");
  //mysql to view depts from the database
  mainPrompt();
}

function viewAllEmps() {
  console.log("view all employees from database");
  //mysql to view depts from the database
  mainPrompt();
}

function addDept() {
  console.log("add dept to database");
  //mysql to view depts from the database
  inquirer.prompt([
    {
      type: "input",
      message: "What is the name of the department?",
      name: "deptName"
    }
  ])
  .then()//add answer to dept list

  mainPrompt();
}

function addRole() {
  console.log("add role to database");
  //mysql to view depts from the database

  inquirer.prompt([

    {
      type: "input",
      message: "What role do you want to add?",
      name: "addedRole" //or list?
    },

    {
      type: "input",
      message: "What is the salary of this role?",
      name: "addedRoleSalary" //or list?
    },

    {
      type: "input",
      message: "What department does this role belong to?",
      name: "addedRoleDept" //or list?
    }


  ])
  .then()//add to database

  mainPrompt();
}

function addEmployee() {
  console.log("add employee to database");
  //inquire .prompt here that asks the info about the employee
  inquirer.prompt([

    {
      type: "input",
      mesage: "What is the employee's first name?",
      name: "firstName"
    },

    {
      type: "input",
      mesage: "What is the employee's last name",
      name: "lastName"
    },

    {
      type: "list",
      mesage: "What is the employee's role?",
      name: ""//list of roles
    },

    {
      type: "list",
      mesage: "Who is the employee's manager?",
      name: ""//manager list
    },

  ])
  .then()

  //mysql to view depts from the database
  mainPrompt();
}
function updateEmployee() {
  console.log("updates employee from database");
  //mysql to view depts from the database
  //choose an employee to update

  inquirer.prompt([
    {
      type: "list",
      message: "Choose an employee to update",
      choices: []//need to view employee list here
    },

    {
      type: "list",
      message: "What is the employee's new role?",
      choices: []// list or just any answer?
    }


  ]).then()

  mainPrompt();
}
function quitProgram() {
  console.log("quits the program");
  //mysql to view depts from the database
  process.exit();
}
mainPrompt();
