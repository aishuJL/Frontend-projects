function checkPalindrome() {
    const value = document.getElementById("inputBox").value; 
    const reversedValue = value.split('').reverse().join(''); 

    if (value === reversedValue) {
        document.getElementById("output").innerText = `${value} is a palindrome.`;
    } else {
        document.getElementById("output").innerText = `${value} is not a palindrome.`;
    }
}
