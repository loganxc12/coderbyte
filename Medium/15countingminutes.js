//Initial stab at problem (room for improvement but all test case
//outputs were correct)

function CountingMinutes(str) { 
	//Split string into two times.
	str = str.split('-');
    //Extract minutes for each time and assign to 'min' variables.
	var timeOneMin = Number(str[0].split(':')[1].replace(/am|pm/g, ''));
	var timeTwoMin = Number(str[1].split(':')[1].replace(/am|pm/g, ''));
    //Loop over times and convert pm times past 12pm to 24 hour clock
    //format. Convert 12am to 0.
	for (var i = 0; i < str.length; i++) {
		if (str[i].indexOf('pm') !== -1 && str[i].indexOf('12') === -1) {
			str[i] = Number(str[i].split(':')[0]) + 12;
		} else if (str[i].indexOf('am') !== -1 && str[i].indexOf('12') !== -1) {
			str[1] = 0;
		} else {
			str[i] = Number(str[i].split(':')[0]);
		}
	}
	//Extract hours and assign to variables.
	var timeOne = str[0];
	var timeTwo = str[1];
	//Calculate final hour difference and final minute difference between times.
	var hoursResult = timeOne > timeTwo ? ((24-timeOne) + timeTwo) * 60 : (timeTwo-timeOne) * 60;
	var minutesResult = timeTwoMin - timeOneMin;
	//Add hours and minutes together.
	var result = hoursResult + minutesResult;
    //Check if result is less than zero. If so, return 1440 (total hours in day) + result. 
    //Otherwise return result.
	if (result < 0) {
		return 1440 + result;
	} else {
		return result;
	}

}