function ThirdGreatest(strArr) {
//Sort array of strings by length (largest first)
strArr.sort(function(a, b){
  return b.length - a.length;
});
//Return the third element
return strArr[2];

}
