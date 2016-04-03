function Palindrome(str) {
	str = str.replace(/\s/g, '');
	var reversed = [];
	for (var i = str.length - 1; i >= 0; i--) {
		reversed.push(str[i]);
	}
	if (reversed.join('') === str) {
		return true;
	}
	return false;
}

//Alternative solution
function Palindrome(str) {
  str = str.replace(/\s/g, '');
  var rev = str.split('').reverse().join('');
  if (rev === str) {
    return true;
  } else {
    return false;
  }
}
