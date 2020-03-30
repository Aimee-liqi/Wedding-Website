// JavaScript Document
jQuery(document).ready(function(e) {
	$("#div1").hide();
	$("#div2").hide();
	$("#div3").hide();
	$("#div4").hide();
	$("#div5").hide();
	
    $("#title1").mouseover(function(e) {
		$("#title1").css({"color":"rgba(141,159,123,1)",
"text-shadow":"2px 2px 0 grey,3px 3px 0px rgba(141,159,123,0.5)"});
        $("#div1").slideDown(1000);
		$("#pic1").hide();
		$("#word1").hide();
		$("#pic1").fadeIn(1000);
		$("#word1").slideDown(3000);
    });
	$("#div1").mouseleave(function(e) {
		$("#title1").css({"color":"rgba(141,159,123)",
"text-shadow":"0 0 8px rgb(141,159,123)"});
        $("#div1").slideUp(1000);
    });
	
	$("#title2").mouseenter(function(e) {
		$("#title2").css({"color":"rgba(141,159,123,1)",
"text-shadow":"2px 2px 0 grey,3px 3px 0px rgba(141,159,123,0.5)"});
        $("#div2").slideDown(1000);
		$("#pic2").hide();
		$("#word2").hide();
		$("#pic2").fadeIn(1000);
		$("#word2").slideDown(3000);
    });
	$("#div2").mouseleave(function(e) {
		$("#title2").css({"color":"rgba(141,159,123)",
"text-shadow":"0 0 8px rgb(141,159,123)"});
        $("#div2").slideUp(1000);
    });
	
	$("#title3").mouseenter(function(e) {
		$("#title3").css({"color":"rgba(141,159,123,1)",
"text-shadow":"2px 2px 0 grey,3px 3px 0px rgba(141,159,123,0.5)"});
        $("#div3").slideDown(1000);
		$("#pic3").hide();
		$("#word3").hide();
		$("#pic3").fadeIn(1000);
		$("#word3").slideDown(3000);
    });
	$("#div3").mouseleave(function(e) {
		$("#title3").css({"color":"rgba(141,159,123)",
"text-shadow":"0 0 8px rgb(141,159,123)"});
        $("#div3").slideUp(1000);
    });
	
	$("#title4").mouseenter(function(e) {
		$("#title4").css({"color":"rgba(141,159,123,1)",
"text-shadow":"2px 2px 0 grey,3px 3px 0px rgba(141,159,123,0.5)"});
        $("#div4").slideDown(1000);
		$("#pic4").hide();
		$("#word4").hide();
		$("#pic4").fadeIn(1000);
		$("#word4").slideDown(3000);
    });
	$("#div4").mouseleave(function(e) {
		$("#title4").css({"color":"rgba(141,159,123)",
"text-shadow":"0 0 8px rgb(141,159,123)"});
        $("#div4").slideUp(1000);
    });
	
	$("#title5").mouseenter(function(e) {
		$("#title5").css({"color":"rgba(141,159,123,1)",
"text-shadow":"2px 2px 0 grey,3px 3px 0px rgba(141,159,123,0.5)"});
        $("#div5").slideDown(1000);
		$("#pic5").hide();
		$("#word5").hide();
		$("#pic5").fadeIn(1000);
		$("#word5").slideDown(3000);
    });
	$("#div5").mouseleave(function(e) {
		$("#title5").css({"color":"rgba(141,159,123)",
"text-shadow":"0 0 8px rgb(141,159,123)"});
        $("#div5").slideUp(1000);
    });
});