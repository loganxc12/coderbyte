function Superincreasing(arr) { 
    //Initialize count variable and set it equal to the first
    //element in the passed-in array.
    var count = arr[0];
    //Loop over array (starting at second element), add each element to
    //count, check if any element is less then count, return false if so.
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < count) {
            return false;
        }
        count += arr[i];
    }
    //Otherwise return true.
    return true;        
}