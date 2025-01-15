
<?php
// Allow cross-origin requests
header("Access-Control-Allow-Origin: *");  // Allow all origins (for local testing, change * to http://127.0.0.1:3000)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  // Allow POST, GET, OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type");  // Allow the Content-Type header

// Handle OPTIONS request (preflight)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Return a 200 response for preflight request
    header('HTTP/1.1 200 OK');
    exit(0);
}

// Your email sending code here
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Your form processing logic
    // Assuming form data comes as JSON
    $data = json_decode(file_get_contents("php://input"), true);

    // Example email processing logic
    $name = $data['name'];
    $email = $data['email'];
    $message = $data['message'];

    // Use PHP mail() or any other mailer to send the email (use PHPMailer for more advanced features)
    // For example, using mail() function:
    if (mail("ralphanthony.mabao@gmail.com", "Contact Form Submission", $message, "From: $email")) {
        echo json_encode(["status" => "success", "message" => "Email sent successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to send email"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>

