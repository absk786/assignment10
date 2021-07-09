//create employee class
const Department = require('./department')

class Role extends Department {
    constructor (id, title, salary, departmen_id ){
        super (id)
        this.title = title;
        this.salary = salary;
        this.departmen_id = departmen_id
    }
    get title () {
        return this.title
    }
    get salary () {
        return this.salary

    }
    get departmen_id () {
        return this.departmen_id

    }
}

module.exports = Role;