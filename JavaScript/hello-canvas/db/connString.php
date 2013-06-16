<?php

//connection string information


$dbhost = 'localhost';
$dbuser = 'robot';
$dbpass = 'r0b0t!';
$dbname = 'tweets';

$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die ('Error connecting to mysql');


//mysql_select_db($dbname);


?>