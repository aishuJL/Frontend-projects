<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST['number'];
    $reverse = strrev($number);
    echo "<h3>Reverse of $number is $reverse.</h3>";
}
?>
