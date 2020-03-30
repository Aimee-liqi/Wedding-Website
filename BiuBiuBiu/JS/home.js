// JavaScript Document

$(document).ready(function(){
	//Examples of how to assign the ColorBox event to elements
	$(".pics").colorbox({rel:'pics', transition:"fade",opacity:0.2, slideshow:true, transition:"fade"});
});
$(document).ready(function(){
	$("#butt1").ready(function(e) {
		var pic=document.getElementById("error");
		var value=document.getElementById("name").value;
        if(/[^1[0-9]{10}$]/.test(value))
		{
			alert("Submitted Successfully.");
		}
		else
		{
			alert("Please enter the correct cell phone number!");
		}
    });
});
/*
$(function(){
        $(function () {
            $(window).scroll(function(){
                if ($(window).scrollTop()>100){
                    $("#back-to-top").fadeIn(1500);
                }
                else
                {
                    $("#back-to-top").fadeOut(1500);
                }
            });
 
            $("#back-to-top").click(function(){
                if ($('html').scrollTop()) {
                    $('html').animate({ scrollTop: 0 }, 100);
                    return false;
                }
                $('body').animate({ scrollTop: 0 }, 100);
                return false;
            });
        });
    });*/
var customer;
var customer_num=0;
function setIValue(){
	customer=parseInt(localStorage.getItem("customer"));
	if(isNaN(customer)){
		customer=0;
	}
}
 function obtainQuotes(){
	
	 var v=sessionStorage.getItem("v");
	if(typeof(Storage)=='undefined')
	{
		alert("Please enter the correct cell phone number!");
	}
	else{
			if(v=="obtain1"){
			
					localStorage.setItem("And I love you so much"+customer,document.getElementById("number").value);
					localStorage.setItem("customer",++customer);
			}
			else if(v=="obtain2"){
			
					localStorage.setItem("Be with you"+customer,document.getElementById("number").value);
					localStorage.setItem("customer",++customer);
			}
			else if(v=="obtain3"){
			
					localStorage.setItem("Mariage D'amour"+customer,document.getElementById("number").value);
					localStorage.setItem("customer",++customer);
			}
			else if(v=="obtain4"){
			
					localStorage.setItem("Beautiful in red"+customer,document.getElementById("number").value);
					localStorage.setItem("customer",++customer);
			}
			else if(v=="obtain5"){
			
					localStorage.setItem("Starlight"+customer,document.getElementById("number").value);
					localStorage.setItem("customer",++customer);
			}
			else if(v=="obtain6"){
			
					localStorage.setItem("You are beautiful"+customer,document.getElementById("number").value);
					localStorage.setItem("customer",++customer);
			}
				
		
		customer_num=sessionStorage.getItem("num");
		//increase the number of users
		++customer_num;
		//set the values
		sessionStorage.setItem("num",customer_num);
		alert("Submitted Successfully.");
		
		
	}
	location.reload();
}
setIValue();



function change11()
{
	document.getElementById("pic1").src="images/info1.jpg";
}
function change12()
{
	document.getElementById("pic2").src="images/info2.jpg";
}function change13()
{
	document.getElementById("pic3").src="images/info3.jpg";
}function change14()
{
	document.getElementById("pic4").src="images/info4.jpg";
}function change15()
{
	document.getElementById("pic5").src="images/info5.jpg";
}function change16()
{
	document.getElementById("pic6").src="images/info6.jpg";
}
function changeBack11()
{
	document.getElementById("pic1").src="images/And I love you so/8.jpg";
}

