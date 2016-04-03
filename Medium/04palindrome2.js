function PalindromeTwo(str) { 
    //Remove all punctuatin and spaces and make str lowercase.
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()' ']/g,"").toLowerCase();
    //Reverse string and assign result to backwards variable.
    var backwards = str.split('').reverse().join('');
    //Check equality, return true if match, otherwise return false.
    if (str === backwards) {
        return true;
    }  
    return false;
}