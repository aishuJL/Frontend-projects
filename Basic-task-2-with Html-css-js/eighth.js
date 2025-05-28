function checkEligibility() {
    const age = document.getElementById("ageInput").value;

    if (isNaN(age) || age.trim() === "") {
        document.getElementById("result").innerText = "Please enter a valid age.";
        return;
    }

    if (age >= 18) {
        document.getElementById("result").innerText = "Eligible for voting.";
    } else {
        document.getElementById("result").innerText = "Not eligible for voting.";
    }
}
