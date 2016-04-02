function BitwiseOne(strArr) {
    //Initalize result variable as empty string.
	var result = '';
    //Loop through both passed-in strings, check if characters at each
    //index are equal to '0'. If so add a '0' to result, otherwise add 
    //a '1'.
	for (var i = 0; i < strArr[0].length; i++) {
		if (strArr[0][i] === '0' && strArr[1][i] === '0') {
			result += '0';
		} else {
			result += '1';
		}
	}
    //Return result variable.
	return result;
}