function changeBack12()
{
	document.getElementById("pic2").src="images/Be with you/Place5.jpg";
}
function changeBack13()
{
	document.getElementById("pic3").src="images/Mariage D'amour/12.jpg";
}
function changeBack14()
{
	document.getElementById("pic4").src="images/Beautiful in red/8.jpg";
}
function changeBack15()
{
	document.getElementById("pic5").src="images/starlight/6.jpg";
}
function changeBack16()
{
	document.getElementById("pic6").src="images/You are beautiful/2.jpg";
}
function and_I_Love_You_So()
{
	window.open("And I love you so.html");
}
function be_With_You()
{
	window.open("Be with you.html");
}
function mariage_Damour()
{
	window.open("Mariage D'amour.html");
}
function beautiful_In_Red()
{
	window.open("Beautiful in red.html");
}
function starlight()
{
	window.open("starlight.html");
}
function you_Are_Beautiful()
{
	window.open("You are beautiful.html");
}
function booking()
{
	document.getElementById("img1").src="images/booking_pic.jpg";
}
function options()
{
	document.getElementById("img1"). src="images/option_pic.jpg" ;
}
function determine()
{
	document.getElementById("img1").src="images/determine_pic.jpg";
}
function selectTeam()
{
	document.getElementById("img1").src="images/select_pic.jpg";
}
function tracking()
{
	document.getElementById("img1").src="images/tracking_pic.jpg";

}
function changeBlue1()
{
	document.getElementById("pink1").src="images/round.jpg";
}
function changePink1()
{
	document.getElementById("pink1").src="images/point.jpg";
}
function changeBlue2()
{
	document.getElementById("pink2").src="images/round.jpg";
}
function changePink2()
{
	document.getElementById("pink2").src="images/point.jpg";
}
function changeBlue3()
{
	document.getElementById("pink3").src="images/round.jpg";
}
function changePink3()
{
	document.getElementById("pink3").src="images/point.jpg";
}
function changeBlue4()
{
	document.getElementById("pink4").src="images/round.jpg";
}
function changePink4()
{
	document.getElementById("pink4").src="images/point.jpg";
}
function changeBlue5()
{
	document.getElementById("pink5").src="images/round.jpg";
}
function changePink5()
{
	document.getElementById("pink5").src="images/point.jpg";
}
function changeBlue6()
{
	document.getElementById("pink6").src="images/round.jpg";
}
function changePink6()
{
	document.getElementById("pink6").src="images/point.jpg";
}
function changeBlue7()
{
	document.getElementById("pink7").src="images/round.jpg";
}
function changePink7()
{
	document.getElementById("pink7").src="images/point.jpg";
}
function pic_1()
{
	document.getElementById("pi1").src="images/1.png";
}

function pic_2()
{
	document.getElementById("pi1").src="images/2.png";
}

function pic_3()
{
	document.getElementById("pi1").src="images/3.png";
}

function pic_4()
{
	document.getElementById("pi1").src="images/4.png";
}
function withyou_1()
{
	document.getElementById("withyou1").src="images/Be with you/People.jpg";
}

function withyou_2()
{
	document.getElementById("withyou1").src="images/Be with you/Place1.jpg";
}

function withyou_3()
{
	document.getElementById("withyou1").src="images/Be with you/Place2.jpg";
}

function withyou_4()
{
	document.getElementById("withyou1").src="images/Be with you/Place3.jpg";
}
function mariage_1()
{
	document.getElementById("mariage1").src="images/Mariage D'amour/2.png" ;
}

function mariage_2()
{
	document.getElementById("mariage1").src="images/Mariage D'amour/3.jpg" ;
}

function mariage_3()
{
	document.getElementById("mariage1").src="images/Mariage D'amour/9.jpg" ;
}

function mariage_4()
{
	document.getElementById("mariage1").src="images/Mariage D'amour/12.jpg" ;
}
function beautiful_1()
{
	document.getElementById("beautiful1").src="images/Beautiful in red/1.jpg" ;
}

function beautiful_2()
{
	document.getElementById("beautiful1").src="images/Beautiful in red/2.jpg" ;
}

function beautiful_3()
{
	document.getElementById("beautiful1").src="images/Beautiful in red/5.jpg" ;
}

function beautiful_4()
{
	document.getElementById("beautiful1").src="images/Beautiful in red/6.jpg" ;
}
function starlight_1()
{
	document.getElementById("starlight1").src="images/starlight/2.jpg" ;
}

function starlight_2()
{
	document.getElementById("starlight1").src="images/starlight/3.jpg" ;
}

function starlight_3()
{
	document.getElementById("starlight1").src="images/starlight/6.jpg" ;
}

function starlight_4()
{
	document.getElementById("starlight1").src="images/starlight/10.jpg" ;
}   
function you_1()
{
	document.getElementById("you1").src="images/You are beautiful/2.jpg" ;
}

function you_2()
{
	document.getElementById("you1").src="images/You are beautiful/3.jpg" ;
}

function you_3()
{
	document.getElementById("you1").src="images/You are beautiful/6.jpg" ;
}

function you_4()
{
	document.getElementById("you1").src="images/You are beautiful/8.jpg" ;
}
function change1()
{
	document.getElementById("teamPic").src="images/iced_earth.jpg";
}
function change2()
{
	document.getElementById("teamPic").src="images/F(x).jpg";
}
function change3()
{
	document.getElementById("teamPic").src="images/vedio_team.png";
}
function changeTeam()
{
	document.getElementById("teamPic").src="images/team1.jpg";
}
function openTeam()
{
	window.open("Team.html");
}