function PrimeChecker(num) { 
	//Convert to array of numbers
  	num = num.toString().split('');
  	for (var i = 0; i < num.length; i++) { 
  		num[i] = +num[i]; 
  	} 

  	var permArr = [],
  	usedChars = [];

    function permute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
            ch = input.splice(i, 1)[0];
            usedChars.push(ch);
            if (input.length === 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, ch);
            usedChars.pop();
        }
        return permArr;
    }
  	
  	//Call permute function, convert result back into array of numbers.
  	var permutations = permute(num);
  	for (var j = 0; j < permutations.length; j++) {
  		permutations[j] = +permutations[j].join('');
  	}
  		
	//Loop through permutations array and check for primes.
	var primeFlags = [];
	permutations.forEach(function(element){
		for (var i = 2; i < element; i++) {
			if (element % i === 0) {
				primeFlags.push(false);
				return;
			}
		}
		primeFlags.push(true);
		return;
	});
	
	if (primeFlags.indexOf(true) !== -1) {
		return 1;
	} else {
		return 0;
	}
         
}