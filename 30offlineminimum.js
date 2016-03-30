function OffLineMinimum(strArr) {

  var nums = [];
  var outputs = [];

  for (var i = 0; i < strArr.length; i++) {
    //Push all numbers into the nums array.
    if (strArr[i] !== 'E') {
      nums.push(parseInt(strArr[i]));
    }
    //Find smallest number (currently in nums array) and push
    //into outputs array.
    else {
      var smallest = Math.min.apply(null, nums);
      nums.splice(nums.indexOf(smallest), 1);
      outputs.push(smallest);
    }

  }
  //Format and return outputs.
  return outputs.join(',');

}
