// Assignment Code
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']
var specialCharacters = ['!','@','#','$','%','^','&','(',')','_','+','"']

function userPaswordOptions(){
  // stores what the user chose for the length of there password
  var length = parseInt(
    prompt('How many characters do you want your password to contain?'),
    10
  )
  // this checks if the user inputs a number and if not it tells them to
  if (Number.isNaN(length)){
    alert('password length must be a number')
    return null
  }
  // the bottom 2 if statments define the min and max
  if (length < 8){
    alert ('pasword length must be at least 8 chatacters long')
    return null
  }

  if (length > 120){
    alert ('password must be less than 120 character long')
    return null
  }
  // these variables store the user inputs as boolean values
  var hasSpecial = confirm (
    'Cick OK if you want special characters'
  )
  var hasNumbers = confirm(
    'Click OK if you want numbers'
  )
  var hasLowerCase = confirm(
    'Click OK if you want lowercase letters'
  )
  var hasUpperCase = confirm(
    'Click OK if you want upper case letters'
  )
  // this if statment  stops the user from not picking any character types
  if (hasSpecial === false && hasNumbers === false && hasLowerCase === false && hasUpperCase === false) {
    alert ('You have to choose one character type!')
    return null
  }
  // this object stores all of the user inputs
  var passwordOptions = {
    length: length,
    hasSpecial: hasSpecial,
    hasNumbers: hasNumbers,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
  }

  return passwordOptions
}
// This fuction is for getting a random element from an array
function getRandom(arr){
  var randIndex = Math.floor(Math.random() * arr.length)
  var randElement = arr[randIndex]
  return randElement
}
// This actully generates the password
function generatePassword(){
  var options = userPaswordOptions ()
  // this variable stores the final password
  var result = []
  // this stores the types of character in the password 
  var possibleCharaters = []
  // this stores the chosen chracters in the password
  var guaranteedCharacter = []
  // this checks if the object options exists. if not it returns null
  if (!options) return null
  // these are some conditional statments thats add an array of there character type
  // then push new random characters to there chracther type
  if (options.hasSpecial){
    possibleCharaters = possibleCharaters.concat(specialCharacters)
    guaranteedCharacter.push(getRandom(specialCharacters))
  }
  if (options.hasNumbers){
    possibleCharaters = possibleCharaters.concat(numbers)
    guaranteedCharacter.push(getRandom(numbers))
  }
  if (options.hasLowerCase){
    possibleCharaters = possibleCharaters.concat(lowerCase)
    guaranteedCharacter.push(getRandom(lowerCase))
  }
  if (options.hasUpperCase){
    possibleCharaters = possibleCharaters.concat(upperCase)
    guaranteedCharacter.push(getRandom(upperCase))
  }
  // this for loop repeats over the length which it gets from the options variable. then randomizes from the array of possible characters then concats them
  for (let i = 0; i < options.length; i++){
    var possibleCharaters = getRandom(possibleCharaters)
    result.push(possibleCharaters)
  }
  // mix in at least one of each guarnteed charater in the result
  for (let i = 0; i < guaranteedCharacter.length; i++){
    result [i] = guaranteedCharacter[i]
  }
  // changes the final result to a string to pass on to the writePassword funtion
  return result.join('')
}

// get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
