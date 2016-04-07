function NumberSearch(str) { 

	var sum = eval(str.match(/[0-9]/g).join('+'));
	var letters = str.match(/[a-zA-z]/g).length;
	return Math.round(sum/letters);
	
}