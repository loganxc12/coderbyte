function LetterCount(str) {
    //Strip all punctuation and make string lowercase.
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
    //Split string into array of words and initialize empty results array
    //to be filled with objects later.
    var strArr = str.split(' ');
    var results = [];
    //Create function that counts frequency of letters and returns the 
    //number of repeated letters for that word.
    function getFrequency(str) {  
        var count = {};
        count.total = 1;
        str.split('').forEach(function(letter) {
            count[letter] ? count[letter]++ : count[letter] = 1;
            if (count[letter] > count.total) {
            	count.total = count[letter];
            }
        });
        return count.total;
    } 
    //Call above function on each word, push output (number of repeated)
    //letters into results array.
    for (var i = 0; i < strArr.length; i++) {
    	results.push(getFrequency(strArr[i]));
    }
    //Check if any word has repeating letters.
    var repeated = 1;
    for (var j = 0; j < results.length; j++) {
    	if (results[j] > repeated) {
    		repeated = results[j];
    	}
    }
    //If there are repeated letters, return the word at the index of the 
    //highest number in results array, otherwise return -1.
    if (repeated > 1) {
    	return strArr[results.indexOf(Math.max.apply(Math, results))];
    } else {
    	return -1;
    }
    
} 
