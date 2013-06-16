<?php

header("Content-type: text/xml"); 

include 'connString.php';

// Formulate Query
mysql_select_db($_POST['database']);
$table=$_POST['table'];
$query = $_POST['query'];

// Perform Query
$result = mysql_query($query);

// Output the XML
echo "<?xml version='1.0' encoding='iso-8859-1'?>";
echo "<SELECT>";
echo "<SQLSTRING>$query</SQLSTRING>";

if($result){
	
	echo "<RESULT>success</RESULT>";
	
	echo "<DATA>";
		
		
	while($row = mysql_fetch_assoc($result)){
		echo "<ROW>";
		$keys=array_keys($row);
		
		foreach($keys as $i => $value){
			echo "<" . strtoupper($value) . "><![CDATA[" . $row[$keys[$i]] . "]]></" . strtoupper($value) . ">";
		}
		echo "</ROW>";
	}
	echo "</DATA>";
	
} else {
	echo "<RESULT>failure</RESULT>";
	echo "<ERROR>" . mysql_error() . "</ERROR>";
}
echo "</SELECT>";


?>