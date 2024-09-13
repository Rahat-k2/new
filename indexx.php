<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST['product'];
    $price = $_POST['price'];

    // Simulate storing order
    echo "Thank you for buying $product for ₹$price!";
}
?>