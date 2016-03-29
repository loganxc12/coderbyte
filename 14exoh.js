function ExOh(str) {
  str = str.toLowerCase();
  var x = [];
  var o = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      x.push(str[i]);
    } else if (str[i] === 'o') {
      o.push(str[i]);
    }
  }
  if (x.length === o.length) {
    return true;
  } else {
    return false;
  }
}
