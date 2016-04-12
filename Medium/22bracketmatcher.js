function BracketMatcher(str) { 

	var left = 0;
	var right = 0; 
    //Tally up number of left and right facing brackets.
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			left++;
		} else if (str[i] === ')') {
			right++;
		}
	}
    //Compare values to determine match.
    if (left === right) {
    	return 1;
    }
    return 0;
    
}