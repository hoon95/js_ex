const Employee = require('./Employee');
const Customer = require('./Student');

const employee = new Employee('영희', 20, '여자', '사원', 20000);
const student = new Customer('철수', 33, '남자', '123456', '법학');

employee.greet('대표');
student.greet('교수');