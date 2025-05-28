<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $marks_input = $_POST['marks'];
        $marks_array = explode(',', $marks_input);
        $marks_array = array_map('intval', $marks_array);
        sort($marks_array);
        echo "<h2>Sorted Marks (Ascending Order):</h2>";
        echo "<ul>";
        foreach ($marks_array as $mark) {
            echo "<li>$mark</li>";
        }
        echo "</ul>";
    }
    ?>