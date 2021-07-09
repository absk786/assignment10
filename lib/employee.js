//create employee class
const Department = require('./department')

class Employee extends Department {
    constructor (id,first_name,last_name, role_id, manager_id){
        super (id,first_name,last_name)
        this.role_id = role_id;
        this.manager_id = manager_id;
    }
    get role_id () {
        return this.role_id
    }
    get manager_id () {
        return this.manager_id
    }
}

module.exports = Employee;