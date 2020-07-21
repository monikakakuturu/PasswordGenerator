var btn = document.querySelector(".btn");

// add event listener to the generate button
btn.addEventListener("click", GeneratePassword);

// prompts for user input and generate the password
function GeneratePassword() {
  var length = prompt("Enter the length of the password you want");

  //   password length should be from 8 to 128
  if (length >= 8 && length <= 128) {
    var useLower = confirm("Do you want to include lowercase letters?");
    var useUpper = confirm("Do you want to include uppercase letters?");
    var useNumbers = confirm("Do you want to include numbers?");
    var useSpecialChars = confirm("Do you want to include special characters?");

    // if user selects to include any one of the character type
    if (useLower || useUpper || useNumbers || useSpecialChars) {
      var passwd = "";
      var lowerChars = "abcdefghijklmnopqrstuvwxyz";
      var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numbers = "0123456789";
      var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

      // loop through the length reaches the user input length
      while (passwd.length < length) {
        if (useLower) {
          var c = Math.floor(Math.random() * lowerChars.length + 1);
          passwd += lowerChars.charAt(c);
        }

        if (useUpper && passwd.length < length) {
          var c = Math.floor(Math.random() * upperChars.length + 1);
          passwd += upperChars.charAt(c);
        }

        if (useNumbers && passwd.length < length) {
          var c = Math.floor(Math.random() * numbers.length + 1);
          passwd += numbers.charAt(c);
        }

        if (useSpecialChars && passwd.length < length) {
          var c = Math.floor(Math.random() * specialChars.length + 1);
          passwd += specialChars.charAt(c);
        }
      }
      // alert the newly generated password to the user
      alert("Your password is: " + passwd);
      document.getElementById("securepassword").placeholder = passwd;
    } else {
      alert("You must enter at least one character type to generate password");
    }
  } else if (length < 8 || length > 128) {
    alert("You must enter the length from 8 to 128");
  }
}
