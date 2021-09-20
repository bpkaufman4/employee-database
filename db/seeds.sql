
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Brian', 'Kaufman', 1, 1),
  ('Emily', 'Kaufman', 3, 1),
  ('Christian', 'Kaufman', 2, 2),
  ('Olivia', 'Kaufman', 4, 2),
  ('Derek', 'Engel', 5, NULL),
  ('Andrew', 'McClure', 6, NULL);

INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Sales Associate', 30000.00, 1),
  ('Certified Public Accountant', 50000.00, 2),
  ('Senior Sales Advisor', 45000.00, 1),
  ('Budget Manager', 55000.00, 2);