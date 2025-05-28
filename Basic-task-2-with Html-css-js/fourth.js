function checkLeapYear() {
    const year = parseInt(document.getElementById("yearInput").value);

    if (isNaN(year) || year <= 0) {
        document.getElementById("result").innerText = "Please enter a valid year.";
        return;
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const result = isLeapYear
        ? `${year} is a leap year.`
        : `${year} is not a leap year.`;

    document.getElementById("result").innerText = result;
}
