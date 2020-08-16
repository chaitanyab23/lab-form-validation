// Progression 1
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
var button = document.getElementById("submit");

function checkUserName() {
  var username = document.getElementById("usertext").value;
  if (
    username == "" ||
    username.length > 15 ||
    username.length < 8 ||
    /^[a-zA-ZO-9]*$/.test(username)
  ) {
    document.getElementById("name_error").innerHTML += "<p>Wrong username</p>";
    return false;
  }
  for (let i = 0; i < username.length; i++) {
    if (String.indexOf[i] !== -1) {
      document.getElementById("name_error").innerHTML +=
        "<p>Wrong username</p>";
      return false;
    }
  }
}

// Progression 2
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
