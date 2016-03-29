function SimpleSymbols(str) {
//Check first and last characters
 if (str[0] !== '+' || str[str.length - 1] !== '+') {
   return false;
 }
//Loop through string, check for letter match, then (if match) check
//next and previous characters
 for (var i = 0; i < str.length; i++) {
   if (/[a-zA-Z]/.test(str[i])) {
     if (str[i - 1] !== '+' || str[i + 1] !== '+') {
       return false;
     }
   }
 }
 //Otherwise return true
 return true;

}

//**ALTERNATIVE SOLUTION**//
function SimpleSymbols(str) {
    //remove numbers and equals signs ('=') to leave only letters and plus signs ('+')
  	str = str.replace(/[0-9]/g, '')
  	str = str.replace(/[=]/g, '');
    //Check first and last characters
    if (str[0] !== '+' || str[str.length - 1] !== '+') {
        return false;
    }
    //Loop through, check for letter match (not a plus symbol), then check previous 
    //character and return false if not a plus symbol
  	for (var i = 0; i < str.length; i++) {
      if (str[i] !== '+' && str[i - 1] !== '+') {
        return false;
      }
    }
    //Otherwise return true
    return true;
}
