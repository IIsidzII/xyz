$(".categories").click(function(){
    $('html, body').animate({
        scrollTop: $("#channels").offset().top
    }, 200);
});
var jct, pxe, st, x;
//getAuthentication();
jct = "3-SD3gYlLpcumY9XkgCFfA";
pxe = "1536692387";
st = "AQIC5wM2LY4SfcyZSshzplFrL13coOHl06FFURGPbuKWBYY.*AAJTSQACMDIAAlNLABI1OTA5Mzg0NTYxMTk1MDQ3MjYAAlMxAAIxNQ..*";
// function getAuthentication(){
// $.getJSON('http://livetv24x7.in/authentication.php', function (data) {
// jct = data.jct;
// pxe = parseInt(data.pxe);
// st = data.st;
// clearInterval(x);
// x = setInterval(function() {
// if((pxe>new Date().getTime()/1000)){
// var remTime = pxe-new Date().getTime()/1000;
// document.getElementById("promptToCall").innerHTML="Live is working and ends in "+(("0" + parseInt(remTime/60)).slice(-2)+":"+("0" + parseInt(parseInt(remTime-parseInt(remTime/60)*60))).slice(-2));
// }else{
// var date = new Date(pxe*1000);
// document.getElementById("promptToCall").innerHTML="Live has been ended except MAA TV. Last worked at "+("0"+date.getDate()).slice(-2)+"-"+("0"+date.getMonth()).slice(-2)+"-"+date.getFullYear()+" "+("0"+date.getHours()).slice(-2)+":"+("0"+date.getMinutes()).slice(-2)+". Call 7569426264 if you need it. We will start it in seconds"
// }
// }, 1000);
// });
// }

var response;
var nowPlaying="";
var json;
function play(e, name, stream, id, hd, isCatchupAvailable, divId){
e.preventDefault();
if(id!=""){
	var div = document.getElementById('schedule');
	div.innerHTML="loading..";
	document.getElementById("channelName").innerHTML = name;
	//window.scrollTo(0, 0);
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 200);
	document.title = name;
	if(window.location.href.indexOf("TV_")>-1){
		file = "http://smumcdnems01.cdnsrv.jio.com/jiotv.live.cdn.jio.com/"+stream+"/"+stream+"_600.m3u8?"+"jct="+jct+"&pxe="+pxe+"&st="+st;
	}else{
		file = "http://livetv24x7.in/TV/"+stream+".m3u8";
	}
	//}
	
	/*jwplayer("player").setup({
	  "title": 'Live TV',
	  "stretching":"uniform",
	  "width": "50vw",
	  "height": "28.125vw",
	  "autostart": "true",

	  " ga": "{}",
	  "sharing": "{}",

	  "target":"_blank",
	  "allownetworking":"internal",
	  "androidhls": true,
	  "file": file
		});*/
	
	  jwplayer("player").setup({
		  "playlist": [
			{
			  "sources": [
				{
				  "default": false,
				  "file": file,
				  "label": "0",
				  "type": "hls",
				  "preload": "none"
				}
			  ]
			}	
		  ],		
		  "width": "50vw",
		  "height": "28.125vw",
		  "aspectratio": "16:9",
		  "autostart": "viewable",
		  "cast": {
			"appid": "00000000"
		  },
		  "controls": true,
		  "displaydescription": false,
		  "displaytitle": false,
		  "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.0.4/jwplayer.flash.swf",
		  "ga": {
			"idstring": "title"
		  },
		  "mute": false,
		  "playbackRateControls": true,
		  "plugins": {
			"ping": {}
		  },
		  "repeat": false,
		  "skin": {
			"controlbar": {
			  "background": "rgba(0,0,0,0)",
			  "icons": "rgba(255,255,255,0.8)",
			  "iconsActive": "#FFFFFF",
			  "text": "#F2F2F2"
			},
			"menus": {
			  "background": "#333333",
			  "text": "rgba(255,255,255,0.8)",
			  "textActive": "#FFFFFF"
			},
			"timeslider": {
			  "progress": "#F2F2F2",
			  "rail": "rgba(255,255,255,0.3)"
			},
			"tooltips": {
			  "background": "#FFFFFF",
			  "text": "#000000"
			}
		  },
		  "stagevideo": false,
		  "stretching": "uniform"
		});
	var dataa;
	$.getJSON('http://smumcdnems04.cdnsrv.jio.com/mumsite.cdnsrv.jio.com/jiotv.data.cdn.jio.com/apis/v1.3/getepg/get?offset=0&channel_id='+id,
		function (data) {
		dataa = data;
			document.getElementById("channelDetails").style.display = "inline-block";
			response = data.epg;
			div.innerHTML="";
			for(var i=0; i<response.length; i++){
				var startTime = response[i].showtime.split(":");
				if(startTime[0]>12){
					var startHour = ("0" + (startTime[0]-12)).slice(-2);
					var startPeriod = "PM"
				}else if(startTime[0]==0){
					var startHour = 12;
					var startPeriod = "AM"
				}else{
					var startHour = ("0" + startTime[0]).slice(-2);;
					var startPeriod = "AM"
				}
				var startMin = startTime[1];
				var endTime = response[i].endtime.split(":");
				if(endTime[0]>12){
					var endHour = ("0" + (endTime[0]-12)).slice(-2);
					var endPeriod = "PM"
				}else if(endTime[0]==0){
					var endHour = 12;
					var endPeriod = "AM"
				}else{
					var endHour = ("0" + (endTime[0])).slice(-2);
					var endPeriod = "AM"
				}
				var endMin = endTime[1];
				var time = (startTime[0]*60*60+startTime[1]*60)*1000;
				
				var string = "_,";
				if(hd){
					string+="40,60,80,";
				}else{
					string+="25,40,60,";
				}
				var d = new Date();
				string+="0_"+('0' + d.getDate()).slice(-2)+"_"+('0' + (d.getMonth() + 1)).slice(-2) + "_"+('0' + (d.getFullYear())).slice(-2)+"_"+startTime[0]+"_"+startTime[1];
				string = stream+"/"+stream+string;
				//console.log(string);

				var program = "<a align=\"left\" id="+time+"  ";
				if(response[i].isCatchupAvailable){
				program +="href=\"Player.php?stream="+string+"&type=catchup\" onclick=\"play(event, '"+name+"', '"+string+"', '"+""+"', '"+hd+"', '"+""+"', '"+time+"')\"";
				}
				program+="><p>"+startHour+":"+startMin+startPeriod+" - "+endHour+":"+endMin+endPeriod+"</p>"+"<p>"+response[i].showname+"</p></a>";
				div.innerHTML+=program;
			}
			playingShow(data, isCatchupAvailable);
		});
		
		
		
	}
	else{
		if(window.location.href.indexOf("TV_")>-1){
			var file = "http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/"+stream+".mp4.urlset/index-f3-v1-a1.m3u8?"+"jct="+jct+"&pxe="+pxe+"&st="+st;
		}else{
			var file = "http://livetv24x7.in/TV/"+stream+".mp4.urlset/master.m3u8"
		}
		/*jwplayer("player").setup({
		  "title": 'Live TV',
				"stretching":"uniform",
				"width": "50vw",
				"height": "28.125vw",
				"autostart": "true",

		 " ga": "{}",
			"sharing": "{}",

		"target":"_blank",
		"allownetworking":"internal",
		"androidhls": true,
		  //"file": "http://shdbdcdnems04.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/"+stream+".mp4.urlset/master.m3u8"
		"file": file
		  
		});*/
		
		jwplayer("player").setup({
		  "playlist": [
			{
			  "sources": [
				{
				  "default": false,
				  "file": file,
				  "label": "0",
				  "type": "hls",
				  "preload": "none"
				}
			  ]
			}
		  ],
		  "width": "50vw",
		  "height": "28.125vw",
		  "aspectratio": "16:9",
		  "autostart": "viewable",
		  "cast": {
			"appid": "00000000"
		  },
		  "controls": true,
		  "displaydescription": false,
		  "displaytitle": false,
		  "flashplayer": "//ssl.p.jwpcdn.com/player/v/8.0.4/jwplayer.flash.swf",
		  "ga": {
			"idstring": "title"
		  },
		  "mute": false,
		  "playbackRateControls": true,
		  "plugins": {
			"ping": {}
		  },
		  "repeat": false,
		  "skin": {
			"controlbar": {
			  "background": "rgba(0,0,0,0)",
			  "icons": "rgba(255,255,255,0.8)",
			  "iconsActive": "#FFFFFF",
			  "text": "#F2F2F2"
			},
			"menus": {
			  "background": "#333333",
			  "text": "rgba(255,255,255,0.8)",
			  "textActive": "#FFFFFF"
			},
			"timeslider": {
			  "progress": "#F2F2F2",
			  "rail": "rgba(255,255,255,0.3)"
			},
			"tooltips": {
			  "background": "#FFFFFF",
			  "text": "#000000"
			}
		  },
		  "stagevideo": false,
		  "stretching": "uniform"
		});
		
		switch(document.getElementById(nowPlaying).style.background){
			case "firebrick":
				document.getElementById(nowPlaying).style.background = "bisque";
				break;
			case "green":
				document.getElementById(nowPlaying).style.background = "lightgreen";
				break;
			default:
				break;				
		}
		nowPlaying = divId;
		switch(document.getElementById(divId).style.background){
			case "bisque":
				document.getElementById(divId).style.background = "firebrick";
				break;
			case "lightgreen":
				document.getElementById(divId).style.background = "green";
				break;
			default:
				break;				
		}
		
	}
	/*jwplayer("player").onSeek(function (){
		playingShow(dataa, isCatchupAvailable);
	})*/
}

