
const mysql = require('mysql2');
const cTable = require('console.table')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Goober1@',
        database: 'employee_db'
    },
    console.log('Connected to the employee database.')
);

var selectAll = function() {
    db.query(
        `SELECT employee.id, employee.first_name, employee.last_name , role.title AS title, department.name AS department, role.salary AS salary
        FROM employee
        LEFT JOIN role
        ON employee.role_id = role.id
        LEFT JOIN department
        ON role.department_id = department.id;`
        ,
        function(err, results) {
        if(err){
            console.log(err);
        }
        console.table(results);
        }
    );
};

selectAll();

// `SELECT e.*, concat(m.first_name, ' ', m.last_name) AS manager
//         FROM employee e
//         LEFT JOIN employee m ON m.id = e.manager_id;`