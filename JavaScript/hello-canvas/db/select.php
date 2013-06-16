<?php

header("Content-type: text/xml"); 

include 'connString.php';

// Formulate Query
mysql_select_db($_POST['database']);
$table=$_POST['table'];
$query = $_POST['query'];

// Perform Query
$result = mysql_query($query);

// Output the JSON
echo "{\n";
echo "\t".'"query" : "'.$query.'",'."\n";

if($result){
	
	echo "\t".'"result" : "success",'."\n";
	
	echo "\t".'"data" : ['."\n";
	
	$comma1=false;	//for knowing when to add commas
	while($row = mysql_fetch_assoc($result)){
		if($comma1){
			echo ",\n";
		}
		
		//echo "\t"."\t".'"row": {'."\n";
		echo "\t"."\t".'{'."\n";
		$keys=array_keys($row);
		
		$comma2=false;	//for knowing when to add commas
		foreach($keys as $i => $value){
			if($comma2){
				echo ",\n";
			}
			echo "\t"."\t"."\t".'"' . $value . '" : "' . $row[$keys[$i]] . '"';
			$comma2=true;
		}
		echo "\n"."\t"."\t"."}";
		$comma1=true;
	}
	echo "\n";
	echo "\t"."]";
	
} else {
	echo "\t".'"result" : "'. mysql_error() .'"'."\n";
}
echo "\n}"; 

?>