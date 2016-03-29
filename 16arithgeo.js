function ArithGeo(arr) {

  var diff = arr[1] - arr[0];
  var mult = arr[1] / arr[0];
  var arith = true,
      geo = true;

  //Check for arithmetic pattern
  for (var i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i-1]) !== diff) {
      arith = false;
  }
  if (arith) {
    return "Arithmetic";
  }

  //Check for geometric pattern
  for (var i = 2; i < arr.length; i++) {
    if ((arr[i] / arr[i-1]) !== mult) {
      geo = false;
    }
  }
  if (geo) {
    return "Geometric";
  } else {
    return "-1";
  }
}

}
