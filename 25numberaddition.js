function NumberAddition(str) {
  //Create regular expression to extract numbers.
  var rex = /\d+/g;
  //Use match method to create array of numbers.
  var nums = str.match(rex);
  //Add numbers togather and return them.
  return eval(nums.join('+'));
}
