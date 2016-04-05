//Initial stab at problem (not right in all instances because it 
//doesn't account for crossing 'end' of alphabet).

function CaesarCipher(str,num) { 
    var resultStr = '';
        for (var i = 0; i < str.length; i++) {
	       if (/[a-zA-Z]/.test(str[i])) {
		      resultStr += String.fromCharCode(str[i].charCodeAt() + num);
	       } else {
		      resultStr += str[i];
	       }
        }
    return resultStr;
}

//Alternative (working) solution.

function CaesarCipher(str,num) {
    
    var strArr = str.split('');
    //Use map to call below funciton on each character in strArr and then turn it 
    //back into a string.
    var result = strArr.map(function(char) { return shiftChar(char, num); }).join('');
    //This function applies tests to each letter in string, first checking if the 
    //character is a letter and, if so, using that letters 'character code' to set
    //shift its value by the value of num. If this shifted value is greater than 'Z' 
    //(if it has crossed the end of the alphabet), subtract 26.
    function shiftChar(char, offset){
        var letterTest = /[A-z]/;
        if (letterTest.test(char)){
            char = String.fromCharCode(char.charCodeAt(0) + offset);
            if (char > 'Z' && char < 'a' || char > 'z')
            char = String.fromCharCode(char.charCodeAt(0) - 26);
        }
        return char;
    }
    
    return result;
}