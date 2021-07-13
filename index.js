const inquirer = require('inquirer')
const mysql = require('mysql')
const functions = require('./lib/functions')
const util = require('util');


const db = mysql.createConnection ({
    host:'localhost',
    user : 'root',
    password: 'password',
    database: 'employeedb'
})
console.log("databse started and connected")
const query = util.promisify(db.query).bind(db);
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'prompt',
            message: 'What would you like to do',
            choices: ['View all departments','view all roles','View all employees','Add department','Add role','Add an employee','Update employee Role', 'Exit app']
        },
    ]);
};
function runApp() {
    promptUser()
    .then(function (answers){
            console.log(answers)
        if (answers.prompt === 'View all employees') {
            functions.viewAllEmployees(db,runApp)
        }
        else if (answers.prompt === 'View all departments') {
            functions.viewAllDepartment (db,runApp)
        }
        else if  (answers.prompt === 'Add department') {
            functions.addDepartment (db,runApp)
        }
        else if  (answers.prompt === 'Add role') {
            functions.addRole(query,runApp)
        }
        else if  (answers.prompt === 'Add an employee') {
            functions.addEmployee (query,runApp)
        }
        else if  (answers.prompt === 'Update employee Role') {
            functions.updateEmployeeRole(db,runApp)
        }
        else if (answers.prompt === 'view all roles') {
            functions.viewAllRoles(db,runApp)
        }
        else if (answers.prompt === 'exit app') {
            console.log("bye")
        }
    })
}

 runApp()