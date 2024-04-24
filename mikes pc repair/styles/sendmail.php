<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Email address where you want to receive the form data
    $to = 'miniman3462@gmail.com';

    // Email subject
    $subject = 'New message from your website';

    // Email message
    $email_message = "
    <html>
    <head>
    <title>New message from your website</title>
    </head>
    <body>
    <h2>New message from your website</h2>
    <p>Name: $name</p>
    <p>Email: $email</p>
    <p>Phone: $phone</p>
    <p>Message: $message</p>
    </body>
    </html>
    ";

    // Email headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    // Send email
    mail($to, $subject, $email_message, $headers);
    
    // Response
    echo 'Message sent successfully!';
} else {
    echo 'Invalid request!';
}

?>
