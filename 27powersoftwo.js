function PowersofTwo(num) {
  //Initialize count variable at two.
	var count = 2;
  //Loop, multipy count by two, check equality with num.
	for (var i = 0; i < 1000; i++) {
		count *= 2;
		if (count === num) {
			return true;
		}
	}
    return false;
}

//Alternative solution
function PowersofTwo(num) {
  while (num > 1)  {
    if (num%2 !== 0) {
    return false;}
    num = Math.floor(num/2);
  }
  return true;
}
