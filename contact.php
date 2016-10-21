<?php

if($_POST["submit"]) {
    $recipient="sportsfiend06@aol.com";
    $subject="Attorney Help Required!";
    $sender=$_POST["senderFirst"];
    $sender=$_POST["senderLast"];
    $sender=$_POST["number"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}

?>
