function DashInsert(str) {
  //Convert str into array of numbers.
  var arr = str.split('');
  //Loop through numbers (excluding the last number)
  for (var i = 0; i < str.length-1; i++) {
    //Check if current number and next number are odd.
    if (arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      //If so, insert dash.
      arr[i] = arr[i] + '-';
    }
  }
  //Convert array back into string and return it.
  return arr.join('');

}
