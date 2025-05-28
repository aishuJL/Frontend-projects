<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST['number'];
    $reverse = strrev($number);
    $result = ($number == $reverse) ? "Palindrome" : "Not a Palindrome";
    echo "<h3>$number is $result.</h3>";
}
?>
