var passwordUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var passwordLength = ["8", "9", "10", "11", "12",]

var passwordNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]

var passwordSpecialCharacters = ["@", "!", "#", "$", "%", "^", "&", "*",]

var passwordLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

// add the var = (array each other those characters.)
var megArray = []
var password = []
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
function generatePassword() {
  var passwordLength = prompt ("How long do you want your password?")
  var passwordSpecialCharacters = confirm ("Do you want special characters?")
  var passwordNumbers = confirm ("Do you want numbers?")
  var passwordUppercase = confirm ("Do you want uppercase characters?")
  var passwordLowercase = confirm ("Do you want lowercase characters?")

  
  let count = 0;
  
  if(userInfo.passwordUppercase){
  password= password + passwordUppercase[getRandomIntInclusive(0,passwordUppercase.length)]

  if(userInfo.passwordLowercase){
    password= password + passwordLowercase[getRandomIntInclusive(0,passwordLowercase.length)]
    count++;}
  if(userInfo.passwordNumbers){
      password= password + passwordNumbers[getRandomIntInclusive(0,passwordNumbers.length)]
      count++;}
  if(userInfo.passwordNumbers){
        password= password + passwordSpecialCharacters[getRandomIntInclusive(0,passwordSpecialCharacters.length)]
        count++;}
for (let i = 0; i < passwordLength-count; i++) {
  password= password + megArray[getRandomIntInclusive(0,megArray.length)]
}

console.log(password);
  return password;
}

  var userInfo = {
    passwordLength: passwordLength,
    passwordSpecialCharacters: passwordSpecialCharacters,
    passwordNumbers: passwordNumbers,
    passwordUppercase: passwordUppercase,
    passwordLowercase: passwordLowercase,
  }
  console.log(userInfo)


// make an array-multiple arrays for all of these options

if(userInfo.passwordUppercase) { 
  console.log(megArray)
  megArray = megArray + passwordUppercase
  console.log(megArray)
}

  if(userInfo.passwordLowercase) { 
    console.log(megArray)
    megArray = megArray + passwordLowercase
    console.log(megArray)
  }

    if(userInfo.passwordLength) { 
      console.log(megArray)
      megArray = megArray + passwordLength 
      console.log(megArray)
    }

      if(userInfo.passwordNumbers) { 
        console.log(megArray)
        megArray = megArray + passwordNumbers 
        console.log(megArray)
      }

        if(userInfo.passwordSpecialCharacters) { 
          console.log(megArray)
          megArray = megArray + passwordSpecialCharacters
          console.log(megArray)
        }

  // add an if statement for all of the arrays

  
  // return num1 + num2
  // console.log("after")
 

 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // console.log("jhtd")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// the user is going to click the generate password button - done
  // make button clickable done
    // addEventListener - done 
// after the user clicks the generate password button, the user is asked how long they want the password to be, 
  // prompt the user -DONE

// user will be asked if the password is going to include lowercase, uppercase characters, numbers, special characters, etc
  // confirm the user- yes or no - DONE

// after this happens, the user will see a length of characters matching their desire for password
  // develop 1.) develop password off of user's choices,(Finish on own) 
  // 2.) acceptable characters of what they said yes on. 
  // 3.) we need to randomly access those characters, 4.) develop as many characters as the user asked 5.) then we need to present the password to the user
    // a function is the tool that we need
