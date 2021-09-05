function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\-]?\w+)*(\.\w{2,3})+$/;
// var passformat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
// var password = document.getElementById("password").value;
// var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(inputText.value.match(mailformat))
{
// alert("Valid email address!");
document.getElementById("div1").innerHTML=" ";
document.getElementById("div1").style.color="yellow";
document.myForm.emailAddr.focus();

return true;
}
else
{
// alert("Please enter a valid email address to continue!");
// document.form1.text1.focus();
document.getElementById("div1").innerHTML="**Invalid email address";
document.getElementById("div1").style.color="yellow";
document.myForm.emailAddr.focus();
return false;
}}

function CheckPassword(inputtxt) 
{ 
var passformat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(passformat)) 
{ 
// alert('Correct, try another...')
document.getElementById("pass1").innerHTML=" ";
document.getElementById("pass1").style.color="yellow";
return true;
}
else
{ 
// alert('Enter a valid password to continue')
document.getElementById("pass1").innerHTML="**Passwords must be in valid format";
document.getElementById("pass1").style.color="yellow";

// document.myForm.emailAddr.focus();
return false;
}
} 

// function CheckPassword(inputtxt) 
// { 
// var passformat=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
// if(inputtxt.value.match(passformat)) 
// { 
// // alert('Correct, try another...')
// document.getElementById("pass1").innerHTML=" ";
// document.getElementById("pass1").style.color="yellow";
// return true;
// }
// else
// { 
// // alert('Enter a valid password to continue')
// document.getElementById("pass1").innerHTML=" ** Please fill the password between 8 to 15 characters";
// document.getElementById("pass1").style.color="yellow";
// return false;
// }
// } 
// // if(password==""){
// //     document.getElementById("password1").innerHTML=" ** Please fill the password";
// //     return false;
// // }
// // if(password.match(passformat)){
// //    return true; 






function check()
{
	if(ValidateEmail(document.myForm.emailAddr)&& CheckPassword(document.myForm.password))
	{
		window.location = "../index.html";
	}
		else{
			alert("Login failed");

		}


}
