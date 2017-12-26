<html>
<body>
<form method="post">
<div><p>jct</p><input type="text" name="jct"></input></div>
<div><p>pxe</p><input type="text" name="pxe"></input></div>
<div><p>st</p><input type="text" name="st"></input></div>
<div><button type="submit" name="submit">Submit</button></div>
</form>

</body>
</html>

<?php

error_reporting( E_ALL & ~E_DEPRECATED & ~E_NOTICE );
$con = mysqli_connect("localhost","id2675459_livetv","G0vindaya","id2675459_livetv");
mysqli_query($con, "SET time_zone = \"+5:30\";");
if(isset($_POST['submit'])){
	$jct= $_POST['jct'];
	$pxe= $_POST['pxe'];
	$st = $_POST['st'];
	$query = "INSERT INTO `abcde`(`id`, `jct`, `pxe`, `st`, `Time`) VALUES (null,'$jct','$pxe','$st', now())";
	if(mysqli_query($con, $query)){
	echo "success";
	}else{
	echo "error";
	}
}
?>