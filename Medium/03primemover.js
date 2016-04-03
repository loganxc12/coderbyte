//Initial stab at problem

function PrimeMover(num) { 
    //Initalize array to hold prime numbers (pre-populated with first 2).
    var primes = [2,3];
    //Create function to check whether a number is prime and add that 
    //number to a provided array if so.
    function checkPrime (num, resultArr) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return;
            }
        }
        resultArr.push(num);
    }
    //Populate primes array with primes from 0 - 10^4.
    for (var i = 4; i < 10000; i++) {
        checkPrime(i, primes);
    }
    
    return primes[num - 1];

}

//Alternative (better) solution

function PrimeMover(num) {
    //Create function that returns true if passed-in number is prime, 
    //false if not.
    var checkPrime = function(num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    //Initialize array to hold prime numbers and variable to keep track
    //of the current number (see below).
    var primes = [];
    var currentNum = 2;
    //While the length of the primes array is less than the num arguement,
    //(while we haven't reached that prime number yet), check each number 
    //with checkPrime function and pass it into primes array. When length
    //of primes array equals num, pop off and return last element.
    while (prime.length < num) {
        if (checkPrime(currentNum)) {
            primes.push(currentNum);
        }
        currentNum++;
    }
    return primeArr.pop();
}


