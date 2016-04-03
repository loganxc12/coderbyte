function HammingDistance(strArr) { 
    //Initialize count variable to zero to keep track of positions
    //where corresponding characters are different.
	var count = 0;
	//Loop over both elements, check if each position matches, increment
    //count by one if not.
	for (var i = 0; i < strArr[0].length; i++) {
		if (strArr[0][i] !== strArr[1][i]) {
			count += 1;
		}
	}
	return count;
}