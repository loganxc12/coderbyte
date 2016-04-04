function ArrayAddition(arr) { 
    //Sort array, find largest num, find sum of adding up all
    //remaining numbers.
	arr = arr.sort(function(a,b) {return a-b});
	var largestNum = arr.pop();
	var sum = eval(arr.join('+'));
    //Basic checks before continuing.
	if (sum < largestNum) {
		return false;
	} else if (sum === largestNum) {
		return true;
	}
    //Loop through starting at beginning and end of sorted array
    //and check if subtracting any number in array from sum equals
    //largestNum.
	for (var i = 0; i < arr.length; i++) {
		if (sum - arr[i] === largestNum) {
			return true;
		}
	}
	for (var j = arr.length -1; i >= 0; i--) {
		if (sum - arr[j] === largestNum) {
			return true;
		}
	}
	return false;
         
}