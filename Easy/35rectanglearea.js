function RectangleArea(strArr) { 
    //Turn array into string and remove parentheses and spaces so we only have 
    //a string of numbers.
	strArr = strArr.join('').replace(/[()' ']/g, '');
    //Define the x and y starting positions (two of the rectangles' corners) so
    //we're able to calculate the difference between loweset and highest values.
	var x = strArr[0], 
		y = strArr[1];
    //Define difference function to calculate difference between two numbers.
    var difference = function (a, b) { return Math.abs(a - b) }
    //Initialize variables to track the differences between x and y coordinates.
	var xdiff = 0, 
        ydiff = 0;
    //Loop through strArr...
	for (var i = 0; i < strArr.length; i++) {
        //Check if index plus one is odd (indicating an x coordinate) AND if the 
        //difference between that coordinate and the starting position is greater
        //than the current value of x diff. If so, set xdiff.
		if (((i + 1) % 2) !== 0 && (difference(x, strArr[i])) > xdiff) {
			xdiff = difference(x, strArr[i]);
		} 
        //Check if index plus one is even (indicating a y coordinate) AND if the 
        //difference between that coordinate and the starting position is greater
        //than the current value of y diff. If so, set ydiff.
        else if (((i + 1) % 2) === 0 && (difference(y, strArr[i])) > ydiff) {
			ydiff = difference(y, strArr[i]);
		} 
	}
    //Return ydiff * xdiff (height * width to calculate area).
  	return ydiff * xdiff;
}

//NOTE: This solution was incorrect in two cases, working on improving it.