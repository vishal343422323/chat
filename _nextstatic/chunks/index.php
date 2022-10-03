<?php
if(isset($_REQUEST['submit']))
{
$to = 'yourmailid@gmail.com';
$subject = "Beautiful HTML Email using PHP by Discussdesk";
// Get HTML contents from file
$htmlContent = file_get_contents("template.html");

// Set content-type for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: discussdesk<discussdesk@gmail.com>' . "\r\n";
$headers .= 'Cc: discussdesk@gmail.com ' . "\r\n";

// Send email
if(mail($to,$subject,$htmlContent,$headers))
{
echo 'Email has sent successfully.';
}
else{

echo 'Some problem occurred, please try again.';
}
}

?>

<form method="post">
<table border="1" align="center">
<tr>
<td>Enter Your Email</td>
<td><input type="text" name="email"></td>
</tr>
<tr>
<td colspan="2" align="center"><input type="submit" name="submit" value="Send Email"> </td>
</tr>
<table>
</form>