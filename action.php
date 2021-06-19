
<?php
if(isset $_POST["email"] && $_POST["email"] != "") {

  $name = $_POST['name'];
  $vistor_email = $_POST['email'];
  $message = $_POST['message'];
  $email_subject = 'Message from Dennis Yiaile website'

  $to: "ykamakei6345@gmail.com";
  $email_body = "";

  $body .="From: ".$name. "\r\n";
  $body .="Email: ".$vistor_email. "\r\n";
  $body .="Message: ".$message. "\r\n";

  mail($to, $email_subject, $body, $header);
  header("Location: index.html");
}
?>
