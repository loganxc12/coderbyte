function DivisionStringified(num1,num2) {
	//Determine result of division and, if less than 1000, return it.
	var result = Math.round(num1/num2);
	if (result < 1000) {
		return result.toString();
	}
	//Split result into an array of numbers.
	var nums = result.toString().split('');
	//Loop through starting at the third to last character and decrementing by THREE.
	for (var i = nums.length - 3; i > 0; i -= 3) {
		//Insert a comma using 'splice'.
		nums.splice(i, 0, ",");
	}
	//Turn array of numbers back into string and return it.
    return nums.join('');
}

//Better solution using best practices
function DivisionStringified(num1, num2) {

    var result = Math.round(num1 / num2).toString(),
        resultArr = result.split("");

    if (result >= 1000) {
        for (var i = result.length - 3; i > 0; i -= 3) {
            resultArr.splice(i, 0, ",");
        }
    }

    return resultArr.join("");
}
