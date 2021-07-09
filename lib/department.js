//create department class
class Department {
    constructor (id,first_name,last_name){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
    }
    get id () {
        return this.id
    }
    get first_name () {
        return this.first_name
    }
    get last_name () {
        return this.last_name
    }
}