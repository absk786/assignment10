const inquirer = require('inquirer')

function viewAllEmployees(db, runApp) {
    console.log("show all employees")
    //this can be wrapped in the api route
    const sql = `SELECT * FROM employee;`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()
    })
}

function employeeByDepartment(db, runApp) {
    console.log("View employees by department")
    const sql = `SELECT employee.first_name AS employee_first_name, department.name AS department_name
    FROM employee
    JOIN department ON employee.department = emplyoeeByDepartment;`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()
    })
    SELECT
}

function addDepartment(db, runApp) {
    enterDepName().then((data) => {
        console.log("Add department")
        const sql = "INSERT INTO department (name) VALUES (?);"
        db.query(sql, data.departmentName, (err,) => {
            if (err) {
                console.log(err)
            }
            console.log("your department has been added")
            runApp()
        })
    })
}
function addRole(query, runApp) {
    enterNewRole(query).then(async (data) => {
        console.log("Add role")
        const sql = "INSERT INTO role (title,salary,department_id) VALUES (?,?,?);"
        await query(sql, [data.newRole,data.newSalary,data.newDepartmentId])
       console.log("role was added")
       runApp()
    })
}
function addEmployee(db, runApp, answers) {
    console.log("Add employee")
    const sql = `INSERT INTO employees ('first_name','last_name','manager_id','role_id')
    VALUES (?,?,?,?,?);`
    db.query(sql, answers, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()

    })
}

function updateEmployeeRole(db, runApp, answers) {
    console.log("Update employee Role")
    const sql = `UPDATE FROM employees WHERE id=?;`
    db.query(sql, answers, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()
    })
}
function viewAllRoles(db, runApp) {
    console.log("view all roles")
    const sql = `SELECT * FROM role;`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()
    })
}
function viewAllDepartment(db, runApp) {
    console.log("view all roles")
    const sql = `SELECT * FROM department;`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()
    })
}

const enterDepName = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What department do you want to enter',
        },
    ]);
};
const enterNewRole = async (query) => {
      
    return inquirer.prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'What role do you want to enter',
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'What salary do you want to enter',
        },
        {
            type: 'list',
            name: 'newDepartmentId',
            message: 'What department do you want to enter',
            choices:  async function () {
                const department = await query("SELECT * FROM department;")
               console.log(department)
                const newDepartment = department.map(dept => {
                    return  {
                        name:dept.name, 
                        value:dept.id
                    }
                }) 

                console.log(newDepartment)
                return newDepartment;
            }
        },
    ]);
};

module.exports = {
    viewAllEmployees, employeeByDepartment, employeeByManager,
    addEmployee, removeEmployee, updateEmployeeRole, updateEmployeeManager,
    viewAllRoles, viewAllDepartment, addDepartment, addRole
}