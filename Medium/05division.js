function Division(num1,num2) { 
    //Check which number is larger and assign that number to big variable.
	var big = num1 > num2 ? num1 : num2;
    //Loop starting at larger number and going down to 1, check if each number
    //divides into num1 and num2 with no remainder, return that number if so.
	for (var i = big; i > 0; i--) {
		if (num1 % i === 0 && num2 % i === 0) {
			return i;
		}
	}
         
}