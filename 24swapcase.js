function SwapCase(str) {
  //Create regular expressions for upper and lowercase letters, initialize newString variable.
  var up = /[A-Z]/;
  var down = /[a-z]/;
  var newString = '';
  //Loop through string, check for regex matches, add upper/lowercase/unchanged
  //characters to new string depending on result.
  for (var i = 0; i < str.length; i++) {
    if (up.test(str[i]) === true) {
       newString += str[i].toLowerCase();
    } else if (down.test(str[i]) === true) {
       newString += str[i].toUpperCase();
    } else {
       newString += str[i];
    }
  }
  //Return newString.
  return newString;

}
