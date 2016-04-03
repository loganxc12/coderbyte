function PrimeTime(num) { 
  //Starting at two (avoiding one because every number is divisible by one),
  //and going up until num (but not including num), loop through and check
  //divisibility of all lower digits. If any digit divides cleanly (with no 
  //remainder), num is not prime - return false. Otherwise num is prime - 
  //return true.
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
         
}