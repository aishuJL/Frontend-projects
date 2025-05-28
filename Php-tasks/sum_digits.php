<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST['number'];
    $sum = array_sum(str_split($number));
    echo "<h3>Sum of digits of $number is $sum.</h3>";
}
?>
