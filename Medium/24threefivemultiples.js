function ThreeFiveMultiples(num) { 
  	
  	if (num < 4) {
      return 0;
    } else if (num < 6) {
      return 3;
    }
	
	var multiplesOf3 = [];
	var multiplesOf5 = [];
    //Populate multiples arrays.
    for (var i = num - 1; i > 0; i--) {
        if (i % 5 === 0) {
			multiplesOf5.push(i);
		} else if (i % 3 === 0) {
			multiplesOf3.push(i);
		}
	}
    //Add up multiples.
    var threeSum = multiplesOf3.reduce(function(a,b) {
		return a + b;
	});
	var fiveSum = multiplesOf5.reduce(function(a,b) {
		return a + b;
	});
  
	return threeSum + fiveSum;
	
}

//Alternative (more elegant) solution

function ThreeFiveMultiples(num) { 
    var sum = 0;
    for (var i = 0; i < num; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;
        }
    } 
    return sum; 
}