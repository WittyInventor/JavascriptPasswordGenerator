var passwordUpercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ]
var passwordLength = ["8", "9", "10", "11", "12",]

var passwordNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10",]

var passwordSpCharacters = ["@", "!", "#", "$", "%", "^", "&", "*",]

var passwordLowcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]

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
  
  if(passwordUppercase){
    password= password + passwordUpercase[getRandomIntInclusive(0,passwordUpercase.length)]
    megArray = megArray + passwordUpercase
    count++;}

  if(passwordLowercase){
    password= password + passwordLowcase[getRandomIntInclusive(0,passwordLowcase.length)]
    megArray = megArray + passwordLowcase
    count++;}

  if(passwordNumbers){
      password= password + passwordNum[getRandomIntInclusive(0,passwordNum.length)]
      megArray = megArray + passwordNum
      count++;}
  if(passwordSpecialCharacters){
        password= password + passwordSpCharacters[getRandomIntInclusive(0,passwordSpCharacters.length)]
        megArray = megArray + passwordSpCharacters
        count++;}
        //lsconst withoutCommas = megArray.join('')    
for (let i = 0; i < passwordLength-count; i++) {
  password= password + megArray[getRandomIntInclusive(0,megArray.length)]
}


console.log(count);
console.log(megArray);

  return (password);
}


  var userInfo = {
    passwordLength: passwordLength,
    passwordSpecialCharacters: passwordSpCharacters,
    passwordNumbers: passwordNum,
    passwordUppercase: passwordUpercase,
    passwordLowercase: passwordLowcase,
  }
  console.log(userInfo)


// make an array-multiple arrays for all of these options

if(userInfo.passwordUppercase) { 
  console.log(megArray)
//megArray = megArray + passwordUpercase
  console.log(megArray)
}

  if(userInfo.passwordLowercase) { 
    console.log(megArray)
    //megArray = megArray + passwordLowcase
    console.log(megArray)
  }

    if(userInfo.passwordLength) { 
      console.log(megArray)
      //megArray = megArray + passwordLength 
      console.log(megArray)
    }

      if(userInfo.passwordNumbers) { 
        console.log(megArray)
        //megArray = megArray + passwordNum 
        console.log(megArray)
      }

        if(userInfo.passwordSpecialCharacters) { 
          console.log(megArray)
          //megArray = megArray + passwordSpCharacters
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
