// const db = require('../server');
const runApp = require('../index')



function viewAllEmployees() {
    console.log("show all employees")
    //this can be wrapped in the api route
    db.query(`SELECT * FROM employees;`, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.log(result)
    })
}
function employeeByDepartment() {
    console.log("View employees by department")
    runApp()
}
function employeeByManager() {
    console.log("View employees by manager")
    runApp()
}
function addEmployee() {
    console.log("Add employee")
    runApp()
}
function removeEmployee() {
    console.log("Remove employee")
    runApp()
}
function updateEmployeeRole() {
    console.log("Update employee Role")
    runApp()
}
function updateEmployeeManager() {
    console.log("Update employee Manager")
    runApp()
}
function viewAllRoles() {
    console.log("view all roles")
    runApp()
}

module.exports = {
    viewAllEmployees, employeeByDepartment, employeeByManager,
    addEmployee, removeEmployee, updateEmployeeRole, updateEmployeeManager,
    viewAllRoles
}