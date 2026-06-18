
function calculateResult() {

    let subjects = document.getElementById("subjectCount").value;

    let total = 0;

    for (let i = 1; i <= subjects; i++) {

        let marks = parseInt(prompt("Enter marks for Subject " + i));

        total += marks;
    }

    let average = total / subjects;

    let grade = "";
    let result = "";

    if (average >= 90) {
        grade = "A";
    }
    else if (average >= 75) {
        grade = "B";
    }
    else if (average >= 50) {
        grade = "C";
    }
    else {
        grade = "F";
    }

    if (average >= 40) {
        result = "Pass";
    }
    else {
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
        "<h3>Result</h3>" +
        "<p>Total Marks: " + total + "</p>" +
        "<p>Average Marks: " + average + "</p>" +
        "<p>Grade: " + grade + "</p>" +
        "<p>Status: " + result + "</p>";
}

