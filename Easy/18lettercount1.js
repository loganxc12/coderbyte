function LetterCountI(str) { 
	
	var countArr = [];
	//Strip punctuation and split string into array.
	str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ');
	//Create object for each word with property for each letter and value for 
	//the # of times it has appeared.
	str.forEach(function(elem, index, array) {
		countArr.push({});
		for (var i = 0; i < elem.length; i++) {
			if (countArr[index][elem[i]]) {
				countArr[index][elem[i]]++;
			} else {
				countArr[index][elem[i]] = 1;
			}
		}
	});
	//Use 'map' to reduce objects down to highest count 
	var appearances = countArr.map(function(obj) {
		var count = 0; 
		for (var p in obj) {
			if (obj[p] > count) {
				count = obj[p];
			}
		}
		return count;
	});
	//Determine index of first word with most repeating letters.
	var finalCount = 0;
	var finalIndex = 0;
	appearances.forEach(function(elem, index, array) {
		if (elem > finalCount) {
			finalCount = elem;
			finalIndex = index;
		}
	});
	
	if (finalCount <= 1) {
		return -1;
	} else {
		return str[finalIndex];
	}
	
}



