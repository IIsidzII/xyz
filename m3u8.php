<?php
header('Access-Control-Allow-Origin: *');
    //header('Content-Type: application/vnd.apple.mpegurl');
	$f = $_GET['f'];
	$host = "http://livetv24x7.in/TV/";
	// $host = "http://sreekanth.byethost16.com/LiveTV/";
	if($f=="live"){
		$channel = "Star_Plus_HD";
	    $channel = $_GET['program'];
		$auth= "?jct=3-SD3gYlLpcumY9XkgCFfA&pxe=1536692387&st=AQIC5wM2LY4SfcyZSshzplFrL13coOHl06FFURGPbuKWBYY.*AAJTSQACMDIAAlNLABI1OTA5Mzg0NTYxMTk1MDQ3MjYAAlMxAAIxNQ..*";
	    $i=0;
	    $m3u8="";
	    while($m3u8==""){
	        $m3u8 = @file_get_contents("http://smumcdnems01.cdnsrv.jio.com/jiotv.live.cdn.jio.com/".$channel."/".$channel.".m3u8".$auth);
	        //echo $i;
	    }
	    $m3u8 = str_replace($channel, "http://smumcdnems01.cdnsrv.jio.com/jiotv.live.cdn.jio.com/".$channel."/".$channel, $m3u8);
	    echo str_replace(".m3u8", ".m3u8".$auth, $m3u8);
	}

	elseif ($f=="catchupMaster") {
		$program = "History_HD/History_HD_,40,60,80,0_28_10_17_03_30.mp4.urlset/";
		$program = $_GET['program'];
		$auth= "?jct=3-SD3gYlLpcumY9XkgCFfA&pxe=1536692387&st=AQIC5wM2LY4SfcyZSshzplFrL13coOHl06FFURGPbuKWBYY.*AAJTSQACMDIAAlNLABI1OTA5Mzg0NTYxMTk1MDQ3MjYAAlMxAAIxNQ..*";

	    $m3u8 = file_get_contents("http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/".$program."master.m3u8".$auth);
	    $m3u8 = str_replace("index", $host.$program."index", $m3u8);
	    // echo str_replace(".m3u8", ".m3u8".$auth, $m3u8);
	    echo $m3u8;
	}

	elseif ($f=="catchupIndex"){
		$program = "Star_Plus_HD/Star_Plus_HD_,40,60,80,0_28_10_17_04_30.mp4.urlset/index-f1";
		$program = $_GET['program'];
		$auth= "?jct=3-SD3gYlLpcumY9XkgCFfA&pxe=1536692387&st=AQIC5wM2LY4SfcyZSshzplFrL13coOHl06FFURGPbuKWBYY.*AAJTSQACMDIAAlNLABI1OTA5Mzg0NTYxMTk1MDQ3MjYAAlMxAAIxNQ..*";

	    $m3u8 = file_get_contents("http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/".$program."-v1-a1.m3u8".$auth);
	    $m3u8 = str_replace("https://tv.media.jio.com/streams_catchup/", $host, $m3u8);
	    echo str_replace("seg", "http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/".substr($program, 0, -8)."seg", $m3u8);
	}


	elseif ($f=="encryption") {
		$program = "Maa_Movies/Maa_Movies_,40,60,80,0_28_10_17_04_00.mp4.urlset/";
		$program = $_GET['program'];

	    $m3u8 = file_get_contents("https://tv.media.jio.com/streams_catchup/".$program."encryption-f1.key");
		echo $m3u8;
	}
?>