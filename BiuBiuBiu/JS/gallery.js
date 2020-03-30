// JavaScript Document
jQuery(document).ready(function(e) {
    $(".word1").hide();
	$(".word2").hide();
	$(".word3").hide();
	$(".word4").hide();
	$(".word5").hide();
	$(".word6").hide();
	$("#div1").mouseenter(function(e) {
        $("#pic1").fadeTo(2000,0.6);
		$(".word1").fadeIn(2000);
    });
	$("#div1").mouseleave(function(e) {
        $("#pic1").fadeTo(2000,1);
		$(".word1").fadeOut(2000);
    });
	$("#div2").mouseenter(function(e) {
        $("#pic2").fadeTo(2000,0.6);
		$(".word2").fadeIn(2000);
    });
	$("#div2").mouseleave(function(e) {
        $("#pic2").fadeTo(2000,1);
		$(".word2").fadeOut(2000);
    });
	$("#div3").mouseenter(function(e) {
        $("#pic3").fadeTo(2000,0.6);
		$(".word3").fadeIn(2000);
    });
	$("#div3").mouseleave(function(e) {
        $("#pic3").fadeTo(2000,1);
		$(".word3").fadeOut(2000);
    });
	$("#div4").mouseenter(function(e) {
        $("#pic4").fadeTo(2000,0.5);
		$(".word4").fadeIn(2000);
    });
	$("#div4").mouseleave(function(e) {
        $("#pic4").fadeTo(2000,1);
		$(".word4").fadeOut(2000);
    });
	$("#div5").mouseenter(function(e) {
        $("#pic5").fadeTo(2000,0.7);
		$(".word5").fadeIn(2000);
    });
	$("#div5").mouseleave(function(e) {
        $("#pic5").fadeTo(2000,1);
		$(".word5").fadeOut(2000);
    });
	$("#div6").mouseenter(function(e) {
        $("#pic6").fadeTo(2000,0.6);
		$(".word6").fadeIn(2000);
    });
	$("#div6").mouseleave(function(e) {
        $("#pic6").fadeTo(2000,1);
		$(".word6").fadeOut(2000);
    });
});
jQuery(document).ready(function(e) {
    $("#div1").click(function(e) {
        window.location.href="Be with you.html";
    });
	$("#div2").click(function(e) {
        window.location.href="starlight.html";
    });
	$("#div3").click(function(e) {
        window.location.href="Mariage D'amour.html";
    });
	$("#div4").click(function(e) {
        window.location.href="You are beautiful.html";
    });
	$("#div5").click(function(e) {
        window.location.href="And I love you so.html";
    });
	$("#div6").click(function(e) {
        window.location.href="Beautiful in red.html";
    });
});
