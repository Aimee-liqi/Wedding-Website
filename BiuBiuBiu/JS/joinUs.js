// JavaScript Document
var iuser;
var check=false;

function setValue()
{
	iuser=parseInt(localStorage.getItem("iuser"));
	if(isNaN(iuser))
	{
		iuser=0;
	}
}

function joinUs()
{
	if(typeof(Storage)=='undefined')
	{
		alert("Not Suppported");
	}
	else
	{
		if(check==true)
		{
			localStorage.setItem("E-mail"+iuser,document.getElementById("email1").value);
			alert("Success");
		}
		else
		{
			alert("Please Enter the correct E-mail.")
	
		}
	}
}
setValue();