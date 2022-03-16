const inquirer = require("inquirer");
const table = require("console.table");
const mysql2 = require("mysql2");

const db = mysql2.createConnection(
  {
    host: "localhost",
    //port: 3001, //not sure if i need this? module 21 in lecture
    user: "root",
    password: "root",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

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
  db.query(`SELECT * FROM dept`, function (err, data) {
    console.table(data);
  });
  mainPrompt();
}

function viewAllRoles() {
  db.query(
    `SELECT role.id, role.title, dept.dept_name, role.salary FROM role
  JOIN dept ON dept.id = role.dept_id`,
    function (err, data) {
      console.table(data);
    }
  );
  mainPrompt();
}

function viewAllEmps() {
  db.query(
    `SELECT employee.id, 
    employee.first_name, 
    employee.last_name,
    employee.manager_id, 
    role.title, 
    role.salary, 
    dept.dept_name AS department
    FROM employee, role, dept
    WHERE dept.id = role.dept_id
    AND role.id = employee.role_id
    ORDER BY employee.id ASC;`,
    function (err, data) {
      console.table(data);
    }
  );

  mainPrompt();
}

function addDept() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the name of the department?",
        name: "deptName",
      },
    ])
    .then((answer) => {
      db.query(
        `INSERT INTO dept VALUES (default, "${answer.deptName}");`,
        (err, data) => {
          console.table(data);
          console.log(err);
          mainPrompt();
        }
      );
    });
}

function addRole() {
  console.log("add role to database");
  //mysql to view depts from the database

  inquirer
    .prompt([
      {
        type: "input",
        message: "What role do you want to add?",
        name: "addedRole", 
      },

      {
        type: "input",
        message: "What is the salary of this role?",
        name: "addedRoleSalary",
      },

      {
        type: "input",
        message: "Add a department ID for this role.",
        name: "addedRoleDept",
      },
    ])
    .then((answer) => {
      console.log(answer)
      db.query(
        `INSERT INTO role VALUES (default,
          "${answer.addedRole}",
          "${answer.addedRoleSalary}",
          "${answer.addedRoleDept}" 
        )`,
        (err, data) => {
          console.table(data);
          console.log(err);

          mainPrompt();

    }); 

});
};

function addEmployee() {
  console.log("add employee to database");
  //inquire .prompt here that asks the info about the employee
  inquirer
    .prompt([
      {
        type: "input",
        mesage: "What is the employee's first name?",
        name: "firstName",
      },

      {
        type: "input",
        mesage: "What is the employee's last name",
        name: "lastName",
      },

      {
        type: "list",
        mesage: "What is the employee's role?",
        name: "", 
      },

      {
        type: "list",
        mesage: "Who is the employee's manager?",
        name: "", 
      },
    ])
    .then();

  //mysql to view depts from the database
  mainPrompt();
};

function updateEmployee() {
  console.log("updates employee from database");
  //mysql to view depts from the database
  //choose an employee to update

  inquirer
    .prompt([
      {
        type: "input",
        message: "Choose an employee ID to update",
        name: "id",
      },

      {
        type: "input",
        message: "What is the employee's new role?",
        name: "answer",
      },
    ])
    .then((data) => {
      console.log(data);
      mainPrompt();
    });
}

function quitProgram() {
  console.log("quits the program");
  //mysql to view depts from the database
  process.exit();
}

mainPrompt();
