function StringScramble(str1,str2) { 
    //Split both strings into arrays of letters.
	str1 = str1.split('')
	str2 = str2.split('');
    //Initialze 'scramble' variable to true, this will keep track of
    //whether or not a portion of str1 characters can be rearranged 
    //to match str2.
	var scramble = true
    //For each element/letter in str2, check if that letter is present
    //in str1. If not, set scramble variable to false.
	str2.forEach(function(elem) {
		if (str1.indexOf(elem) === -1) {
			scramble = false;
		}
	})
	return scramble;
}

//Even simpler solution (removed unnecessary steps)

function StringScramble(str1,str2) { 

    for (var i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            return false;
        }
    }
  
    return true;
         
}