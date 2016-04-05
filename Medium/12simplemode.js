function SimpleMode(arr) {
    //Initialze empty map object (to store number count properties).
    var map = {};
    var mode = 0;
    var highestFreq = 0;
    //Loop over array and add/add to number properties based on whether or
    //not they've appeared.
    for (var i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]]++;
        } else {
            map[arr[i]] = 1;
        }
    }
    //Loop over array again, set highestFreq and mode variables based on the
    //order elements appear in original array.
    for (var j = 0; j < arr.length; j++) {
        if (map[arr[j]] > highestFreq) {
            highestFreq = map[arr[j]];
            mode = arr[j];
        }
    }
    
    if (highestFreq !== 1) {
        return mode;
    } else {
        return -1;
    }
    
}