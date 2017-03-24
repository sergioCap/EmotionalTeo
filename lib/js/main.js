var currentTeam = "1";

var step1 = window.innerHeight + 50;
var step2 = step1 * 2;

var currentPart = 1;

$(document).keydown(function(e) {
    switch(e.which) {
		case 27:
		$("div.fullscreen").hide("fade");
		$("div.video-content").hide("fade");
		$("div.pic-content").hide("fade");
		$("div.youtube-iframe").html('');
		break;
        default: return; // exit this handler for other keys
    }
    e.preventDefault();
});

$( function () {
	$("div.menu-item").click(function() {
		switch($(this).attr('nr')) {
			case '1':
			$('div.div-team').hide("fade");
			$('#div-credits').hide("fade");
			$('#div-home').show("fade");
			$("#navbar").animate({ backgroundColor: "#efff00", color: "#000"}, 100 );
			break;
			case '2':
			$('#div-home').hide("fade");
			$('#team2').hide("fade");
			$('#div-credits').hide("fade");
			$('#team1, div.div-team').show("fade");
			$("#navbar").animate({ backgroundColor: "#0099ff", color: "#000"}, 100 );
			break;
			case '3':
			$('#div-home').hide("fade");
			$('#team1').hide("fade");
			$('#div-credits').hide("fade");
			$('#team2, div.div-team').show("fade");
			$("#navbar").animate({ backgroundColor: "#0099ff", color: "#000"}, 100 );
			break;
			case '4':
			$('#div-home').hide("fade");
			$('div.div-team').hide("fade");
			$('#div-credits').show("fade");
			$("#navbar").animate({ backgroundColor: "#cc3300"}, 100 );
			$("#navbar").animate({ color: "#fff"}, 100 );
			break;
			default:
			$('div.div-team').hide("fade");
			$('#div-credits').hide("fade");
			$('#div-home').show("fade");
			$("#navbar").animate({ backgroundColor: "#efff00", color: "#000"}, 100 );
			break;
		}
	});
	$("div.play-video").click(function() {
		if ($(this).attr('id') == "video1") {
			videoCode = '<iframe id="youtube" class="video" src="https://www.youtube.com/embed/xRCZ9N3MwNw" frameborder="0" allowfullscreen allowscriptaccess="always"></iframe>';
		} else if ($(this).attr('id') == "video2") {
			videoCode = '<iframe id="youtube" class="video" src="https://www.youtube.com/embed/GmOVCxmwFKA" frameborder="0" allowfullscreen allowscriptaccess="always"></iframe>';
		}
		$("div.youtube-iframe").html(videoCode);
		$("div.fullscreen, div.video-content").show("fade");
	});
	$("div.close").click(function() {
		$("div.fullscreen").hide("fade");
		$("div.video-content").hide("fade");
		$("div.pic-content").hide("fade");
		$("div.youtube-iframe").html('');
	});
	$("div.navprev").click(function() {
		if (currentPart > 1) {
			$("div.part"+(currentPart)).hide();
			$("div.part"+(--currentPart)).show();
			$("div.navnext").css({ opacity: 1 });
			$("div.navprev").css({ opacity: 0 });
		}
		
	});	
	$("div.navnext").click(function() {
		if (currentPart < 2) {
			$("div.part"+(currentPart)).hide();
			$("div.part"+(++currentPart)).show();
			$("div.navnext").css({ opacity: 0 });
			$("div.navprev").css({ opacity: 1 });
		}
	});
	$("div.circle").hover(function() {
		image = $(this).children("img");
		imgID = image.attr("id");
		image.attr('src', "img/credits/"+imgID+".png");
	}, function() {
		image = $(this).children("img");
		imgID = image.attr("id");
		image.attr('src', "img/credits/"+imgID+"_logo.png");
	});	
	$("img.dev-pic").hover(function() {
		imgID = $(this).attr("id");
		$(this).attr('src', "img/credits/"+imgID+".png");
	}, function() {
		imgID = $(this).attr("id");
		$(this).attr('src', "img/credits/"+imgID+"_logo.png");
	});
	$("div.navbar-hover").mouseleave(function() {
		$("#showmenu").show("fade");
		$("#navbar").animate({ top: "-50px" }, 200 );
		$("div.teotop").animate({ top: "-35%" }, 200 );
	});
	$("#showmenu").hover(function() {
		$("#showmenu").hide();
		$("#navbar").animate({ top: "0" }, 200 );
		$("div.teotop").animate({ top: "-10%" }, 200 );
	});
});

function zoom(name) {
		$("div.fullscreen, div.pic-content").show("fade");
		$("#full-picture").attr('src', "img/team/"+name+".png");
}

function hideAll() {
	$('div.contentdiv').hide("fade");
}