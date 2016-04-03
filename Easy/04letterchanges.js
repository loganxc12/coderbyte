function LetterChanges(str) {
  //If 'z', replace with 'a', otherwise replace with next letter in alphabet using
  //fromCharCode() and ternary operation.
  var switched = str.replace(/[a-z]/gi, function(char) {
  	return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
  });
  //Capitalize vowels using replace method
  var caps = switched.replace(/a|e|i|o|u/gi, function(vowel){
    return vowel.toUpperCase();
  });

  return caps;

}
