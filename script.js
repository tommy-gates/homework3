
var generateBtn = document.querySelector("#generate");


var response1 = prompt("Do you want numbers? please do not capitalize answers");
var response2 = prompt("Do you want special characters?");
var response3 = prompt("Do you want uppercase?");
var response4 = prompt("Do you want lowercase?");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

function generatePassword() {
  var length = 8;
  var string1 = "";
  var string2 = "";
  var string3 = "";
  var string4 = "";

      charset = "";
      retVal = "";
   if (response1 == "yes") {
      string1 = "0123456789";
   }
   else {
    string1;
   }
   if (response2 == "yes"){
     string2 = "!@#$%^&*()_+:?><.,/~";
   }
   else {
     string2;
   } 
   if (response3 == "yes"){
   string3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   }
   else {
     string3;
   }
   if (response4 == "yes"){
     string4 = "abcdefghijklmnopqrstuvwxyz";
   }
   else {
     string4;
   }
   charset = string1 + string2 + string3 + string4;
    for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;

}

generateBtn.addEventListener("click", writePassword);
