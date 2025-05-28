<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = $_POST['age'];
    $result = ($age >= 18) ? "Eligible for voting" : "Not eligible for voting";
    echo "<h3>$result</h3>";
}
?>
