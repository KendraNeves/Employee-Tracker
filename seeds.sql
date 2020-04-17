USE employee_trackerDB;

INSERT INTO department (department_name)
VALUES ("Human Resources"), ("Engineering"), ("Executive");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 85, 2), ("HR person", 40.40, 0), ("Software Engineer", 120.20, 1), ("Hardware Engineer", 100.80, 1), ("CEO", 900, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Carol", "Baskin", 0, 4), ("Jeff", "Lowe", 1, 0), ("Doc", "Antle", 2, 0), ("John", "Reinke", 2, 0), ("Travis", "Maldonado", 3, 0), ("John", "Finlay", 3, 0), ("Joe", "Exotic", 4, 4);

