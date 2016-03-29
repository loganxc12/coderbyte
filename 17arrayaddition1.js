function ArrayAdditionI(arr) {
	//Determine largest number.
	var big = arr.sort(function (a, b) {
		return b - a;
	})[0];
	//Remove largest number from array.
	arr.splice(0, 1);
	//Add up all remaining numbers.
	var sum = eval(arr.join('+'));
	//Check if sum equals largest number.
	if (sum === big) {
		return true;
	}
	//Loop through array, subtract from sum, check largest number match.
	for (var i = 0; i < arr.length; i++) {
    	if (big === (sum - arr[i])) {
      		return true;
    	}
  }
 return false;
}