$.ajaxSetup({
    scriptCharset: "utf-8", //or "ISO-8859-1"
    contentType: "application/json; charset=utf-8"
});

function playingShow(data, isCatchupAvailable){
var response = data.epg;
	for(var i=0; i<response.length; i++){
		var startTime = response[i].showtime.split(":");	
		var time = (startTime[0]*60*60+startTime[1]*60)*1000;
		var day = new Date();
		day.setHours(0,0,0,0);
		var dayTime = day.getTime();
		if(((new Date).getTime() - dayTime) > time){
			var nowShowing = time;
			if(isCatchupAvailable.toString()=="true"){
				document.getElementById(time).style.background = "lightgreen";
				document.getElementById(time).style.cursor="pointer";
			}else{
				document.getElementById(time).style.background = "lightcoral";
			}
		}else{
			document.getElementById(time).onclick="";
			document.getElementById(time).style.pointerEvents= "none";
			document.getElementById(time).style.cursor="default";
		}
	}
	nowPlaying = nowShowing;
	document.getElementById(nowShowing).style.cursor="pointer";
	response = json.result;
	for(var i=0; i<response.length; i++){
		if(response[i].channel_id==data.channel_id){
			document.getElementById(nowShowing).onclick=function(){play(event, response[i].channel_name, response[i].logoUrl.replace(".png",""), response[i].channel_id, response[i].isHD, response[i].isCatchupAvailable, response[i].logoUrl.replace(".png",""));};
			document.getElementById(nowShowing).href="Player.php?stream="+response[i].logoUrl.replace(".png","")+"&type=live";
			break;
		}
	}
	document.getElementById(nowShowing).style.background = "firebrick";
	document.getElementById('schedule').scrollTop = document.getElementById(nowShowing).offsetTop-parseInt(window.getComputedStyle(document.getElementById('schedule'), null).height.replace("px",""))/2-$("#schedule").offset().top/2;
}
/*$.getJSON('getList.txt', function (data) {
	json = data;
	var response = json.result;
	var suggestions = [];
	for (var i=0; i<response.length; i++) {
		suggestions.push({value : response[i].channel_name, name : response[i].logoUrl.replace(".png",""), channel_id : response[i].channel_id, isHD : response[i].isHD, isCatchupAvailable : response[i].isCatchupAvailable});
	}
	$("#search").autocomplete({
      source: suggestions,
	  minLength: 0,
	  select: function( event, ui ) {
		play(event, ui.item.value, ui.item.name, ui.item.channel_id, ui.item.isHD, ui.item.isCatchupAvailable, ui.item.name);
		$("#search").val("");
	  }
    });
});*/

