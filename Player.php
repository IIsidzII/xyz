<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<script src='http://content.jwplatform.com/libraries/oncyToRO.js'></script>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Live TV</title>
<meta name="referrer" content="no-referrer">
</head>
<body style="margin: 0 0 0 0">
<div id="player"></div>
</body>
<script>
jct = "3-SD3gYlLpcumY9XkgCFfA";
pxe = "1536692387";
st = "AQIC5wM2LY4SfcyZSshzplFrL13coOHl06FFURGPbuKWBYY.*AAJTSQACMDIAAlNLABI1OTA5Mzg0NTYxMTk1MDQ3MjYAAlMxAAIxNQ..*";
function play(name, stream){
document.title = name;
jwplayer("player").setup({
  "title": 'Live TV',
        "stretching":"uniform",
        "width": "100vw",
        "height": "100vh",
        "autostart": "true",

 " ga": "{}",
    "sharing": "{}",

"target":"_blank",
"allownetworking":"internal",
"androidhls": true,
  "file": stream
    });
}
if("<?php echo $_GET['type']?>" =="live"){
	var channel = "<?php echo $_GET['stream']?>";
	//play("Live TV", "http://smumcdnems01.cdnsrv.jio.com/jiotv.live.cdn.jio.com/"+channel+"/"+channel+".m3u8");
        play("Live TV", "http://smumcdnems01.cdnsrv.jio.com/jiotv.live.cdn.jio.com/"+channel+"/"+channel+"_600.m3u8?"+"jct="+jct+"&pxe="+pxe+"&st="+st);
}else if("<?php echo $_GET['type']?>" =="catchup"){
	//play("Live TV", "http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/<?php echo $_GET['stream']?>.mp4.urlset/master.m3u8");
        play("Live TV", "http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/<?php echo $_GET['stream']?>.mp4.urlset/index-f3-v1-a1.m3u8?"+"jct="+jct+"&pxe="+pxe+"&st="+st);
}
</script>
</html>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script>
$(document).ready(function() {
	if($($("div").get($("div").length-1)).attr("class")!="copyright"){$($("div").get($("div").length-1)).remove();}
});
</script>