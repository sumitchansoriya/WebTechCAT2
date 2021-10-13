function formValidation()
{
var uname = document.registration.name;
var uemail = document.registration.email;
var ubranch = document.registration.branch;
var ucollege = document.registration.college;
var uadd = document.registration.address;
var ustate = document.registration.state;
var uage = document.registration.age;
var ucontact = document.registration.contact;
var uid = document.registration.userid;
var upass = document.registration.passid;

if (uname.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }else{
			allLetter(uname)
		}

if (uemail.value == "") {
            window.alert(
              "Please enter the e-mail address.");
            email.focus();
            return false;
        }else{
			ValidateEmail(uemail)
		}
  
if (ubranch.selectedIndex < 1) {
            alert("Please enter your branch.");
            ubranch.focus();
            return false;
        } 
  
if (ucollege.value == "") {
            window.alert("Please enter your college/university.");
            ucollege.focus();
            return false;
        }
    
if (uadd.value == "") {
            window.alert("Please enter your address.");
            uadd.focus();
            return false;
        }
		
if (ustate.selectedIndex < 1) {
            alert("Please enter your state.");
            ustate.focus();
            return false;
        }  
		
if (ucontact.value == "") {
            window.alert(
              "Please enter your telephone number.");
            ucontact.focus();
            return false;
        }else{
			allnumeric(ucontact)
		}
  
if (uid.value == "") {
            window.alert("Please enter your Username");
            uid.focus();
            return false;
        }else{
			userid_validation(uid,5,12)
		}
		
if (upass.value == "") {
            window.alert("Please enter your password");
            upass.focus();
            return false;
        }else{
			passid_validation(passid,7,12)
		}
  
        return true;
    }
	
	
	
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}

function userid_validation(uid,mx,my)
{
var uid_len = uid.value.length;
if (uid_len == 0 || uid_len >= my || uid_len < mx)
{
alert("User Id should not be empty / length be between "+mx+" to "+my);
uid.focus();
return false;
}
return true;
}

function passid_validation(passid,mx,my)
{
var passid_len = passid.value.length;
if
 (passid_len == 0 ||passid_len >= my || passid_len < mx)
{
alert("Password should not be empty / length be between "+mx+" to "+my);
passid.focus();
return false;
}
return true;
}

}
function alphanumeric(uadd)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert('User address must have alphanumeric characters only');
uadd.focus();
return false;
}
}
/*
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
*/

function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
}
}

function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
} 
