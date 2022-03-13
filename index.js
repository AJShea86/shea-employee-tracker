const inquirer = require("inquirer");

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
        viewAllRoles()
    } else if (data.selection === "view all employees") {
        viewAllEmps()
    } else if (data.selection === "add a department") {
        addDept()
    } else if (data.selection === "add a role") {
        addRole()
    } else if (data.selection === "add an employee") {
        addEmployee()
    } else if (data.selection === "update an employee role") {
        updateEmployee()
        } else {quitProgram()}
  });
}

function viewAllDepts() {
  console.log("get depts from database");
  //mysql to view depts from the database
  mainPrompt()
}

function viewAllRoles() {
    console.log("get roles from database");
    //mysql to view depts from the database
    mainPrompt()
  }

  function viewAllEmps() {
    console.log("view all employees from database");
    //mysql to view depts from the database
    mainPrompt()
  }

  function addDept() {
    console.log("add dept to database");
    //mysql to view depts from the database
    mainPrompt()
  }

  function addRole() {
    console.log("add role to database");
    //mysql to view depts from the database
    mainPrompt()
  }

  function addEmployee() {
    console.log("add employee to database");
    //inquire .prompt here that asks the info about the employee
    //mysql to view depts from the database
    mainPrompt()
  }
  function updateEmployee() {
    console.log("updates employee from database");
    //mysql to view depts from the database
    //choose an employee to update
    mainPrompt()
  }
  function quitProgram() {
    console.log("quits the program");
    //mysql to view depts from the database
    process.exit()
  }
  mainPrompt()
  
  
  
  
  