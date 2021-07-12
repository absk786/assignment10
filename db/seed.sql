USE employeedb;
INSERT INTO department (name) VALUES 
("Sales"),
("Engineering"),
("Finance"),
("legal");
INSERT INTO role (title,salary,department_id) VALUES 
("Sales lead", 1000,1),
("Sales Person", 2000,1),
("lead engineer", 3000,2),
("SW engineer", 4000,2),
("Legal intern Lead", 5000,4),
("Lawyer", 6000,4),
("accountant", 7000,3);

INSERT INTO employee (first_name,last_name,role_id) VALUES 
("john","doe",1),
("Mike","Chan",2),
("Ashley","Rodriguez",3),
("Kevin","Tupik",4),
("Malia","Brown",5),
("Sarah","louid",6),
("tom","Allen",7);

UPDATE employee SET manager_id = 3 WHERE id =1;
UPDATE employee SET manager_id = 1 WHERE id =2;
UPDATE employee SET manager_id = 3 WHERE id =4;
UPDATE employee SET manager_id = 7 WHERE id =8;
