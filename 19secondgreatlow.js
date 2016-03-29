function SecondGreatLow(arr) {

	//Sort values and remove duplicates.
	var sort = arr.slice().sort(function(a,b){return a > b}).reduce(function(a,b){if (a.slice(-1)[0] !== b) a.push(b);return a;},[]);
  //Define return values based on array length.
	if (sort.length > 2) {
		return sort[1] + ' ' + sort[sort.length - 2];
	} else {
		return sort[1] + ' ' + sort[0];
	}


}
