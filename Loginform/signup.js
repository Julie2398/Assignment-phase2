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
// document.myForm.emailAddr.focus();

return true;
}
else
{
// alert("Please enter a valid email address to continue!");
// document.form1.text1.focus();
document.getElementById("div1").innerHTML="**Invalid email address";
document.getElementById("div1").style.color="yellow";
// document.myForm.emailAddr.focus();
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
document.getElementById("pass1").innerHTML="**Passwords must be atleast 8 characters in length containing a minimum of 1 lower case letter, 1 upper case letter, 1 numeric character  and a minimum of 1 special character";
document.getElementById("pass1").style.color="yellow";

// document.myForm.emailAddr.focus();
return false;
}
} 

// function validate(){
//   ValidateEmail(document.myForm.emailAddr);CheckPassword(document.myForm.password);confirmPassword();phonenumber(document.myForm.mobnumber);
//   if(ValidateEmail(document.myForm.emailAddr)&&CheckPassword(document.myForm.password)&&confirmPassword()&&phonenumber(document.myForm.mobnumber)){
//     // window.open("success.html");
//     alert("login success")
//     return true;
  
//   }
//   // else{
//   //   alert("login failed");
//   //   return false;
//   // }
// }












function getPasswordStrength(password){
  let s = 0;
  if(password.length > 6){
    s++;
  }
  if(password.length > 10){
    s++;
  }
  if(/[A-Z]/.test(password)){
    s++;
  }
  if(/[0-9]/.test(password)){
    s++;
  }
  if(/[^A-Za-z0-9]/.test(password)){
    s++;
  }
  return s;
}
document.querySelector(" #password").addEventListener("focus",function(){
  document.querySelector(" .pw-strength").style.display = "block";
});

// document.querySelector(" .pw-display-toggle-btn").addEventListener("click",function(){
//   let el = document.querySelector(" .pw-display-toggle-btn");
//   if(el.classList.contains("active")){
//     document.querySelector(" #password").setAttribute("type","password");
//     el.classList.remove("active");
//   } else {
//     document.querySelector(" #password").setAttribute("type","text");
//     el.classList.add("active");
//   }
// });

const tgglePassword = document.querySelector('#tgglePassword');
      const password11 = document.querySelector('#password');
      tgglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password11.getAttribute('type') === 'password' ? 'text' : 'password';
        password11.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
    });


document.querySelector(" #password").addEventListener("keyup",function(e){
  let password = e.target.value;
  let strength = getPasswordStrength(password);
  let passwordStrengthSpans = document.querySelectorAll(" .pw-strength span");
  strength = Math.max(strength,1);
  passwordStrengthSpans[1].style.width = strength*20 + "%";
  if(strength < 2){
    passwordStrengthSpans[0].innerText = "Weak";
    passwordStrengthSpans[0].style.color = "white";
    passwordStrengthSpans[1].style.background = "#d13636";
  } else if(strength >= 2 && strength <= 4){
    passwordStrengthSpans[0].innerText = "Medium";
    passwordStrengthSpans[0].style.color = "white";
    passwordStrengthSpans[1].style.background = "#e6da44";
  } else {
    passwordStrengthSpans[0].innerText = "Strong";
    passwordStrengthSpans[0].style.color = "white";
    passwordStrengthSpans[1].style.background = "#20a820";
  }
});

function confirmPassword() {  
    var pw1 = document.getElementById("password").value;  
    var pw2 = document.getElementById("conpassword").value;  
    if(pw1 != pw2)  
    {   
    //   alert("Passwords did not match");  
document.getElementById("pass2").innerHTML="**Passwords do not match";
document.getElementById("pass2").style.color="yellow";
    } else {  
        document.getElementById("pass2").innerHTML="";
		return true;   
    } 
      }  

      const togglePassword = document.querySelector('#togglePassword');
      const password = document.querySelector('#conpassword');
      togglePassword.addEventListener('click', function (e) {
        // toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
        password.setAttribute('type', type);
        // toggle the eye / eye slash icon
        this.classList.toggle('bi-eye');
    });






      function phonenumber(inputtxt)
      {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if(inputtxt.value.match(phoneno))
           {
            document.getElementById("mob2").innerHTML="";
           return true;      
         }
         else
           {
          //  alert("Not a valid Phone Number");
          document.getElementById("mob2").innerHTML="**Please enter a valid phone number**";
          document.getElementById("mob2").style.color="yellow";
           return false;
           }
      }
      
	  function check()
{
	if(ValidateEmail(document.myForm.emailAddr) && CheckPassword(document.myForm.password)&&phonenumber(document.myForm.mobnumber)&&confirmPassword())
	{
		window.location = "login1.html";
	}
		else{
			
       alert("login failed");
		}


}
