//Longest solution yet, not particularly elegant (lots of looping) but all test cases
//were correct. Working on refining solution...

function MostFreeTime(strArr) { 

	var minObj = [];
	//Create array of objects holding start and end minutes.
	for (var i = 0; i < strArr.length; i++) {
		strArr[i] = strArr[i].split('-');
		minObj.push({
			startMin: Number(strArr[i][0].split(':')[1].replace(/AM|PM/g, '')),
			endMin: Number(strArr[i][1].split(':')[1].replace(/AM|PM/g, ''))		
		});
	}
	
	//Create array of objects holding start and end hours formatted in 24 hour time.
	var hourObj = [];
	for (var j = 0; j < strArr.length; j++) {
		//Format times in 24 hour format
		strArr[j].forEach(function(element, index, array) {
			if (element.indexOf('PM') !== -1 && element.indexOf('12') === -1) {
				array[index] = Number(element.split(':')[0]) + 12;
			} else if (element.indexOf('AM') !== -1 && element.indexOf('12') !== -1) {
				array[index] = 0;
			} else {
				array[index] = Number(element.split(':')[0]);
			}
		})
		//push formatted times into object.
		hourObj.push({
			startHr: strArr[j][0],
			endHr: strArr[j][1]
		})
	}
	//Format times into total mintes
	var formattedTimes = [];
	for (var k = 0; k < strArr.length; k++) {
		formattedTimes.push({
			start: (hourObj[k].startHr * 60) + minObj[k].startMin, 
			end: (hourObj[k].endHr * 60) + minObj[k].endMin
			});
	}
	//Sort in ascending order
	formattedTimes.sort(function(a, b) {return a.start - b.start});
	
	//Calculate longest gap
	var gap = 0;
	for (var l = 1; l < formattedTimes.length; l++) {
		if ((formattedTimes[l].start - formattedTimes[l-1].end) > gap) {
			gap = formattedTimes[l].start - formattedTimes[l-1].end;
		}
	}
	
	//format and return gap value
	var gapHr = Math.floor(gap/60);
	var gapMin = gap % 60;
		console.log(gapHr, gapMin);

	if (gapMin < 10) {
		gapMin = '0' + gapMin;
	} 
	
	if (gapHr < 10) {
		gapHr = '0' + gapHr;
	}
	
	return gapHr + ':' + gapMin;
}