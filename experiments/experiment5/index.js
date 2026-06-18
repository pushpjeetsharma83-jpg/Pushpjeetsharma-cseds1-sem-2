
let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseInt(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };

    employees.push(employee);

    document.getElementById("output").innerHTML =
        "<p>Employee Added Successfully</p>";

    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

function displayEmployees() {

    let text = "<h3>All Employees</h3>";

    for (let emp of employees) {

        text +=
            "<p>Name: " + emp.name +
            ", ID: " + emp.id +
            ", Salary: " + emp.salary +
            ", Department: " + emp.department +
            "</p>";
    }

    document.getElementById("output").innerHTML = text;
}

function filterEmployees() {

    let filtered = employees.filter(function(emp) {
        return emp.salary > 50000;
    });

    let text = "<h3>Employees with Salary > 50000</h3>";

    for (let emp of filtered) {

        text +=
            "<p>Name: " + emp.name +
            ", Salary: " + emp.salary +
            "</p>";
    }

    document.getElementById("output").innerHTML = text;
}

function totalSalary() {

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    document.getElementById("output").innerHTML =
        "<h3>Total Salary Payout: ₹" + total + "</h3>";
}

function averageSalary() {

    let total = 0;

    for (let emp of employees) {
        total += emp.salary;
    }

    let average = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary: ₹" + average + "</h3>";
}

function countDepartment() {

    let dept = prompt("Enter Department Name");

    let count = 0;

    for (let emp of employees) {

        if (emp.department.toLowerCase() == dept.toLowerCase()) {
            count++;
        }
    }

    document.getElementById("output").innerHTML =
        "<h3>Employees in " + dept + " Department: " + count + "</h3>";
}

