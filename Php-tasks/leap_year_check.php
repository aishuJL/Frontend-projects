<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $year = $_POST['year'];
    $result = ($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0) ? "Leap Year" : "Not a Leap Year";
    echo "<h3>$year is $result.</h3>";
}
?>
