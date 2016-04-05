function FormattedDivision(num1,num2) { 
    //Assign the result of dividing to numbers and limiting decimals
    //to four places to result variable, split result number into array
    //of numbers, initialize decimal variable to hold digits after the
    //decimal place.
	var result = (num1/num2).toFixed(4);
	var resultArr = result.toString().split('');
	var decimal;
    //Check if decimal place, if so splice off digits after and assign
    //them to decimal variable.
	if (resultArr.indexOf('.') !== -1) {
		decimal = resultArr.splice(resultArr.indexOf('.'));
	}
    //Format digits in resultArr by adding commas.
    if (result >= 1000) {
        for (var i = resultArr.length - 3; i > 0; i -= 3) {
            resultArr.splice(i, 0, ",");
        }
    }
    //Re-join digits before and after decimal place and return.
    var output = resultArr.join('') + decimal.join('');
    return output;
}