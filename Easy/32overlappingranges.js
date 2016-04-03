function OverlappingRanges(arr) { 
    //Define empty arrays to hold the two ranges, loop over arr and 
    //push values into range arrays.
	var range1 = [];
	var range2 = [];
	for (var i = arr[0]; i <= arr[1]; i++) {
		range1.push(i);
	}
	for (var j = arr[2]; j <= arr[3]; j++) {
		range2.push(j);
	}
    //Initialize count variable to zero, check which range is larger 
    //and assign that array to 'larger' variable (and vice versa).
	var count = 0;
	var larger = range1.length > range2.length ? range1 : range2;
	var smaller = range1.length < range2.length ? range1 : range2;
    //For each element in smaller array, check to see if there's an 
    //overlap with larger array. If so, increment count by one.
	smaller.forEach(function(elem) {
		if (larger.indexOf(elem) !== -1) {
			count += 1;
		}
	});
    //Check if count is greater than or equal to the fifth element in 
    //passed-in array, set result variable to true/false then return it.
	var result = count >= arr[4] ? true : false;
	return result;	
}