var json = {"code":200,"message":"Success","result":[{"channel_id":907,"channel_name":"GoodNews Channel","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"GoodNews_Channel.png"},{"channel_id":143,"channel_name":"CNBC Tv18 Prime HD","channelCategoryId":16,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"CNBC_Tv18_Prime_HD.png"},{"channel_id":492,"channel_name":"CNN NEWS 18","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"CNN_NEWS_18.png"},{"channel_id":144,"channel_name":"Colors HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Colors_HD.png"},{"channel_id":158,"channel_name":"Star Plus HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"channelIdForRedirect":821,"logoUrl":"Star_Plus_HD.png"},{"channel_id":167,"channel_name":"Zee TV HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_TV_HD.png"},{"channel_id":291,"channel_name":"Sony HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sony_HD.png"},{"channel_id":471,"channel_name":"Sony SAB HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sony_SAB_HD.png"},{"channel_id":472,"channel_name":"And TV HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"And_TV_HD.png"},{"channel_id":279,"channel_name":"Rishtey","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Rishtey.png"},{"channel_id":473,"channel_name":"Zee Anmol","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_Anmol.png"},{"channel_id":474,"channel_name":"Sony Pal","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sony_Pal.png"},{"channel_id":367,"channel_name":"Star Utsav HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"channelIdForRedirect":820,"logoUrl":"Star_Utsav.png"},{"channel_id":154,"channel_name":"Sony SAB","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sony_SAB.png"},{"channel_id":159,"channel_name":"Star Sports HD 1","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"channelIdForRedirect":10183,"logoUrl":"Star_Sports_HD_1.png"},{"channel_id":160,"channel_name":"Star Sports HD 2","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"channelIdForRedirect":10186,"logoUrl":"Star_Sports_HD_2.png"},{"channel_id":155,"channel_name":"Sony Six HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Six_HD.png"},{"channel_id":162,"channel_name":"Ten 1HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten_HD.png"},{"channel_id":475,"channel_name":"Sony ESPN HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_ESPN_HD.png"},{"channel_id":362,"channel_name":"Star Sports HD3","channelCategoryId":8,"channelLanguageId":1,"isCatchupAvailable":true,"channelIdForRedirect":10187,"logoUrl":"Star_Sports_3.png"},{"channel_id":468,"channel_name":"Ten Golf HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten_Golf_HD.png"},{"channel_id":460,"channel_name":"Star Sports Select HD1","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"channelIdForRedirect":10389,"logoUrl":"Star_Sports_Select_HD_1.png"},{"channel_id":461,"channel_name":"Star Sports Select HD2","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"channelIdForRedirect":10390,"logoUrl":"Star_Sports_Select_HD_2.png"},{"channel_id":476,"channel_name":"Sony Max HD","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Sony_Max_HD.png"},{"channel_id":156,"channel_name":"Star Gold HD","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":true,"channelIdForRedirect":9713,"logoUrl":"Star_Gold_HD.png"},{"channel_id":165,"channel_name":"Zee Cinema HD","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Zee_Cinema_HD.png"},{"channel_id":185,"channel_name":"And Pictures HD","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"And_Pictures_HD.png"},{"channel_id":247,"channel_name":"Movies OK HD","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":true,"channelIdForRedirect":9714,"logoUrl":"Movies_OK.png"},{"channel_id":761,"channel_name":"Sony Le PLEX HD","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_Le_PLEX_HD.png"},{"channel_id":151,"channel_name":"Movies Now HD","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Movies_Now_HD.png"},{"channel_id":762,"channel_name":"Sony Pix HD","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_Pix_HD.png"},{"channel_id":477,"channel_name":"MN+","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"MNPLUS.png"},{"channel_id":478,"channel_name":"Romedy Now HD","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Romedy_Now_HD.png"},{"channel_id":146,"channel_name":"History HD","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"History_HD.png"},{"channel_id":164,"channel_name":"Travel XP HD","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Travel_XP_HD.png"},{"channel_id":463,"channel_name":"Discovery HD World","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Discovery_HD_World.png"},{"channel_id":286,"channel_name":"Animal Planet HD World","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Animal_Planet_HD.png"},{"channel_id":479,"channel_name":"TLC HD World","channelCategoryId":9,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"TLC_HD_World.png"},{"channel_id":254,"channel_name":"FYI TV18 HD","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"FYI_TV18.png"},{"channel_id":757,"channel_name":"Colors Kannada HD","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Colors_Kannada_HD.png"},{"channel_id":758,"channel_name":"Maa TV HD","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":true,"channelIdForRedirect":4300,"logoUrl":"Maa_TV.png"},{"channel_id":189,"channel_name":"Sun TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sun_TV.png"},{"channel_id":248,"channel_name":"MTV","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"MTV.png"},{"channel_id":753,"channel_name":"MTV Beats HD","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"MTV_Beats_HD.png"},{"channel_id":459,"channel_name":"Asianet Movies HD","channelCategoryId":6,"channelLanguageId":7,"isCatchupAvailable":true,"channelIdForRedirect":9715,"logoUrl":"Asianet_Movies_HD.png"},{"channel_id":443,"channel_name":"Asianet HD","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"channelIdForRedirect":895,"logoUrl":"Asianet.png"},{"channel_id":457,"channel_name":"Jalsha Movies HD","channelCategoryId":6,"channelLanguageId":5,"isCatchupAvailable":true,"channelIdForRedirect":9712,"logoUrl":"Jalsa_Movies_HD.png"},{"channel_id":368,"channel_name":"Star Vijay HD","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"channelIdForRedirect":824,"logoUrl":"Star_Vijay.png"},{"channel_id":755,"channel_name":"Colors Marathi HD","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Colors_Marathi_HD.png"},{"channel_id":756,"channel_name":"Colors Bengali HD","channelCategoryId":5,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"Colors_Bengali_HD.png"},{"channel_id":197,"channel_name":"Colors Marathi","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Colors_Marathi.png"},{"channel_id":224,"channel_name":"Surya TV","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Surya_TV.png"},{"channel_id":481,"channel_name":"Epic HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Epic_HD.png"},{"channel_id":317,"channel_name":"Star Jalsha HD","channelCategoryId":5,"channelLanguageId":5,"isCatchupAvailable":true,"channelIdForRedirect":817,"logoUrl":"Star_Jalsha.png"},{"channel_id":462,"channel_name":"Movies Now2","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Movies_Now2.png"},{"channel_id":759,"channel_name":"Maa Gold HD","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":true,"channelIdForRedirect":9716,"logoUrl":"Maa_Gold.png"},{"channel_id":760,"channel_name":"Maa Movies HD","channelCategoryId":6,"channelLanguageId":11,"isCatchupAvailable":true,"channelIdForRedirect":12207,"logoUrl":"Maa_Movies.png"},{"channel_id":482,"channel_name":"Rishtey Cineplex","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Rishtey_Cineplex.png"},{"channel_id":483,"channel_name":"Sony MAX2","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Sony_MAX2.png"},{"channel_id":182,"channel_name":"B4U Movies","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"B4U_Movies.png"},{"channel_id":484,"channel_name":"Zee Cinema","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Zee_Cinema.png"},{"channel_id":485,"channel_name":"Enterr 10","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Enterr_10.png"},{"channel_id":486,"channel_name":"Bhojpuri Cinema","channelCategoryId":6,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"Bhojpuri_Cinema.png"},{"channel_id":487,"channel_name":"Zee Classic","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Zee_Classic.png"},{"channel_id":488,"channel_name":"Zee Action","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Zee_Action.png"},{"channel_id":259,"channel_name":"NDTV Profit","channelCategoryId":16,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"NDTV_Profit.png"},{"channel_id":212,"channel_name":"ET Now","channelCategoryId":16,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"ET_Now.png"},{"channel_id":489,"channel_name":"CNBC Tv 18","channelCategoryId":16,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"CNBC_Tv_18.png"},{"channel_id":190,"channel_name":"CNBC Awaaz","channelCategoryId":16,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"CNBC_Awaaz.png"},{"channel_id":490,"channel_name":"CNBC Bazaar (MNO)","channelCategoryId":16,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"CNBC_Bazaar_MNO.png"},{"channel_id":491,"channel_name":"Mirror Now","channelCategoryId":9,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Magic_bricks_Now.png"},{"channel_id":255,"channel_name":"NDTV 24x7","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"NDTV_24x7.png"},{"channel_id":193,"channel_name":"CNN","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"CNN.png"},{"channel_id":493,"channel_name":"India Today","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"India_Today.png"},{"channel_id":383,"channel_name":"Times NOW","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Times_NOW.png"},{"channel_id":142,"channel_name":"BBC World News","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"BBC_World_News.png"},{"channel_id":784,"channel_name":"CVR News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"CVR_News.png"},{"channel_id":494,"channel_name":"AL Jazeera","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"AL_Jazeera.png"},{"channel_id":495,"channel_name":"News X","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"News_X.png"},{"channel_id":496,"channel_name":"dw","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"dw.png"},{"channel_id":258,"channel_name":"NDTV India","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"NDTV_India.png"},{"channel_id":173,"channel_name":"Aaj Tak","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Aaj_Tak.png"},{"channel_id":231,"channel_name":"News 18 India","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"IBN_7.png"},{"channel_id":497,"channel_name":"Delhi Aaj Tak","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Aaj_Tak_Delhi.png"},{"channel_id":177,"channel_name":"ABP News India","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ABP_News_India.png"},{"channel_id":235,"channel_name":"India TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_TV.png"},{"channel_id":498,"channel_name":"India news","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_news.png"},{"channel_id":499,"channel_name":"News Nation","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"News_Nation.png"},{"channel_id":501,"channel_name":"News 24","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"News_24.png"},{"channel_id":768,"channel_name":"Jan TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Jan_TV.png"},{"channel_id":502,"channel_name":"Tez","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Tez.png"},{"channel_id":503,"channel_name":"IBC-24","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"IBC-24.png"},{"channel_id":504,"channel_name":"Zee News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_News.png"},{"channel_id":770,"channel_name":"Kashish News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Kashish_News.png"},{"channel_id":771,"channel_name":"Live Today","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Live_Today.png"},{"channel_id":505,"channel_name":"Sahara Samay Mumbai","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sahara_Samay_Mumbai.png"},{"channel_id":506,"channel_name":"Sahara Samay Rastriya","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sahara_Samay_Rastriya.png"},{"channel_id":507,"channel_name":"SAHARA SAMAY MP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"SAHARA_SAMAY_MP.png"},{"channel_id":203,"channel_name":"DD News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_News.png"},{"channel_id":508,"channel_name":"SAHARA SAMAY UP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"SAHARA_SAMAY_UP.png"},{"channel_id":509,"channel_name":"Sahara Samay Bihar","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sahara_Samay_Bihar.png"},{"channel_id":510,"channel_name":"VIP News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"VIP_News.png"},{"channel_id":511,"channel_name":"Mh One News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Mh_One_News.png"},{"channel_id":783,"channel_name":"K News India","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"K_News_India.png"},{"channel_id":512,"channel_name":"India News UP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_News_UP.png"},{"channel_id":513,"channel_name":"India News Rajasthan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_News_Rajasthan.png"},{"channel_id":514,"channel_name":"Ten 1","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten_1.png"},{"channel_id":515,"channel_name":"India News MP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_News_MP.png"},{"channel_id":516,"channel_name":"India News Haryana","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_News_Haryana.png"},{"channel_id":788,"channel_name":"India Voice","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"India_Voice.png"},{"channel_id":789,"channel_name":"JK 24x7 News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"JK_24x7_News.png"},{"channel_id":791,"channel_name":"Taaza TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Taaza_TV.png"},{"channel_id":792,"channel_name":"News State UK UP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"News_State_UK_UP.png"},{"channel_id":793,"channel_name":"Samay Rajasthan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Samay_Rajasthan.png"},{"channel_id":517,"channel_name":"Chardikla Time TV","channelCategoryId":12,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"Chardikla_Time_TV.png"},{"channel_id":518,"channel_name":"Sudarshan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sudarshan.png"},{"channel_id":519,"channel_name":"Sadhna News Plus","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sadhna_News_Plus.png"},{"channel_id":520,"channel_name":"DD Rajyasabha","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Rajyasabha.png"},{"channel_id":522,"channel_name":"Loksabha TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Loksabha_TV.png"},{"channel_id":523,"channel_name":"Ten 2","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten_2.png"},{"channel_id":524,"channel_name":"Ten 3","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten_3.png"},{"channel_id":271,"channel_name":"Neo Sports","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Neo_Sports.png"},{"channel_id":266,"channel_name":"Neo Prime","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Neo_Prime.png"},{"channel_id":525,"channel_name":"Sony Six SD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_Six_SD.png"},{"channel_id":526,"channel_name":"Sony ESPN SD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_ESPN_SD.png"},{"channel_id":204,"channel_name":"DD Sports","channelCategoryId":8,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Sports.png"},{"channel_id":820,"channel_name":"Sony Rox HD","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Sony_Rox_HD.png"},{"channel_id":821,"channel_name":"Sony BBC Earth HD","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Sony_BBC_Earth_HD.png"},{"channel_id":822,"channel_name":"AXN HD","channelCategoryId":5,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"AXN_HD.png"},{"channel_id":823,"channel_name":"Sony BBC Earth SD","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_BBC_Earth_SD.png"},{"channel_id":824,"channel_name":"Puthu Yugam","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Puthu_Yugam.png"},{"channel_id":825,"channel_name":"Jaya Jaya Shankara TV","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Jaya_Jaya_Shankara_TV.png"},{"channel_id":826,"channel_name":"Malai Murasu","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Malai_Murasu.png"},{"channel_id":827,"channel_name":"BTVi","channelCategoryId":16,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"BTVi.png"},{"channel_id":828,"channel_name":"Shubh TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Shubh_TV.png"},{"channel_id":829,"channel_name":"Sri Sankara","channelCategoryId":15,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Sri_Sankara.png"},{"channel_id":830,"channel_name":"Thanthi TV","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Thanthi_TV.png"},{"channel_id":831,"channel_name":"Living India News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Living_India_News.png"},{"channel_id":527,"channel_name":"ID","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ID.png"},{"channel_id":528,"channel_name":"DD India","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_India.png"},{"channel_id":202,"channel_name":"DD National","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_National.png"},{"channel_id":529,"channel_name":"ETV MP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ETV_MP.png"},{"channel_id":530,"channel_name":"ETV UP","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ETV_UP.png"},{"channel_id":531,"channel_name":"ETV RAJASTHAN","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ETV_RAJASTHAN.png"},{"channel_id":532,"channel_name":"Dabangg","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Dabangg.png"},{"channel_id":533,"channel_name":"Raj Pariwar","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Raj_Pariwar.png"},{"channel_id":534,"channel_name":"Dillagi TV","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Dillagi_TV.png"},{"channel_id":535,"channel_name":"Dhamaal TV","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Dhamaal_TV.png"},{"channel_id":536,"channel_name":"DD Madhya Pradesh","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Madhya_Pradesh.png"},{"channel_id":539,"channel_name":"DD Bihar","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Bihar.png"},{"channel_id":538,"channel_name":"DD Rajasthan (Jaipur)","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Rajasthan_Jaipur.png"},{"channel_id":540,"channel_name":"DD Uttar Pradesh","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Uttar_Pradesh.png"},{"channel_id":919,"channel_name":"Anjan TV","channelCategoryId":5,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"Anjan_TV.png"},{"channel_id":844,"channel_name":"Mazavali Manorama HD","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Mazavali_Manorama_HD.png"},{"channel_id":857,"channel_name":"Vendhar TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Vendhar_TV.png"},{"channel_id":847,"channel_name":"MK TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"MK_TV.png"},{"channel_id":896,"channel_name":"Sun TV HD","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sun_TV_HD.png"},{"channel_id":897,"channel_name":"Gemini TV HD","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_TV_HD.png"},{"channel_id":900,"channel_name":"Surya HD","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Surya_HD.png"},{"channel_id":901,"channel_name":"Udaya HD","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Udaya_HD.png"},{"channel_id":931,"channel_name":"Star Bharat HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":true,"channelIdForRedirect":15016,"logoUrl":"Star_Bharat_HD.png"},{"channel_id":922,"channel_name":"Mahua Plus","channelCategoryId":5,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"Mahua_Plus.png"},{"channel_id":904,"channel_name":"Sanjha TV","channelCategoryId":5,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"Sanjha_TV.png"},{"channel_id":841,"channel_name":"Housefull Movies","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Housefull_Movies.png"},{"channel_id":840,"channel_name":"Housefull Action","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Housefull_Action.png"},{"channel_id":877,"channel_name":"Movies Now2 HD","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Movies_Now2_HD.png"},{"channel_id":894,"channel_name":"KTV HD","channelCategoryId":6,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"KTV_HD.png"},{"channel_id":899,"channel_name":"Gemini Movies HD","channelCategoryId":6,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_Movies_HD.png"},{"channel_id":834,"channel_name":"WB","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"WB.png"},{"channel_id":883,"channel_name":"Oscar Movies","channelCategoryId":6,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"Osar_Movies.png"},{"channel_id":908,"channel_name":"Indradhanu","channelCategoryId":6,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"Indradhanu.png"},{"channel_id":872,"channel_name":"Sony Yay Hindi","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sony_Yay_Hindi.png"},{"channel_id":874,"channel_name":"Sony Yay Telugu","channelCategoryId":7,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Sony_Yay_Telugu.png"},{"channel_id":873,"channel_name":"Sony Yay Tamil","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Sony_Yay_Tamil.png"},{"channel_id":875,"channel_name":"Dsports HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Dsports_HD.png"},{"channel_id":891,"channel_name":"Ten2 HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten2_HD.png"},{"channel_id":892,"channel_name":"Ten3 HD","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Ten3_HD.png"},{"channel_id":893,"channel_name":"True Sports","channelCategoryId":8,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"True_Sports.png"},{"channel_id":839,"channel_name":"Green TV","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Green_TV.png"},{"channel_id":853,"channel_name":"Sony BBC Earth HD Tamil","channelCategoryId":10,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sony_BBC_Earth_HD_Tamil.png"},{"channel_id":854,"channel_name":"Sony BBC Earth HD Telugu","channelCategoryId":10,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Sony_BBC_Earth_HD_Telugu.png"},{"channel_id":888,"channel_name":"Insight","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Insight.png"},{"channel_id":852,"channel_name":"Sony BBC Earth HD English","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sony_BBC_Earth_HD_English.png"},{"channel_id":906,"channel_name":"Desi Channel","channelCategoryId":10,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"Desi_Channel.png"},{"channel_id":917,"channel_name":"APN News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"APN_News.png"},{"channel_id":851,"channel_name":"SMBC TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"SMBC_TV.png"},{"channel_id":921,"channel_name":"Prime News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Prime_News.png"},{"channel_id":842,"channel_name":"Jeevan TV","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Jeevan_TV.png"},{"channel_id":855,"channel_name":"Total TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Total_TV.png"},{"channel_id":849,"channel_name":"National Voice","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"National_Voice.png"},{"channel_id":838,"channel_name":"France 24","channelCategoryId":12,"channelLanguageId":16,"isCatchupAvailable":false,"logoUrl":"France_24.png"},{"channel_id":837,"channel_name":"Euro News","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Euro_News.png"},{"channel_id":876,"channel_name":"Times Now HD","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Times_Now_HD.png"},{"channel_id":843,"channel_name":"Madhimugam TV","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Madhimugam_TV.png"},{"channel_id":918,"channel_name":"Bharat Samachar","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Bharat_Samachar.png"},{"channel_id":920,"channel_name":"Channel One News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Channel_One_News.png"},{"channel_id":925,"channel_name":"Samachar Plus Rajasthan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Samachar_Plus_Rajasthan.png"},{"channel_id":927,"channel_name":"First India News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"First_India_News.png"},{"channel_id":916,"channel_name":"TV 100","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"TV_100.png"},{"channel_id":923,"channel_name":"Dighvijay TV","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Dighvijay_TV.png"},{"channel_id":913,"channel_name":"Lotus News","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Lotus_News.png"},{"channel_id":832,"channel_name":"10 TV","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"10_TV.png"},{"channel_id":850,"channel_name":"News India 24x7","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"News_India_24_X_7.png"},{"channel_id":858,"channel_name":"Republic TV","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Republic_TV.png"},{"channel_id":881,"channel_name":"Janataa TV","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Janataa_TV.png"},{"channel_id":882,"channel_name":"News11","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"News11.png"},{"channel_id":885,"channel_name":"TV 5 Monde","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"TV_5_Monde.png"},{"channel_id":910,"channel_name":"Media One TV","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Media_One_TV.png"},{"channel_id":880,"channel_name":"Janta TV","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Janta_TV.png"},{"channel_id":929,"channel_name":"Zee 24 Kalak","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"Zee_24_Kalak.png"},{"channel_id":915,"channel_name":"Khabar Fast","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Khabar_Fast.png"},{"channel_id":848,"channel_name":"Nation Live News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Nation_Live_News.png"},{"channel_id":846,"channel_name":"MK News","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"MK_News.png"},{"channel_id":926,"channel_name":"A1 TV Rajasthan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"A1_TV_Rajasthan.png"},{"channel_id":928,"channel_name":"ANM News","channelCategoryId":12,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"ANM_News.png"},{"channel_id":909,"channel_name":"Indiawatch","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Indiawatch.png"},{"channel_id":911,"channel_name":"I Plus News","channelCategoryId":12,"channelLanguageId":4,"isCatchupAvailable":true,"logoUrl":"I_Plus_News.png"},{"channel_id":845,"channel_name":"MK Music","channelCategoryId":13,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"MK_Music.png"},{"channel_id":895,"channel_name":"Sun Music HD","channelCategoryId":13,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sun_Music_HD.png"},{"channel_id":898,"channel_name":"Gemini Music HD","channelCategoryId":13,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_Music_HD.png"},{"channel_id":884,"channel_name":"Music Fatafati","channelCategoryId":13,"channelLanguageId":5,"isCatchupAvailable":false,"logoUrl":"Music_Fatafati.png"},{"channel_id":903,"channel_name":"Only Music","channelCategoryId":13,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"Only_Music.png"},{"channel_id":905,"channel_name":"PBN Music","channelCategoryId":13,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"PBN_Music.png"},{"channel_id":835,"channel_name":"Angel TV HD","channelCategoryId":15,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Angel_TV_HD.png"},{"channel_id":856,"channel_name":"Vedic TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Vedic_TV.png"},{"channel_id":886,"channel_name":"Lakshya TV","channelCategoryId":15,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"Lakshya_TV.png"},{"channel_id":912,"channel_name":"Katyayani","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Katyayani.png"},{"channel_id":887,"channel_name":"Garv Shree Swaminarayan","channelCategoryId":15,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"Garv.png"},{"channel_id":879,"channel_name":"Hare krsna","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Harekrsna.png"},{"channel_id":902,"channel_name":"Gurbaani","channelCategoryId":15,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"Gurbaani.png"},{"channel_id":924,"channel_name":"Rujumargam TV","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Rujumargam_TV.png"},{"channel_id":914,"channel_name":"Shiva Shakti Sai TV","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Shiva_Shakti_Sai_TV.png"},{"channel_id":833,"channel_name":"HBO HD","channelCategoryId":6,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"HBO_HD.png"},{"channel_id":541,"channel_name":"Discovery Turbo","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Discovery_Turbo.png"},{"channel_id":816,"channel_name":"Cartoon Network Hindi","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Cartoon_Network_Hindi.png"},{"channel_id":559,"channel_name":"Pogo Hindi","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Pogo_Hindi.png"},{"channel_id":545,"channel_name":"Nick Hindi","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Nick_Hindi.png"},{"channel_id":544,"channel_name":"Nick Junior","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Nick_Junior.png"},{"channel_id":815,"channel_name":"Sonic Hindi","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"sonic_Hindi.png"},{"channel_id":546,"channel_name":"Nick Tamil","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Nick_Tamil.png"},{"channel_id":543,"channel_name":"Nick Telugu","channelCategoryId":7,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Nick_Telugu.png"},{"channel_id":290,"channel_name":"sonic Tamil","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"sonic_Tamil.png"},{"channel_id":547,"channel_name":"Nickelodeon","channelCategoryId":7,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Nickelodeon.png"},{"channel_id":548,"channel_name":"Nickelodeon Jr.","channelCategoryId":7,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Nickelodeon_Jr.png"},{"channel_id":549,"channel_name":"Sonic Nickelodeon","channelCategoryId":7,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Sonic_Nickelodeon.png"},{"channel_id":553,"channel_name":"Discovery Kids 1","channelCategoryId":7,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Discovery_Kids_1.png"},{"channel_id":551,"channel_name":"Toonami","channelCategoryId":7,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"Toonami.png"},{"channel_id":554,"channel_name":"Discovery Kids 2","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Discovery_Kids_2.png"},{"channel_id":550,"channel_name":"Discovery Kids Tamil","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Discovery_Kids_Tamil.png"},{"channel_id":555,"channel_name":"Chintu TV","channelCategoryId":7,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Chintu_TV.png"},{"channel_id":556,"channel_name":"Kochu TV","channelCategoryId":7,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Kochu_TV.png"},{"channel_id":557,"channel_name":"Chutti TV","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Chutti_TV.png"},{"channel_id":558,"channel_name":"Kushi TV","channelCategoryId":7,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Kushi_TV.png"},{"channel_id":817,"channel_name":"Cartoon Network Tamil","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Cartoon_Network_Tamil.png"},{"channel_id":166,"channel_name":"Cartoon Network Telugu","channelCategoryId":7,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Cartoon_Network_Telugu.png"},{"channel_id":542,"channel_name":"Pogo Tamil","channelCategoryId":7,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Pogo_Tamil.png"},{"channel_id":811,"channel_name":"Maha Cartoon","channelCategoryId":7,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Maha_Cartoon.png"},{"channel_id":560,"channel_name":"NDTV Good Times","channelCategoryId":9,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"NDTV_Good_Times.png"},{"channel_id":561,"channel_name":"Food Food","channelCategoryId":9,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Food_Food.png"},{"channel_id":562,"channel_name":"Travel XP","channelCategoryId":9,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Travel_XP.png"},{"channel_id":563,"channel_name":"Kaumudy TV","channelCategoryId":9,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Kaumudy_TV.png"},{"channel_id":439,"channel_name":"home shop 18","channelCategoryId":9,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"home_shop_18.png"},{"channel_id":565,"channel_name":"ETV Abhiruchi","channelCategoryId":9,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Abhiruchi.png"},{"channel_id":785,"channel_name":"Colors Super","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Colors_Super.png"},{"channel_id":796,"channel_name":"Peppers TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Peppers_TV.png"},{"channel_id":798,"channel_name":"Saral Jeevan","channelCategoryId":9,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Saral_Jeevan.png"},{"channel_id":797,"channel_name":"Sakhi TV","channelCategoryId":9,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Sakhi_TV.png"},{"channel_id":567,"channel_name":"Animal Planet English","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Animal_Planet_English.png"},{"channel_id":566,"channel_name":"Animal Planet Hindi","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Animal_Planet_Hindi.png"},{"channel_id":568,"channel_name":"Discovery Science","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Discovery_Science.png"},{"channel_id":569,"channel_name":"Discovery Channel Tamil","channelCategoryId":10,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Discovery_Channel_Tamil.png"},{"channel_id":570,"channel_name":"ETV Life","channelCategoryId":10,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Life.png"},{"channel_id":242,"channel_name":"Discovery","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Discovery.png"},{"channel_id":574,"channel_name":"TLC English","channelCategoryId":9,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"TLC_English.png"},{"channel_id":572,"channel_name":"Living Foodz","channelCategoryId":10,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Living_Foodz.png"},{"channel_id":575,"channel_name":"Discovery Channel Hindi","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Discovery_Channel_Hindi.png"},{"channel_id":571,"channel_name":"TLC Hindi","channelCategoryId":9,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"TLC_Hindi.png"},{"channel_id":576,"channel_name":"Discovery Channel Telugu","channelCategoryId":10,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Discovery_Channel_Telugu.png"},{"channel_id":573,"channel_name":"Discovery Channel Bengali","channelCategoryId":10,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"Discovery_Channel_Bengali.png"},{"channel_id":578,"channel_name":"History 18 Hindi","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"History_18_Hindi.png"},{"channel_id":579,"channel_name":"History 18 Tamil","channelCategoryId":10,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"History_18_Tamil.png"},{"channel_id":577,"channel_name":"History 18 Telugu","channelCategoryId":10,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"History_18_Telugu.png"},{"channel_id":580,"channel_name":"DD bharati","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_bharati.png"},{"channel_id":775,"channel_name":"Vanitha","channelCategoryId":10,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Vanitha.png"},{"channel_id":774,"channel_name":"CVR Health","channelCategoryId":10,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"CVR_Health.png"},{"channel_id":581,"channel_name":"TV1","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"TV1.png"},{"channel_id":582,"channel_name":"Care World","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Care_World.png"},{"channel_id":583,"channel_name":"DD Kisan","channelCategoryId":10,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"DD_Kisan.png"},{"channel_id":584,"channel_name":"Mastiii","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Mastiii.png"},{"channel_id":585,"channel_name":"Zing","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Zing.png"},{"channel_id":587,"channel_name":"9XM","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"9XM.png"},{"channel_id":588,"channel_name":"Sony Mix","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Sony_Mix.png"},{"channel_id":187,"channel_name":"Channel V HD","channelCategoryId":5,"channelLanguageId":1,"isCatchupAvailable":false,"channelIdForRedirect":816,"logoUrl":"Channel_V.png"},{"channel_id":183,"channel_name":"B4U Music","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"B4U_Music.png"},{"channel_id":589,"channel_name":"Zee etc","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"etc.png"},{"channel_id":591,"channel_name":"E 24","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"E_24.png"},{"channel_id":440,"channel_name":"9X Jalwa","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"9X_Jalwa.png"},{"channel_id":592,"channel_name":"ZOOM","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ZOOM.png"},{"channel_id":250,"channel_name":"Music India","channelCategoryId":13,"channelLanguageId":1,"isCatchupAvailable":false,"logoUrl":"Music_India.png"},{"channel_id":175,"channel_name":"Aastha","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Aastha.png"},{"channel_id":593,"channel_name":"Sadhna","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sadhna.png"},{"channel_id":594,"channel_name":"Aastha Bhajan","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Aastha_Bhajan.png"},{"channel_id":595,"channel_name":"Prathana TV","channelCategoryId":15,"channelLanguageId":10,"isCatchupAvailable":false,"logoUrl":"Prathana_TV.png"},{"channel_id":596,"channel_name":"Jinvani TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Jinvani_TV.png"},{"channel_id":288,"channel_name":"Sanskar","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sanskar.png"},{"channel_id":597,"channel_name":"Satsang TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Satsang_TV.png"},{"channel_id":598,"channel_name":"Sri Venkateshwar Bhakti","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Sri_Venkateshwar_Bhakti.png"},{"channel_id":599,"channel_name":"Disha tv","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Disha_tv.png"},{"channel_id":600,"channel_name":"Sanatan TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Sanatan_TV.png"},{"channel_id":601,"channel_name":"Ishwar TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Ishwar_TV.png"},{"channel_id":776,"channel_name":"Bhakti TV","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Bhakti_TV.png"},{"channel_id":602,"channel_name":"Paras tv","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Paras_tv.png"},{"channel_id":603,"channel_name":"Nambikkai","channelCategoryId":15,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Nambikkai.png"},{"channel_id":604,"channel_name":"Gyana Yogi","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Gyana_Yogi.png"},{"channel_id":605,"channel_name":"Channel Win","channelCategoryId":15,"channelLanguageId":4,"isCatchupAvailable":true,"logoUrl":"Channel_Win.png"},{"channel_id":606,"channel_name":"Shalom","channelCategoryId":15,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Shalom.png"},{"channel_id":466,"channel_name":"Arihant TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Arihant_TV.png"},{"channel_id":777,"channel_name":"Aradhana TV","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Aradhana_TV.png"},{"channel_id":794,"channel_name":"Peace of Mind","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Peace_of_Mind.png"},{"channel_id":607,"channel_name":"Subhavartha TV","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Subhavartha_TV.png"},{"channel_id":608,"channel_name":"Shubhsandesh TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Shubhsandesh_TV.png"},{"channel_id":806,"channel_name":"Adhyatam","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Adhyatam.png"},{"channel_id":802,"channel_name":"Navagraha","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Navagraha.png"},{"channel_id":609,"channel_name":"mh1 Shraddha","channelCategoryId":15,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"mh1_Shraddha.png"},{"channel_id":801,"channel_name":"Divya TV","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Divya_TV.png"},{"channel_id":611,"channel_name":"Darshan 24","channelCategoryId":15,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Darshan_24.png"},{"channel_id":804,"channel_name":"Samachar Plus","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Samachar_Plus.png"},{"channel_id":808,"channel_name":"Hindi Khabar","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Hindi_Khabar.png"},{"channel_id":809,"channel_name":"Maha Movies","channelCategoryId":6,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Maha_Movies.png"},{"channel_id":800,"channel_name":"Maha News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Maha_News.png"},{"channel_id":805,"channel_name":"Maharashtra1","channelCategoryId":12,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Maharashtra1.png"},{"channel_id":612,"channel_name":"ABP Majha","channelCategoryId":12,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"ABP_Majha.png"},{"channel_id":442,"channel_name":"Zee 24 Taas","channelCategoryId":12,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Zee_24_Taas.png"},{"channel_id":232,"channel_name":"IBN Lokmat","channelCategoryId":12,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"IBN_Lokmat.png"},{"channel_id":613,"channel_name":"Newslive","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":false,"logoUrl":"Newslive.png"},{"channel_id":614,"channel_name":"ETV Andhra pradesh","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Andhra_pradesh.png"},{"channel_id":616,"channel_name":"Tv 9 Gujarat","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"Tv_9_Gujarat.png"},{"channel_id":617,"channel_name":"TV9 Maharashtra","channelCategoryId":12,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"TV9_Maharashtra.png"},{"channel_id":618,"channel_name":"TV9 Telugu News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"TV9_Telugu_News.png"},{"channel_id":619,"channel_name":"TV9 Karnataka","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"TV9_Karnataka.png"},{"channel_id":620,"channel_name":"ETV News Gujarati","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"ETV_News_Gujarati.png"},{"channel_id":621,"channel_name":"News World India","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"News_World_India.png"},{"channel_id":765,"channel_name":"Jonack","channelCategoryId":5,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"Jonack.png"},{"channel_id":623,"channel_name":"Rang","channelCategoryId":5,"channelLanguageId":14,"isCatchupAvailable":false,"logoUrl":"Rang.png"},{"channel_id":624,"channel_name":"Prag News","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"Prag_News.png"},{"channel_id":625,"channel_name":"Zee Bangla","channelCategoryId":5,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"Zee_Bangla.png"},{"channel_id":626,"channel_name":"Suvarna News","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Suvarna_News.png"},{"channel_id":628,"channel_name":"Zee Tamil","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Zee_Tamil.png"},{"channel_id":627,"channel_name":"News 18 Assam","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"News_18_Assam.png"},{"channel_id":629,"channel_name":"ETV Telugu","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Telugu.png"},{"channel_id":630,"channel_name":"ETV Telangana","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Telangana.png"},{"channel_id":631,"channel_name":"MBC","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"MBC.png"},{"channel_id":632,"channel_name":"Sakshi tv","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Sakshi_tv.png"},{"channel_id":633,"channel_name":"DY 365","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"DY_365.png"},{"channel_id":634,"channel_name":"Flower TV","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Flower_TV.png"},{"channel_id":635,"channel_name":"Rengoni","channelCategoryId":5,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"Rengoni.png"},{"channel_id":636,"channel_name":"Polimer News","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Polimer_News.png"},{"channel_id":638,"channel_name":"Zee Telugu","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Zee_Telugu.png"},{"channel_id":180,"channel_name":"Asianet News","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Asianet_News.png"},{"channel_id":639,"channel_name":"Ramdhenu","channelCategoryId":13,"channelLanguageId":14,"isCatchupAvailable":false,"logoUrl":"Ramdhenu.png"},{"channel_id":640,"channel_name":"Studio n","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Studio_n.png"},{"channel_id":641,"channel_name":"ABP Asmita","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"ABP_Asmita.png"},{"channel_id":642,"channel_name":"VTV Gujarati","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"VTV_Gujarati.png"},{"channel_id":643,"channel_name":"GS TV","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"GS_TV.png"},{"channel_id":767,"channel_name":"Raj News\u00c2 24x7","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Raj_News_24x7.png"},{"channel_id":645,"channel_name":"Captain News","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Captain_News.png"},{"channel_id":647,"channel_name":"Pratidin News","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"Pratidin_News.png"},{"channel_id":646,"channel_name":"NTV","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"NTV.png"},{"channel_id":648,"channel_name":"Mazhavil Manorama","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Mazhavil_Manorama.png"},{"channel_id":649,"channel_name":"News 18 Kerala","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"News_18_Kerala.png"},{"channel_id":650,"channel_name":"Raj News Malayalam","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Raj_News_Malayalam.png"},{"channel_id":651,"channel_name":"Raj News Kannada","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Raj_News_Kannada.png"},{"channel_id":652,"channel_name":"Zee Hindustan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_SANGAM.png"},{"channel_id":653,"channel_name":"ETV Kannada News","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"ETV_Kannada_News.png"},{"channel_id":654,"channel_name":"Zee Punjabi HP Haryana","channelCategoryId":12,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"Zee_Punjabi_HP_Haryana.png"},{"channel_id":655,"channel_name":"ETV Haryana and HP News","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"ETV_Haryana_and_HP_News.png"},{"channel_id":656,"channel_name":"News 9","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"News_9.png"},{"channel_id":657,"channel_name":"Zee Business","channelCategoryId":16,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_Business.png"},{"channel_id":658,"channel_name":"Zee News MP Chattisgarh","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_News_MP_Chattisgarh.png"},{"channel_id":659,"channel_name":"Zee Rajasthan","channelCategoryId":12,"channelLanguageId":1,"isCatchupAvailable":true,"logoUrl":"Zee_Rajasthan.png"},{"channel_id":807,"channel_name":"Gulistan News","channelCategoryId":12,"channelLanguageId":4,"isCatchupAvailable":true,"logoUrl":"Gulistan_News.png"},{"channel_id":661,"channel_name":"Zee Purvaiya","channelCategoryId":12,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"Zee_Purvaiya.png"},{"channel_id":662,"channel_name":"Manorama News","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Manorama_News.png"},{"channel_id":663,"channel_name":"Gemini TV","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_TV.png"},{"channel_id":664,"channel_name":"Raj News Telugu","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Raj_News_Telugu.png"},{"channel_id":665,"channel_name":"HM TV","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"HM_TV.png"},{"channel_id":666,"channel_name":"ABN Andhra Jyothi","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ABN_Andhra_Jyothi.png"},{"channel_id":667,"channel_name":"T News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"T_News.png"},{"channel_id":668,"channel_name":"TV 5 News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"TV_5_News.png"},{"channel_id":669,"channel_name":"Gemini News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_News.png"},{"channel_id":671,"channel_name":"Sathiyam","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Sathiyam.png"},{"channel_id":672,"channel_name":"ABP Ananda","channelCategoryId":12,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"ABP_Ananda.png"},{"channel_id":673,"channel_name":"News7 Tamil","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"News7_Tamil.png"},{"channel_id":674,"channel_name":"Udaya News","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Udaya_News.png"},{"channel_id":675,"channel_name":"Assam Talks","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":true,"logoUrl":"Assam_Talks.png"},{"channel_id":676,"channel_name":"Sun News","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sun_News.png"},{"channel_id":769,"channel_name":"V6 News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"V6_News.png"},{"channel_id":790,"channel_name":"I News","channelCategoryId":12,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"I_News.png"},{"channel_id":677,"channel_name":"Puthiya Thalimurai","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Puthiya_Thalimurai.png"},{"channel_id":778,"channel_name":"Public TV","channelCategoryId":12,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Public_TV.png"},{"channel_id":779,"channel_name":"Prameya News 7","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"Prameya_News_7.png"},{"channel_id":780,"channel_name":"Mathrubhumi News","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Mathrubhumi_News.png"},{"channel_id":787,"channel_name":"CVR English","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":false,"logoUrl":"CVR_English.png"},{"channel_id":786,"channel_name":"Kappa TV","channelCategoryId":13,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Kappa_TV.png"},{"channel_id":781,"channel_name":"Kalinga TV","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"Kalinga_TV.png"},{"channel_id":782,"channel_name":"Sandesh News","channelCategoryId":12,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"Sandesh_News.png"},{"channel_id":810,"channel_name":"Janam TV","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Janam_TV.png"},{"channel_id":464,"channel_name":"24 Ghanta TV","channelCategoryId":12,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"24_Ghanta_TV.png"},{"channel_id":181,"channel_name":"Asianet Plus HD","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"channelIdForRedirect":5195,"logoUrl":"Asianet_Plus.png"},{"channel_id":252,"channel_name":"ETV Cinema","channelCategoryId":6,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Cinema.png"},{"channel_id":678,"channel_name":"Udaya Movies","channelCategoryId":6,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Udaya_Movies.png"},{"channel_id":679,"channel_name":"Kiran TV","channelCategoryId":6,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Kiran_TV.png"},{"channel_id":680,"channel_name":"K TV","channelCategoryId":6,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"K1_TV.png"},{"channel_id":681,"channel_name":"Gemini Movies","channelCategoryId":6,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_Movies.png"},{"channel_id":682,"channel_name":"Sun Life","channelCategoryId":6,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sun_Life.png"},{"channel_id":683,"channel_name":"Raj Digital Plus","channelCategoryId":6,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Raj_Digital_Plus.png"},{"channel_id":685,"channel_name":"Zee Bangla Cinema","channelCategoryId":6,"channelLanguageId":5,"isCatchupAvailable":false,"logoUrl":"Zee_Bangla_Cinema.png"},{"channel_id":684,"channel_name":"Gemini Life","channelCategoryId":6,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_Life.png"},{"channel_id":686,"channel_name":"Alankar TV","channelCategoryId":6,"channelLanguageId":10,"isCatchupAvailable":false,"logoUrl":"Alankar_TV.png"},{"channel_id":445,"channel_name":"Zee Marathi","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Zee_Marathi.png"},{"channel_id":336,"channel_name":"Star Pravah HD","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":true,"channelIdForRedirect":819,"logoUrl":"Star_Pravah.png"},{"channel_id":687,"channel_name":"News Time TV","channelCategoryId":12,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"News_Time_TV.png"},{"channel_id":196,"channel_name":"Colors Gujarati","channelCategoryId":5,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"Colors_Gujarati.png"},{"channel_id":688,"channel_name":"Udaya TV","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Udaya_TV.png"},{"channel_id":690,"channel_name":"DD Bangla","channelCategoryId":5,"channelLanguageId":5,"isCatchupAvailable":false,"logoUrl":"DD_Bangla.png"},{"channel_id":689,"channel_name":"Zee Kannada","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Zee_Kannada.png"},{"channel_id":691,"channel_name":"Saam Tv","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Saam_Tv.png"},{"channel_id":198,"channel_name":"Colors Oriya","channelCategoryId":5,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"Colors_Oriya.png"},{"channel_id":692,"channel_name":"ETV Plus","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"ETV_Plus.png"},{"channel_id":693,"channel_name":"ETV BIHAR","channelCategoryId":12,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"ETV_BIHAR.png"},{"channel_id":694,"channel_name":"ETV Urdu","channelCategoryId":12,"channelLanguageId":4,"isCatchupAvailable":true,"logoUrl":"ETV_Urdu.png"},{"channel_id":695,"channel_name":"DD Sahayadri","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":false,"logoUrl":"DD_Sahayadri.png"},{"channel_id":696,"channel_name":"ETV News Oriya","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"ETV_News_Oriya.png"},{"channel_id":697,"channel_name":"Sony aath","channelCategoryId":5,"channelLanguageId":5,"isCatchupAvailable":false,"logoUrl":"Sony_aath.png"},{"channel_id":698,"channel_name":"Aakaash (bangla)","channelCategoryId":5,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"Aakaash_bangla.png"},{"channel_id":699,"channel_name":"DD Malayalam","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"DD_Malayalam.png"},{"channel_id":701,"channel_name":"Dangal","channelCategoryId":5,"channelLanguageId":12,"isCatchupAvailable":true,"logoUrl":"Dangal.png"},{"channel_id":702,"channel_name":"DD Oriya","channelCategoryId":5,"channelLanguageId":10,"isCatchupAvailable":false,"logoUrl":"DD_Oriya.png"},{"channel_id":703,"channel_name":"Tarang TV","channelCategoryId":5,"channelLanguageId":10,"isCatchupAvailable":false,"logoUrl":"Tarang_TV.png"},{"channel_id":704,"channel_name":"OTV (Odisha TV)","channelCategoryId":5,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"OTV_Odisha_TV.png"},{"channel_id":370,"channel_name":"Suvarna HD","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":true,"channelIdForRedirect":823,"logoUrl":"Suvarna.png"},{"channel_id":705,"channel_name":"Polimer TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Polimer_TV.png"},{"channel_id":465,"channel_name":"Jaihind tv","channelCategoryId":12,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Jaihind_tv.png"},{"channel_id":706,"channel_name":"DD Saptagiri","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"DD_Saptagiri.png"},{"channel_id":707,"channel_name":"Raj TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Raj_TV.png"},{"channel_id":708,"channel_name":"Makkal TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Makkal_TV.png"},{"channel_id":709,"channel_name":"Adithya TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Adithya_TV.png"},{"channel_id":710,"channel_name":"Kairali TV","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Kairali_TV.png"},{"channel_id":711,"channel_name":"Captain tv","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Captain_tv.png"},{"channel_id":712,"channel_name":"DD urdu","channelCategoryId":5,"channelLanguageId":4,"isCatchupAvailable":false,"logoUrl":"DD_urdu.png"},{"channel_id":458,"channel_name":"Suvarna Plus HD","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":true,"channelIdForRedirect":9752,"logoUrl":"Asianet_Suvarna_HD.png"},{"channel_id":714,"channel_name":"DD Girnar","channelCategoryId":5,"channelLanguageId":9,"isCatchupAvailable":true,"logoUrl":"DD_Girnar.png"},{"channel_id":713,"channel_name":"DD9 chandana (kannada)","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"DD9_chandana_kannada.png"},{"channel_id":715,"channel_name":"DD Punjabi","channelCategoryId":5,"channelLanguageId":3,"isCatchupAvailable":false,"logoUrl":"DD_Punjabi.png"},{"channel_id":716,"channel_name":"DD Kashir","channelCategoryId":5,"channelLanguageId":4,"isCatchupAvailable":false,"logoUrl":"DD_Kashir.png"},{"channel_id":717,"channel_name":"ETV Bangla News","channelCategoryId":12,"channelLanguageId":5,"isCatchupAvailable":true,"logoUrl":"ETV_Bangla_News.png"},{"channel_id":799,"channel_name":"Naxatra News","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"Naxatra_News.png"},{"channel_id":718,"channel_name":"Kanak News","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"Kanak_TV.png"},{"channel_id":719,"channel_name":"Nepal one","channelCategoryId":5,"channelLanguageId":15,"isCatchupAvailable":true,"logoUrl":"Nepal_one.png"},{"channel_id":720,"channel_name":"DD13 Guwahati NE","channelCategoryId":5,"channelLanguageId":14,"isCatchupAvailable":false,"logoUrl":"DD13_Guwahati_NE.png"},{"channel_id":721,"channel_name":"News World Odisha","channelCategoryId":5,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"News_World_Odisha.png"},{"channel_id":722,"channel_name":"Sarthak TV","channelCategoryId":5,"channelLanguageId":10,"isCatchupAvailable":false,"logoUrl":"Sarthak_TV.png"},{"channel_id":723,"channel_name":"Amrita TV","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Amrita_TV.png"},{"channel_id":724,"channel_name":"Zee Kalinga","channelCategoryId":12,"channelLanguageId":10,"isCatchupAvailable":true,"logoUrl":"Zee_Kalinga.png"},{"channel_id":725,"channel_name":"Kairali People TV","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Kairali_People_TV.png"},{"channel_id":726,"channel_name":"DD5 Podhigai","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"DD5_Podhigai.png"},{"channel_id":727,"channel_name":"Vasanth TV","channelCategoryId":5,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Vasanth_TV.png"},{"channel_id":728,"channel_name":"Zee Salaam","channelCategoryId":5,"channelLanguageId":4,"isCatchupAvailable":true,"logoUrl":"Zee_Salaam.png"},{"channel_id":729,"channel_name":"Gemini Comedy","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_Comedy.png"},{"channel_id":730,"channel_name":"Kasturi","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Kasturi.png"},{"channel_id":731,"channel_name":"Kairali WE TV","channelCategoryId":5,"channelLanguageId":7,"isCatchupAvailable":true,"logoUrl":"Kairali_WE_TV.png"},{"channel_id":732,"channel_name":"9X Tashan","channelCategoryId":13,"channelLanguageId":3,"isCatchupAvailable":false,"logoUrl":"9X_Tashan.png"},{"channel_id":441,"channel_name":"9x Jhakaas","channelCategoryId":13,"channelLanguageId":2,"isCatchupAvailable":false,"logoUrl":"9x_Jhakaas.png"},{"channel_id":733,"channel_name":"Udaya Comedy","channelCategoryId":5,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Udaya_Comedy.png"},{"channel_id":734,"channel_name":"Vissa TV","channelCategoryId":5,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"Vissa_TV.png"},{"channel_id":153,"channel_name":"Zee Talkies","channelCategoryId":6,"channelLanguageId":2,"isCatchupAvailable":false,"logoUrl":"Zee_Talkies.png"},{"channel_id":735,"channel_name":"Sangeet Marathi","channelCategoryId":13,"channelLanguageId":2,"isCatchupAvailable":false,"logoUrl":"Sangeet_Marathi.png"},{"channel_id":736,"channel_name":"Maiboli","channelCategoryId":5,"channelLanguageId":2,"isCatchupAvailable":false,"logoUrl":"Maiboli.png"},{"channel_id":738,"channel_name":"Fakt Marathi","channelCategoryId":6,"channelLanguageId":2,"isCatchupAvailable":true,"logoUrl":"Fakt_Marathi.png"},{"channel_id":737,"channel_name":"Raj Music Telugu","channelCategoryId":13,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Raj_Music_Telugu.png"},{"channel_id":739,"channel_name":"Raj Music Malayalam","channelCategoryId":13,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Raj_Music_Malayalam.png"},{"channel_id":740,"channel_name":"Sangeet Bangla","channelCategoryId":13,"channelLanguageId":5,"isCatchupAvailable":false,"logoUrl":"Sangeet_Bangla.png"},{"channel_id":741,"channel_name":"Sangeet Bhojpuri","channelCategoryId":13,"channelLanguageId":12,"isCatchupAvailable":false,"logoUrl":"Sangeet_Bhojpuri.png"},{"channel_id":742,"channel_name":"mh1 (Music)","channelCategoryId":13,"channelLanguageId":3,"isCatchupAvailable":true,"logoUrl":"mh1_Music.png"},{"channel_id":743,"channel_name":"Raj Music Kannada","channelCategoryId":13,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Raj_Music_Kannada.png"},{"channel_id":744,"channel_name":"Udaya Music","channelCategoryId":13,"channelLanguageId":13,"isCatchupAvailable":false,"logoUrl":"Udaya_Music.png"},{"channel_id":745,"channel_name":"Sun Music","channelCategoryId":13,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Sun_Music.png"},{"channel_id":746,"channel_name":"Gemini Music","channelCategoryId":13,"channelLanguageId":11,"isCatchupAvailable":false,"logoUrl":"Gemini_Music.png"},{"channel_id":747,"channel_name":"Surya Music","channelCategoryId":13,"channelLanguageId":7,"isCatchupAvailable":false,"logoUrl":"Surya_Music.png"},{"channel_id":748,"channel_name":"Raj Musix","channelCategoryId":13,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Raj_Musix.png"},{"channel_id":749,"channel_name":"Sahana Music","channelCategoryId":13,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Sahana_Music.png"},{"channel_id":750,"channel_name":"Polimer Kannada","channelCategoryId":13,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Polimer_Kannada.png"},{"channel_id":751,"channel_name":"Tarang Music","channelCategoryId":13,"channelLanguageId":10,"isCatchupAvailable":false,"logoUrl":"Tarang_Music.png"},{"channel_id":773,"channel_name":"Public Music","channelCategoryId":13,"channelLanguageId":13,"isCatchupAvailable":true,"logoUrl":"Public_Music.png"},{"channel_id":803,"channel_name":"Tunes 6","channelCategoryId":13,"channelLanguageId":8,"isCatchupAvailable":false,"logoUrl":"Tunes_6.png"},{"channel_id":814,"channel_name":"Travel XP Tamil","channelCategoryId":10,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"Travel_XP_Tamil.png"},{"channel_id":637,"channel_name":"North East Live","channelCategoryId":12,"channelLanguageId":14,"isCatchupAvailable":false,"logoUrl":"North_East_Live.png"},{"channel_id":764,"channel_name":"Channel News Asia International","channelCategoryId":12,"channelLanguageId":6,"isCatchupAvailable":true,"logoUrl":"Channel_News_Asia_International.png"},{"channel_id":615,"channel_name":"News 18 Tamilnadu","channelCategoryId":12,"channelLanguageId":8,"isCatchupAvailable":true,"logoUrl":"News_18_Tamilnadu.png"},{"channel_id":772,"channel_name":"CVR OM Spiritual","channelCategoryId":15,"channelLanguageId":11,"isCatchupAvailable":true,"logoUrl":"CVR_OM_Spiritual.png"}]};
var response = json.result;
var suggestions = [];
for (var i=0; i<response.length; i++) {
	suggestions.push({value : response[i].channel_name, name : response[i].logoUrl.replace(".png",""), channel_id : response[i].channel_id, isHD : response[i].isHD, isCatchupAvailable : response[i].isCatchupAvailable});
}
$("#search").autocomplete({
  source: suggestions,
  minLength: 0,
  select: function( event, ui ) {
	play(event, ui.item.value, ui.item.name, ui.item.channel_id, ui.item.isHD, ui.item.isCatchupAvailable, ui.item.name);
	$("#search").val("");
  }
});

function getCategory(mCategory){
	var data = json;
	var response = data.result;
	var mCategoyChannels = [];
	switch (mCategory) {
		//Hindi Entertainment
		case 0:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(5) && response[i].channelLanguageId==(1) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Hindi News
		case 1:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(12) && response[i].channelLanguageId==(1) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Hindi Movies
		case 2:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(6) && response[i].channelLanguageId==(1) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Hindi Music
		case 3:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(13) && response[i].channelLanguageId==(1) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//English News
		case 4:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(12) && response[i].channelLanguageId==(6) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(16) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//English Movies
		case 5:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(6) && response[i].channelLanguageId==(6) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Sports
		case 6:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(8) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Movies
		case 7:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(6) && response[i].channelLanguageId!=(1) && response[i].channelLanguageId!=(6) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Music
		case 8:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(13) && response[i].channelLanguageId!=(1) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Entertainment
		case 9:
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(5) && response[i].channelLanguageId!=(1) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//News
		case 10:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(12) && response[i].channelLanguageId!=(1) && response[i].channelLanguageId!=(6) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Kids
		case 11:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(7) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Knowledge
		case 12:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(10) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Spiritual
		case 13:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(15) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Life Style
		case 14:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channelCategoryId==(9) && !response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		//Doordarshan
		case 15:
			mCategoyChannels=[];
			for (var i=0; i<response.length; i++) {
				if (response[i].channel_name != null && response[i].channel_name.includes("DD"))
					mCategoyChannels.push(response[i]);
			}
			break;
		default:
	}
	<!-- console.log(mCategoyChannels); -->
	var div = document.getElementById('channels');
	div.innerHTML = "";
	var response = data.result;
	for(var i=0; i<mCategoyChannels.length; i++){
		div.innerHTML+= "<div style=\"display:inline-block; text-align: center;\"><a href=\"Player.php?stream="+mCategoyChannels[i].logoUrl.replace(".png","")+"&type=live\" id=\""+mCategoyChannels[i].logoUrl.replace(".png","")+"\" onclick=\"play(event, '"+mCategoyChannels[i].channel_name+"', '"+mCategoyChannels[i].logoUrl.replace(".png","")+"', '"+mCategoyChannels[i].channel_id+"', '"+mCategoyChannels[i].isHD+"', '"+mCategoyChannels[i].isCatchupAvailable+"', '"+mCategoyChannels[i].logoUrl.replace(".png","")+"')\"><img height=\"108\" width=\"141\" src=\"http://smumcdnems03.cdnsrv.jio.com/mumsite.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/"+mCategoyChannels[i].logoUrl+"\"/><p style=\"margin:0 auto 60px auto\">"+mCategoyChannels[i].channel_name+"</p></a></div>";
	}
}

function showAllChannels(response) {
    $.getJSON('getList',
		function (data) {
		<!-- console.log(mCategoyChannels); -->
			var div = document.getElementById('channels');
			div.innerHTML = "";
			var response = data.result;
			for(var i=0; i<response.length ; i++){
			 	if (!response[i].channel_name.includes("Jio")) {
				    div.innerHTML+= "<div style=\"display:inline-block; text-align: center;\"><a href=\"Player.php?stream="+response[i].logoUrl.replace(".png","")+"&type=live\" id=\""+response[i].logoUrl.replace(".png","")+"\" onclick=\"play(event, '"+response[i].channel_name+"', '"+response[i].logoUrl.replace(".png","")+"', '"+response[i].channel_id+"', '"+response[i].isHD+"', '"+response[i].isCatchupAvailable+"', '"+response[i].logoUrl.replace(".png","")+"')\"><img height=\"144\" width=\"188\" src=\"http://smumcdnems03.cdnsrv.jio.com/mumsite.cdnsrv.jio.com/jiotv.catchup.cdn.jio.com/dare_images/images/"+response[i].logoUrl+"\"/><p style=\"margin:0 auto 60px auto\">"+response[i].channel_name+"</p></a></div>";
			    }
			}
		}
	);
}
//showAllChannels(response);