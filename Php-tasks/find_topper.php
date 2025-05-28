<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $marks_input = $_POST['marks'];
        $pairs = explode(',', $marks_input);
        $marks_array = [];
        foreach ($pairs as $pair) {
            list($name, $mark) = explode(':', $pair);
            $marks_array[$name] = (int)$mark;
        }
        asort($marks_array);
        echo "<h2>Sorted Marks (Ascending Order):</h2>";
        echo "<ul>";
        foreach ($marks_array as $name => $mark) {
            echo "<li>$name: $mark</li>";
        }
        echo "</ul>";
        $topper = array_search(max($marks_array), $marks_array);
        echo "<h2>Topper: $topper with " . max($marks_array) . " marks</h2>";
    }
    ?>