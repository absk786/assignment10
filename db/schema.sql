
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;

CREATE TABLE department (
id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30)
);

CREATE TABLE role(
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (30) NOT NULL,
salary DECIMAL ,
department_id INT, 
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
   manager_id INTEGER,
    role_id INTEGER ,
FOREIGN KEY (manager_id) REFERENCES department(id),
FOREIGN KEY (role_id) REFERENCES role(id)
);
