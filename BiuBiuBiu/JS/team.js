// JavaScript Document

var teamreserve;
var numRes=0;//how many users have tegistered
function setIValue(){
	teamreserve=parseInt(localStorage.getItem("teamreserve"));
	if(isNaN(teamreserve)){
		teamreserve=0;
	}
}
 function addreserve(){
	
	 var value_but=sessionStorage.getItem("value_but");
	if(typeof(Storage)=='undefined')
	{
		alert("Not Supported");
	}
	else{
		//to the local storage
			if(value_but=="but1"){
			
					localStorage.setItem("G-dragon"+teamreserve,document.getElementById("number").value);
					localStorage.setItem("teamreserve",++teamreserve);
			}
			else if(value_but=="but2"){
			
					localStorage.setItem("Gao Yuanyuan"+teamreserve,document.getElementById("number").value);
					localStorage.setItem("teamreserve",++teamreserve);
			}
			else if(value_but=="but3"){
			
					localStorage.setItem("Guo Biting"+teamreserve ,document.getElementById("number").value);
					localStorage.setItem("teamreserve",++teamreserve);
			}
				
		
		numUsers=sessionStorage.getItem("num_of_teamreserve");
		//increase the number of users
		++numRes;
		//set the values
		sessionStorage.setItem("num_of_teamreserve",numRes);
		alert("Sucess");
		
		
		
		
	}
	location.reload();
}
setIValue();

