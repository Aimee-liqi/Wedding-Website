// JavaScript Document
var value1;
var value2;
var value3;
var value4;
function login1()
{
	if(typeof(Storage)=='undefined')
	{
		alert("Not Suppported");
	}
	else
	{
		value3=document.getElementById("uid").value;
		value4=document.getElementById("paw").value;
		for(iuser=0;iuser<=100;iuser++)
		{
			value1=localStorage.getItem("UserID"+iuser);
			value2=localStorage.getItem("Password"+iuser);
			if((value1==value3)&&(value2==value4))
			{
				alert("Welcome")
				
				break;
			}
		}
		if(iuser==101)
		{
			alert("Your UserID or Password is wrong!");
		}
			
	}
}