// JavaScript Document
var fduser;
var User_num=0;

function setIValue(){
	fduser=parseInt(localStorage.getItem("fduser"));
	if(isNaN(fduser)){
		fduser=0;
	}
}
function addfeedback(){
	if(typeof(Storage)=='undefined')
	{ 
		alert("Not Supported");
	}
	else{
		localStorage.setItem("email"+fduser,document.getElementById("email").value);
		localStorage.setItem("advise"+fduser,document.getElementById("advise").value);
		localStorage.setItem("fduser",++fduser);
		User_num=sessionStorage.getItem("feedback_sum");
		++User_num;
		sessionStorage.setItem("feedback_sum",User_num);
		alert("Sucess");
	}
	location.reload();
}

setIValue();