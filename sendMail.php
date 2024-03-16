<?php 
if(isset($_POST['submit'])){
    $to = "jedlo.je.good@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $subject2 = "Copy of your form submission - " . $_POST['subject'];
    $message = $name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['message'];

    // Additional headers for sending via Mailgun SMTP
    $smtp_config = [
        'host' => 'smtp.mailgun.org',
        'port' => 587,
        'username' => getenv('MAILGUN_SMTP_LOGIN'),
        'password' => getenv('MAILGUN_SMTP_PASSWORD'),
        'encryption' => 'tls'
    ];

    //check if all fields were filled out
    if (empty($from) || empty($name) || empty($subject) || empty($message)) {
        echo "Please fill out all fields";
    exit;
    }

    // Send email
    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    if (mail($to,$subject,$message,$headers) && mail($from,$subject2,$message2,$headers2)) {
        echo "Email sent successfully!";
    } else {
        echo "Email sending failed";
    }
}   
?>
