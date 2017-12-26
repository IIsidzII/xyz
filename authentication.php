<?php
header('Access-Control-Allow-Origin: *');
error_reporting( E_ALL & ~E_DEPRECATED & ~E_NOTICE );
$con = mysqli_connect("localhost","id2675459_livetv","G0vindaya","id2675459_livetv");
$query = "SELECT * FROM `abcde` ORDER BY `id` DESC LIMIT 1";
$row = mysqli_fetch_array(mysqli_query($con, $query));
echo '{"jct":"'.$row[jct].'","pxe":"'.$row[pxe].'","st":"'.$row[st].'","Time":"'.$row[Time].'"}';
?>