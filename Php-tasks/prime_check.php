<?php
function is_prime($num) {
    if ($num < 2) return false;
    for ($i = 2; $i <= sqrt($num); $i++) {
        if ($num % $i == 0) return false;
    }
    return true;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $number = $_POST['number'];
    $result = is_prime($number) ? "Prime" : "Not Prime";
    echo "<h3>$number is $result.</h3>";
}
?>