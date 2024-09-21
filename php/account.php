<?php
// Start session to handle user login data
session_start();

// Check if the user is logged in, redirect to login page if not
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit();
}

// Set the page title dynamically for the header
$page_title = "Account Page";

// Include common header, navbar, and footer files
include('header.php');
include('navbar.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="account.css"> <!-- Custom CSS for account page -->
    <title><?php echo $page_title; ?></title>
</head>
<body>
    <section id="account-section">
        <div class="container">
            <h1>Welcome, <?php echo $_SESSION['user_name']; ?>!</h1>
            <p>Manage your account details and view recent activities here.</p>

            <!-- Display user information from session -->
            <div class="account-info">
                <h2>Account Information</h2>
                <p><strong>Name:</strong> <?php echo $_SESSION['user_name']; ?></p>
                <p><strong>Email:</strong> <?php echo $_SESSION['user_email']; ?></p>
                <!-- You can add more user details here -->
            </div>

            <!-- Action buttons for account management -->
            <div class="account-actions">
                <a href="edit_account.php" class="btn">Edit Account</a>
                <a href="logout.php" class="btn">Log Out</a>
            </div>
        </div>
    </section>

    <!-- Include footer -->
    <?php include('footer.php'); ?>
</body>
</html>
