function StringReduction(str) { 
    
    str = str.split('');
    //Checks if elements of an array are all the same.
    function notSame(arr) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[0] !== arr[j]) {
                return true;
            }
        }
        return false;
    }
    //Performs one iteration of 'reduction' while string does not 
    //contain all the same characters.
    while (notSame(str)) {
        for (var i = 0; i < str.length; i++) {
            if (str[i] + str[i+1] == "ab") {
                str.splice(i,2,"c");
            }
            if ((str[i] === "a") && (str[i+1] == "c")) {
                str.splice(0,2,"b");
            }
            if ((str[i] === "b") && (str[i+1] == "c")) {
                str.splice(i,2,"a");
            }
            if ((str[i] === "b") && (str[i+1] == "a")) {
                str.splice(i,2,"c");
            }
            if ((str[i] === "c") && (str[i+1] == "b")) {
                str.splice(i,2,"a");
            }
            if ((str[i] === "c") && (str[i+1] == "a")) {
                str.splice(i,2,"b");
            }
        }       
    }
    //Returns final length of reduced array.
  	return str.length;
}