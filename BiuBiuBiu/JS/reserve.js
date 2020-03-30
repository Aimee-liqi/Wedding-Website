// JavaScript Document
var iuser;
function setValue()
{
	iuser=parseInt(localStorage.getItem("iuser"));
	if(isNaN(iuser))
	{
		iuser=0;
	}
}


function reserve()
{
	if(typeof(Storage)=='undefined')
	{
		alert("Not Suppported");
	}
	else
	{
		localStorage.setItem("style"+iuser,value1);
		localStorage.setItem("place"+iuser,value2);
		localStorage.setItem("budget"+iuser,value3);
		localStorage.setItem("guests"+iuser,value4);
		localStorage.setItem("time1"+iuser,document.getElementById("time").value);
		localStorage.setItem("important"+iuser,document.getElementById("important").value);
		localStorage.setItem("time2"+iuser,document.getElementById("date").value);
		localStorage.setItem("Tel"+iuser,document.getElementById("tel").value);
		localStorage.setItem("Tel"+iuser,document.getElementById("email").value);
		localStorage.setItem("Num_of_users",++iuser);
		alert("Success");
	}
}
setValue();
function getValue1(obj)
{
	value1=obj.value;
}
function getValue2(obj)
{
	value2=obj.value;
}
function getValue3(obj)
{
	value3=obj.value;
}
function getValue4(obj)
{
	value4=obj.value;
}