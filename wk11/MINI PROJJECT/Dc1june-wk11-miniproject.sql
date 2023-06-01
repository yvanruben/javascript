--Q1
SELECT first_name AS First,last_name AS Last 
FROM employees ;

--Q2
SELECT DISTINCT department_id
FROM employees;

--Q3
SELECT * FROM employees
ORDER BY first_name DESC;

-- Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.
--Q4
SELECT first_name,last_name,salary,salary*.15 AS PF
FROM employees;

--Q5
-- Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.
SELECT employee_id,first_name,last_name,salary 
FROM employees
ORDER BY salary ASC;

--Q6
-- Write a query to get the total sum of all salaries paid to the employees.
SELECT SUM(salary)
FROM employees;

--Q7
-- Write a query to get the maximum and minimum salaries paid to the employees.
SELECT MAX(salary)
FROM employees;
SELECT MIN(salary)
FROM employees;

--Q8
--Write a query to get the average salary paid to the employees.
SELECT AVG(salary)
FROM employees;

--Q9
-- Write a query to get the number of employees working in the company.
SELECT COUNT(employee_id)
FROM employees;

--Q10
-- Write a query to get all the first names from the employees table in upper case.
SELECT UPPER(first_name)
FROM employees;

-- Q11
SELECT SUBSTRING(first_name,1,3)
FROM employees;

--Q12
--Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.
SELECT CONCAT(first_name,' ',last_name)
FROM employees

-- -- Q13
-- Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.
SELECT first_name,last_name,CONCAT (first_name,'',last_name)  AS Full ,LENGTH(CONCAT(first_name,'',last_name)) 
   FROM employees;

--Q14
-- Write a query to check whether the first_name column of the employees table contains any numbers.
SELECT * 
   FROM employees 
   WHERE  first_name LIKE '%[0-9]%';

--Q15
-- Write a query to select the first ten records from a table.
SELECT employee_id,first_name,last_name 
FROM employees LIMIT 10;