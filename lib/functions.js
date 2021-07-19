const inquirer = require('inquirer')

// View all employees
function viewAllEmployees(db, runApp) {
    console.log("show all employees")
    const sql = `SELECT * FROM employee;`
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err)
        }
        console.table(result)
        runApp()
    })
}
// View all roles
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
// view all departments
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
// add department
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
// add role
function addRole(query, runApp) {
    enterNewRole(query).then(async (data) => {
        console.log(query)
        console.log("Add role")
        const sql = "INSERT INTO role (title,salary,department_id) VALUES (?,?,?);"
        await query(sql, [data.newRole,data.newSalary,data.newDepartmentId])
       console.log("role was added")
       runApp()
    })
}
// add employee
function addEmployee(query,runApp) {
    enterNewEmployee(query).then(async (data) => {
        console.log(query)
        console.log("Add employee")
        const sql = "INSERT INTO employee (first_name,last_name,manager_id,role_id) VALUES (?,?,?,?);"
        await query(sql, [data.first_name,data.last_name,data.manager_id,data.role_id])
        console.table("employee was added")
        runApp()
    })
}
// update employee role
function updateEmployeeData(query, runApp) {
    updateEmployee(query).then(async (data) => {
    console.log("update employee stareted")
    console.log(data)
        const sql = "Update employee SET role_id=? WHERE id = ?;"
       
        console.log(data.role_id,data.employeeId)
        await query(sql,[data.role_id,data.employeeId])
        runApp()
}
    )}

// ------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------
// inquirer prompts below

// add new department inquirer prompt
const enterDepName = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'What department do you want to enter',
        },
    ]);
};
//add new role enquirer prompt
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
//add new employee enquirer prompt
const enterNewEmployee = async (query) => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Whats the first name',
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Whats the last name',
        },
        {
            type: 'list',
            name: 'manager_id',
            message: 'Whos the manager',
            choices: async function () {
                const manager = await query("SELECT * FROM employee;")
               console.log(manager)
                const manager_id = manager.map(manager => {
                    return  {
                        name:manager.first_name, 
                        value:manager.id
                    }
                }) 
                console.log(manager_id)
                return manager_id;
            }
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Whats the role',
            choices:  async function () {
                const role = await query("SELECT * FROM role;")
               console.log(role)
                const role_id = role.map(role => {
                    return  {
                        name:role.title, 
                        value:role.id
                    }
                }) 
                console.log(role_id)
                return role_id;
            }
        }
    ]);
};
//Update employee enquirer prompt
const updateEmployee = async (query) => {
    //   async () =>{
    const displayEmployee = await query("SELECT * FROM employee;")
    const displayEmployeeArr = displayEmployee.map(element => {
    //below statement selects the name of the employee and translates it into its id
    return {
        name:element.first_name + " " + element.last_name,
         value:element.id}
    })
    console.log("line 195 = ",displayEmployeeArr)
    // return displayEmployee
    // }
     return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Which employee do you want to update',
            choices: displayEmployeeArr
        },
        {
            type: 'list',
            name: 'role_id',
            message: 'Whats the role',
            choices:  async function () {
                const role = await query("SELECT * FROM role;")
               console.log(role)
                const role_id = role.map(role => {
                    return  {
                        name:role.title, 
                        value:role.id
                    }
                }) 
                console.log(role_id)
                return role_id;
            }
        }

    ])
    ;
};

module.exports = {
    viewAllEmployees, updateEmployeeData,
    addEmployee,
    viewAllRoles, viewAllDepartment, addDepartment, addRole
}