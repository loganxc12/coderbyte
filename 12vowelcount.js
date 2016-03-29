function VowelCount(str) {

  var str = str.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {
      count = count + 1
    }

  }

  return count;

}

//SIMPLER SOLUTION USING REGEX MATCH

function VowelCount(str) {
	str = str.toLowerCase();
	var matches = str.match(/[aeiou]/g);
	return matches.length;
}
