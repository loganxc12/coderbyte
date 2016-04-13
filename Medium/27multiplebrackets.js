//Very similar to previous 'bracket matcher' problem, solution nearly identical
//while accounting for multiple kinds of brackets.

function MultipleBrackets(str) { 

	var leftP, rightP, leftB, rightB; 
    
	leftP = 0;
	rightP = 0; 
	
    //Tally up number of parens.
	for (var i = 0; i < str.length; i++) {
		if (str[i] === '(') {
			leftP++;
		} else if (str[i] === ')') {
			rightP++;
		}
	}
	
	leftB = 0;
	rightB = 0;
    
    //Tally up number of brackets.
	for (var j = 0; j < str.length; j++) {
		if (str[j] === '[') {
			leftB++;
		} else if (str[j] === ']') {
			rightB++;
		}
	}
    
	//Check equality.
	if (leftP === rightP && leftB === rightB) {
		return 1 + " " + (leftP + leftB);
	}
	
	return 0;
}
   