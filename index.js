const inquirer = require('inquirer')
const functions = require ('./lib/functions')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'promt',
            message: 'What would you like to do',
            choices: ['View all employees', 'View employees by department', 'View employees by manager', 'Add employee', 'Remove employee', 'Update employee Role', 'Update employee Manager', 'view all roles', 'Exit app']
        },
    ]);
};
function runApp() {
    promptUser()
    .then(function (answers){
            console.log(answers)
        if (answers.prompt === 'View all employees') {
            functions.viewAllEmployees()
        }
        else if (answers.prompt === 'View employees by department') {
            functions.employeeByDepartment ()
        }
        else if (answers.prompt === 'View employees by manager') {
            functions.employeeByManager ()
        }
        else if  (answers.prompt === 'Add employee') {
            functions.addEmployee ()
        }
        else if  (answers.prompt === 'Remove employee') {
            functions.removeEmployee ()
        }
        else if  (answers.prompt === 'Update employee Role') {
            functions.updateEmployeeRole()
        }
        else if  (answers.prompt === 'Update employee Manager') {
            functions.updateEmployeeManager()
        }
        else if (answers.prompt === 'view all roles') {
            functions.viewAllRoles()
        }
        else if (answers.prompt === 'exit app') {
            console.log("bye")
        }
    })
}

runApp ();
module.exports = runApp();