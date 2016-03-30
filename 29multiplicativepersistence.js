//Very similar to previous problem, almost identical answer with multiplication
//replacing addition.
function MultiplicativePersistence(num) {
  if (num < 10) {
  	return 0;
  }
  var count = 0;
  while (num > 0) {
  	num = eval(num.toString().split('').join('*'));
  	count += 1;
  	if (num < 10) {
  		return count;
  	}
  }
}
