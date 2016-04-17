function PermutationStep(num) { 
    
	num = num.toString().split('');
    //Generate array of all possible permutations.
	var results = num.reduce(function permute(res, item, key, arr) {
    return res.concat(arr.length > 1 && arr.slice(0, key).concat(arr.slice(key + 1)).reduce(permute, []).map(function(perm) { return [item].concat(perm); }) || item);
}, []);
    //Convert array of arrays into array of Numbers.
	var resultNums = results.map(function(elem) {
		return Number(elem.join('').toString());
	});
    //Find next greatest number by starting at highest number and checking if each
    //number is less than highest and more than original.
	var nextGreatest = resultNums.sort(function(a,b){return b-a})[0];
	var startNum = num.join('');
	for (var i = 0; i < resultNums.length; i++) {
		if (resultNums[i] > startNum && resultNums[i] < nextGreatest) {
			nextGreatest = resultNums[i];
		}
	}
  	if (nextGreatest <= startNum) {
      return -1;
    } else {
		return nextGreatest;
    }
}