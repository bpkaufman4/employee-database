
const exp = require('constants');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Goober1@',
        database: 'employee_db'
    },
    console.log('Connected to the employee database.')
);

app.use(express.json());

db.query(`SELECT * FROM employee`, (err, rows) => {
    console.log(rows);
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});