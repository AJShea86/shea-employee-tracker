INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Dennis", "Reynolds", 1, 01),
("Charlie", "Kelly", 2, 01),
("Ronald", "Macdonald", 3, 01),
("Frank", "Reynolds", 4, 02),
("Sweet Dee", "Reynolds", 5, 02);

INSERT INTO role (title, salary, dept_id)
VALUES
("Receptionst", 100000, 1) ,
("Designer", 110000, 2),
("Accountant", 120000, 3),
("Engineer", 130000, 4),
("Developer", 140000, 5);

INSERT INTO dept (dept_name)
VALUES
("Marketing"),
("Finance"),
("Human Resources"),
("IT"),
("Operations");