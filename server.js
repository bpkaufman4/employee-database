
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Goober1@',
        database: 'employee_db'
    },
    console.log('Connected to the employee database.')
);

var viewAllEmployees = function() {
    db.query(
        `SELECT e1.id, e1.first_name, e1.last_name, role.title AS title, department.name AS department, role.salary AS salary, concat(e2.first_name, ' ', e2.last_name) AS manager
        FROM employee e1
        LEFT JOIN role
        ON e1.role_id = role.id
        LEFT JOIN department
        ON role.department_id = department.id
        LEFT JOIN employee e2
        ON e1.manager_id = e2.id;`
        ,
        function(err, results) {
            if(err){
                console.log(err);
            }
            console.table(results);
        }
    );
};

var viewAllDepartments = function() {
    db.query(
        `SELECT department.id, department.name
        FROM department;`,
        function(err, results) {
            if (err) {
                console.log(err);
            }
            console.table(results);
        }
    );
};

var viewAllRoles = function() {
    db.query(
        `SELECT role.title AS role, role.id, department.name AS department, role.salary
        FROM role
        LEFT JOIN department
        ON role.department_id = department.id;`,
        function(err, results) {
            if (err) {
                console.log(err);
            }
            console.table(results);
        }
    );
}

var addDepartment = function(data) {
    const sql = `INSERT INTO department (name)
        VALUES (?)`;
    const params = [data];

    db.query(sql, params, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
    })
}

var addRole = function(data) {
    const sql = `INSERT INTO role (title, salary, department_id)
        VALUES (?,?,?)`;
    const params = [data.add_role_title, data.add_role_salary, data.add_role_department_id];

    db.query(sql, params, (err, results) => {
        if (err) {
            console.log(err);
        }
        console.table(results);
    })
}

// viewAllEmployees();
// viewAllDepartments();
// viewAllRoles();

var promptUser = function() {
    return inquirer.prompt(
        [
            {
                type: 'list',
                name: 'options',
                message: 'What would you like to do?',
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Update an employee role']
            }
        ]
    )
};

var promptAddDepartment = function() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'add_department',
                message: 'What is the department name?'
            }
        ]
    )
}

var promptAddRole = function() {
    return inquirer.prompt(
        [
            {
                type: 'input',
                name: 'add_role_title',
                message: 'What is the title of the role?'
            },
            {
                type: 'input',
                name: 'add_role_salary',
                message: 'What is the salary of this role?'
            },
            {
                type: 'input',
                name: 'add_role_department_id',
                message: 'What is the department id of this role?'
            }
        ]
    )
}


promptUser()
    .then(inputData => {
        console.log(inputData);
        if (inputData.options === 'View all employees') {
            viewAllEmployees();
        } else if (inputData.options === 'View all roles') {
            viewAllRoles();
        } else if (inputData.options === 'View all departments') {
            viewAllDepartments();
        } else if (inputData.options === 'Add a department') {
            promptAddDepartment()
                .then(newDepartmentData => {
                    console.log(newDepartmentData.add_department);
                    addDepartment(newDepartmentData.add_department);
                });
        } else if (inputData.options === 'Add a role') {
            promptAddRole()
                .then(newRoleData => {
                    console.log(newRoleData);
                    addRole(newRoleData);
                });
        }
    });