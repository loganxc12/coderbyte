function LongestWord(sen) {
//Use regular expression to create array of words(excluding punctuation).
var wordsArray = sen.match(/[a-z0-9]+/gi);
//Sort words by length
var sorted = wordsArray.sort(function(a, b) {
    return b.length - a.length;
  });
//return word in first position
return sorted[0];
}
