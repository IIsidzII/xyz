<?php
	$name= $_POST['name'];
	$email= $_POST['email'];
	$message= $_POST['message'];
	$ipaddress = get_client_ip();
	// echo $ipaddress.$name.$email.$message;
	error_reporting( E_ALL & ~E_DEPRECATED & ~E_NOTICE );
	$con = mysqli_connect("localhost","id2675459_livetv","G0vindaya","id2675459_livetv");
	mysqli_query($con, "SET time_zone = \"+5:30\";");
	$query = "INSERT INTO `messages`(`id`, `ipAddress`, `name`, `email`, `message`, `timeStamp`, `Time`) VALUES (null,'$ipaddress','$name','$email','$message','".round(microtime(true) * 1000)."', now())";
	if(mysqli_query($con, $query)){
		echo "success";
	}else{
		echo "error";
	}

	function get_client_ip() {
	    $ipaddress = '';
	    if (getenv('HTTP_CLIENT_IP'))
	        $ipaddress = getenv('HTTP_CLIENT_IP');
	    else if(getenv('HTTP_X_FORWARDED_FOR'))
	        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
	    else if(getenv('HTTP_X_FORWARDED'))
	        $ipaddress = getenv('HTTP_X_FORWARDED');
	    else if(getenv('HTTP_FORWARDED_FOR'))
	        $ipaddress = getenv('HTTP_FORWARDED_FOR');
	    else if(getenv('HTTP_FORWARDED'))
	       $ipaddress = getenv('HTTP_FORWARDED');
	    else if(getenv('REMOTE_ADDR'))
	        $ipaddress = getenv('REMOTE_ADDR');
	    else
	        $ipaddress = 'UNKNOWN';
	    return $ipaddress;
	}	
?>