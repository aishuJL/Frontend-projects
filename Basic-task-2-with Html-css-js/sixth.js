function findReverse() {
    const number = document.getElementById("numberInput").value;

    if (isNaN(number) || number.trim() === "") {
        document.getElementById("result").innerText = "Please enter a valid number.";
        return;
    }

    const reversedNumber = parseInt(Math.abs(number).toString().split("").reverse().join(""));
    const result = number < 0 ? `-${reversedNumber}` : reversedNumber;

    document.getElementById("result").innerText = `The reverse is: ${result}`;
}
