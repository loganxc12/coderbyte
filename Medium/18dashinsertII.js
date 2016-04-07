function DashInsertII(num) { 
    
	num = num.toString().split('');

	for (var i = 0; i < num.length-1; i++) {
	
		if (num[i] % 2 !== 0 && num[i+1] % 2 !== 0) {
			num[i] = num[i] + '-';
		} else if (num[i] > 0 && num[i+1] > 0 && num[i] % 2 === 0 && num[i+1] % 2 === 0) {
			num[i] = num[i] + '*';
		}
	}
	
	return num.join('');
    
}