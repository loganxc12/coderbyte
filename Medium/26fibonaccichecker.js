//Initial stab at problem, not optimal because it relies on populating a predetermined 
//number of fibonacci numbers. Working on a recursive solution...

function FibonacciChecker(num) {
	
    var fib = [];
    var a = 0; 
    var b = 1;
    var result = b;
    for (var i = 1; i < 1000; i++) {
        fib.push(result);
        result = a + b;
        a = b;
        b = result;
    }
    if (fib.indexOf(num) !== -1) {
    	return 'yes';
    }
    return 'no';
    
}