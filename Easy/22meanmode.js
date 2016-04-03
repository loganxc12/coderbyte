function MeanMode(arr) {

  	//Determine mean.
  	var mean = eval(arr.join('+')) / arr.length;

    //Determine mode.
    var modeMap = {};
    var mode = 0;
    var modeCount = 0;

    for (var i = 0; i < arr.length; i++) {
		//Check if key-value pair exists, increment by one if it does,
		//set it to one if it doesn't.
        if (modeMap[arr[i]]) {
            modeMap[arr[i]]++;
        } else {
            modeMap[arr[i]] = 1;
        }
        //Update counter variables.
        if (modeMap[arr[i]] > modeCount) {
            mode = arr[i];
            modeCount = modeMap[arr[i]];
        }
    }

    //Compare mean and mode
    if (mean === mode) {
        return 1;
    } else {
        return 0;
    }


}
