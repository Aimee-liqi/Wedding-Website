// JavaScript Document
var iuser;
var value1;
var checkP=false;
var check=false;
function setValue()
{
	iuser=parseInt(localStorage.getItem("iuser"));
	if(isNaN(iuser))
	{
		iuser=0;
	}
}


function register()
{
	if(typeof(Storage)=='undefined')
	{
		alert("Not Suppported");
	}
	else
	{
		if(check==true)
		{
			localStorage.setItem("F Name"+iuser,document.getElementById("f").value);
			localStorage.setItem("L Name"+iuser,document.getElementById("l").value);
			localStorage.setItem("Gender"+iuser,value1);
			localStorage.setItem("Birthday"+iuser,document.getElementById("bir").value);
			localStorage.setItem("UserID"+iuser,document.getElementById("uid").value);
			localStorage.setItem("Password"+iuser,document.getElementById("psw").value);
			localStorage.setItem("Password 2"+iuser,document.getElementById("psw2").value);
			localStorage.setItem("Tel"+iuser,document.getElementById("tel").value);
			localStorage.setItem("Num_of_users",++iuser);
			alert("Success");
		}
		else
		{
			alert("Fail to register! Please check your password.")
	
		}
	}
}
setValue();
function getValue(obj)
{
	value1=obj.value;
}

function checkF(input)
{
	input.setCustomValidity("");
	var value=document.getElementById("f").value;	
	if(/[0-9]/.test(value))
	{
		input.setCustomValidity("Name cannot have number");
	}
	else
	{
		input.setCustomValidity("");
		if((/[@#$%^&*()-+]/.test(value)))
		{
			input.setCustomValidity("Name cannot have symbol");
		}
	}
}
function checkL(input)
{
	input.setCustomValidity("");
	var value=document.getElementById("l").value;	
	if(/[0-9]/.test(value))
	{
		input.setCustomValidity("Name cannot have number");
	}
	else
	{
		input.setCustomValidity("");
		if((/[@#$%^&*()-+]/.test(value)))
		{
			input.setCustomValidity("Name cannot have symbol");
		}
	}
}
function checkPassword(input)
{
	var value=document.getElementById("psw").value;
	var textplace;
	if(value.length<6)
	{
		input.setCustomValidity("Password cannot be less than 6 characters");
	}
	else
	{
		input.setCustomValidity("");
		if(!(/[0-9]/.test(value)))
		{
			input.setCustomValidity("Password should include number");
		}
		else
		{
			if(!(/[a-zA-Z]/.test(value)))
				{
					input.setCustomValidity("Password should include characters");
					
				}
			else
			{
				checkP=true;
				checkPass();
			}
		}
		
		
	}
}
function checkPass()
{
	if(checkP==true)
	{
		var value2=document.getElementById("psw").value;
		var value3=document.getElementById("psw2").value;
		if(value2==value3)
		{
			check=true;
		}
	}
	
}


function checkTel(input)
{
	input.setCustomValidity("");
	var value=document.getElementById("tel").value;
	if(value.length!=11)
	{
		input.setCustomValidity("It should have 11 numbers");
	}
	else
	{
		input.setCustomValidity("");
		if(/[@#$%^&*()-+]/.test(value))
		{
			input.setCustomValidity("Tel should only have numbers");
		}
		else
		{
			input.setCustomValidity("");
			if(/[a-zA-Z]/.test(value))
			{
				input.setCustomValidity("Tel should only have numbers");
			}
		}
	}
}