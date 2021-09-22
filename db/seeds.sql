
INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Sales Associate', 30000.00, 1),
  ('Certified Public Accountant', 50000.00, 2),
  ('Senior Sales Advisor', 45000.00, 1),
  ('Budget Manager', 55000.00, 2),
  ('Sales Manager', 80000.00, 1),
  ('Chief Financial Officer', 85000.00, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Brian', 'Kaufman', 5, NULL),
  ('Emily', 'Kaufman', 6, NULL),
  ('Christian', 'Kaufman', 2, 1),
  ('Olivia', 'Kaufman', 4, 2),
  ('Derek', 'Engel', 1, 1),
  ('Andrew', 'McClure', 4, 1),
  ('Kathleen', 'Kaufman', 1, 2),
  ('Patrick', 'Kaufman', 3, 2);

