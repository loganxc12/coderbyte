//Solution could certainly be more concise, but this was my first attempt at 
//the problem (passed all tests).

function TripleDouble(num1,num2) { 

	var triples = [];
	var count = 1;
	var str1 = num1.toString();
	var currentNum = str1[0];
	
	//Check first number and push triples to array
	for (var i = 1; i < str1.length; i++) {
		if (str1[i] === currentNum && count >= 2) {
			count++;
			triples.push(str1[i]);
		} else if (str1[i] === currentNum) {
			count++;
		} else {
			currentNum = str1[i];
			count = 1;
		}
	}
	
	var doubles = [];
	var count2 = 1;
	var str2 = num2.toString();
	var currentNum2 = str2[0];

	//Check second number and push to doubles array
	for (var j = 1; j < str2.length; j++) {
		if (str2[j] === currentNum2 && count2 >= 1) {
			count2++;
			doubles.push(str2[j]);
		} else if (str2[j] === currentNum2) {
			count2++;
		} else {
			currentNum2 = str2[j];
			count2 = 1;
		}
	}
	
	var found = false;
	
	//Check for matches between two arrays
	triples.forEach(function(elem) {
		if (doubles.indexOf(elem) !== -1) {
			found = true;
		}
	});
	
	if (found) {
		return 1;
	} 
	return 0;
}