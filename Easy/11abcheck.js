//Initial stab at problem
function ABCheck(str) {
	str = str.replace(' ', '').toLowerCase();
	for (var i = 0; i < str.length; i++) {
		if (str[i] === 'a') {
			if (str[i-3] === 'b' || str[i+3] === 'b') {
				return true;
			}
		} else if (str[i] === 'b') {
			if (str[i-3] === 'a' || str[i+3] === 'a') {
				return true;
			}
		}
	}
	return false;
}

//Simpler solution
function ABCheck(str) {
  str = str.toLowerCase();
	for (var i = 0; i < str.length; i++) {
      if (str[i] === 'a' && str[i+4] === 'b') {
        return true;
      } else if (str[i] === 'b' && str[i+4] === 'a') {
        return true;
      }
  }
  return false;
}
