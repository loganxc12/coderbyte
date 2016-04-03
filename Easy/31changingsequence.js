//Initial stab at problem 

function ChangingSequence(arr) { 
    //Initialize trend variable, set to increasing or decreasing.
	var trend;
	if (arr[1] > arr[0]) {
		trend = 'increasing';
	} else if (arr[1] < arr[0]) {
		trend = 'decreasing';
	}
    //Initialize count variable to the value of the first element in the array,
    //check for pattern switch based on trend, return index of change (or '-1').
	var count = arr[0];
	if (trend === 'increasing') {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] < count) {
				return arr.indexOf(count);
			}
			count = arr[i];
		}
		return '-1';
	} else if (trend === 'decreasing') {
		for (var j = 0; j < arr.length; j++) {
			if (arr[j] > count) {
				return arr.indexOf(count);
			}
			count = arr[j];
		}
		return '-1';
	}
}

//Alternative (shorter) solution

function ChangingSequence(arr) { 
    //Set increasing variable to true/false.
    var increasing = arr[1] > arr[0] ? true : false;
    //Loop through array (starting at third position).
  	for (var i = 2; i < arr.length; i++) {
        //Set seq variable to true/false.
        var seq = arr[i] > arr[i - 1];
        //If seq not equal to increasing, sequence has changed, return index
        //of previous element.
        if (seq !== increasing) {
            return i - 1;
        }
    }
  return '-1'

}






