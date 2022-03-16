INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Dennis", "Reynolds", 1, 4),
("Charlie", "Kelly", 2, 1),
("Ronald", "Macdonald", 3, 1),
("Frank", "Reynolds", 4, null),
("Sweet Dee", "Reynolds", 5, 1);

INSERT INTO role (title, salary, dept_id)
VALUES
("Receptionst", 100000, 3) ,
("Designer", 110000, 1),
("Accountant", 120000, 2),
("Engineer", 130000, 5),
("Junior Developer", 140000, 4),
("Senior Developer", 150000, 4);


INSERT INTO dept (dept_name)
VALUES
("Marketing"),
("Finance"),
("Human Resources"),
("IT"),
("Operations");