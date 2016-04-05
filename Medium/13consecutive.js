function Consecutive(arr) { 
    //Store original array in numbers variable.
	var numbers = arr;
    //Sort array and grab largest and smallest numbers, initialize
    //count variable (to store missing digits) to zero.
	var largest = arr.sort(function(a,b){return a-b}).pop();
	var smallest = arr.shift();
	var count = 0;
    //Loop starting at smallest digit ( +1 ) and going up until largest 
    //digit, check if each digit exits in orignal array, increment count
    //if not.
	for (var i = smallest + 1; i < largest; i++) {
		if (numbers.indexOf(i) === -1) {
			console.log(i)
			count++;
		}
	}
	return count;
}