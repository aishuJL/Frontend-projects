function addNumbers() {
    const num1 = document.getElementById("number1").value;
    const num2 = document.getElementById("number2").value;

    if (isNaN(num1) || num1.trim() === "" || isNaN(num2) || num2.trim() === "") {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    const sum = parseInt(num1) + parseInt(num2);

    document.getElementById("result").innerText = `The sum is: ${sum}`;
}
