function AdditivePersistence(num) {
  //Check if num is already a single digit and return 0 if so.
  if (num < 10) {
    return 0;
  }
  //Initialize count variable at 0.
  var count = 0;
  //While num > 0, loop through and add all remaining digits together,
  //setting the new value of num to that resultant sum. Also incriment
  //count by one each time.
  while (num > 0) {
  	num = eval(num.toString().split('').join('+'));
  	count += 1;
    //If num is a single digit, return count.
  	if (num < 10) {
  		return count;
  	}
  }
}
