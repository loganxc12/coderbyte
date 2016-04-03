function RunLength(str) { 
  //Initialize variables currentLetter(set to the first letter in the
  //passed-in string), count (set to one), and resultStr.
  var currentLetter = str[0];
  var count = 1;
  var resultStr = '';
  //Starting at one, loop through str and check if each letter matches 
  //currentLetter. If so, increment count by one. If not, add the current 
  //value of count and the current letter to resultStr, reset count to 1,
  //set currentLetter to next character in string.
  for (var i = 1; i <= str.length; i++) {
  	if (str[i] === currentLetter) {
  		count += 1;
  	} else {
  		resultStr += count + currentLetter;
  		count = 1;
  		currentLetter = str[i];
  	}
  }
  
  return resultStr;
         
}