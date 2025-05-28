function calculateSum() {
    const number = document.getElementById("numberInput").value;

    if (isNaN(number) || number.trim() === "") {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    const digits = Math.abs(parseInt(number)).toString();
    let sum = 0;
    for (const digit of digits) {
        sum += parseInt(digit);
    }

    document.getElementById("result").innerText = `The sum of digits is: ${sum}`;
}
