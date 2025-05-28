<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST['number'];
    echo "<h3>The entered number is: $number</h3>";
}
?>
