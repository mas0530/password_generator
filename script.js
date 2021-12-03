var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
};


var passwordChar = "";

function generatePassword() {

  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

    function generatePassword() {
      var passLength = window.prompt("How long would you like your password to be? Pick a number between 8 and 128.");
    };

      while (passLength < 8 || passLength > 128) {
        alert("HELLO! Please select a number between 8 and 128.");
        passLength = window.prompt("Pick a number between 8 and 128.");
      };

      var lowerCase = window.confirm("Do you want lowercase letters in your password?");
      if (lowerCase === true) {
        passwordChar += lowerCase;
        passwordChars += lowerCase;
      };

      var upperCase = window.confirm("Do you want capital letters in your password?");
      if (upperCase === true) {
        passwordChar += upperCase;
        passwordChars += upperCase;
      };

      var numSet = window.confirm("Do you want numbers in your password?");
      if (numSet === true) {
        passwordChar += numberChar;
        passwordChars += numberChar;
      };

      var specChar = window.confirm("Do you want special characters in your password?");
      if (specChar === true) {
        passwordChar += specialChar;
        passwordChars += specialChar;
      };

      for (var i = 0; i < passLength; i++) {
        password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
        password += passwordChars[Math.floor(Math.random() * passwordChars.length)]
      }

      return password;
    }
  }

  console.log(password)
  console.log(passwordChar)

  generateBtn.addEventListener("click", writePassword);