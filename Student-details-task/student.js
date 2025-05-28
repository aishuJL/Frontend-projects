function showDetails() {
    const name = document.getElementById("name").value;
    const rollno = document.getElementById("rollno").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const branch = document.getElementById("branch").value;

    const details = "Name: " + name + ", Roll No: " + rollno + ", Gender: " + gender + ", Branch: " + branch;

    document.getElementById("detailsParagraph").innerText = details;
}

function calculateGrade() {
    const marks1 = parseInt(document.getElementById("marks1").value);
    const marks2 = parseInt(document.getElementById("marks2").value);
    const marks3 = parseInt(document.getElementById("marks3").value);
    const marks4 = parseInt(document.getElementById("marks4").value);
    const marks5 = parseInt(document.getElementById("marks5").value);

    const total = marks1 + marks2 + marks3 + marks4 + marks5;
    const average = total / 5;

    let grade;

    switch (true) {
        case average >= 90:
            grade = "A";
            break;
        case average >= 80:
            grade = "B";
            break;
        case average >= 70:
            grade = "C";
            break;
        case average >= 60:
            grade = "D";
            break;
        default:
            grade = "F";
    }

    document.getElementById("gradeParagraph").innerText = "Grade: " + grade;
}
