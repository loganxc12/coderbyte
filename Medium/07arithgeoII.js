function ArithGeoII(arr) { 
    //Initialize variables to hold arithmetic/geometric ratios (so we're
    //able to check if they hold up throughout array).
    var diff = arr[1] - arr[0];
    var geo = arr[1]/arr[0];
    //Set 'flag' variables to result of calling below functions.
    var isArith = arithmetic(arr);
    var isGeo = geometric(arr);
    
    function arithmetic(arr) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] - arr[i-1] !== diff) {
                return false;
            }
        }
        return true;
    }
  
    function geometric(arr) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i]/arr[i-1] !== geo) {
                return false;
            }
        }
        return true;
    }
    
    if (isArith) {
        return 'Arithmetic';
    } else if (isGeo) {
        return 'Geometric';
    } else {
        return '-1';
    }
}