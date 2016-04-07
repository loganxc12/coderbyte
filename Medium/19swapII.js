function SwapII(str) { 

	 var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	 var lowercase = 'abcdefghijklmnopqrstuvwxyz';
	 var result = [];
    
	 for (var i = 0; i < str.length; i++) {
	 	if (uppercase.indexOf(str[i]) !== -1) {
	 		result.push(str[i].toLowerCase());
	 	} else if (lowercase.indexOf(str[i]) !== -1) {
	 		result.push(str[i].toUpperCase());
	 	} else {
	 		result.push(str[i]);
	 	}
	 }
	 
	 result = result.join('');
	 
	 var numSeq = /[0-9][a-zA-Z]+[0-9]/g;
	 var numSwaps = result.match(numSeq);
	 
	 if (numSwaps !== null) {

	    for (var j = 0; j < numSwaps.length; j++) {
	      result = result.replace(numSwaps[j], numSwaps[j][numSwaps[j].length-1]+numSwaps[j].substr(1,numSwaps[j].length-2)+numSwaps[j][0]);
	    }
  	}
  	
  	return result;
         
}