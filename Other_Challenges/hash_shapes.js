//Having (nearly) completed all the easy and medium challenges, I've decided to tackle
//some other challenges not found on Coderbyte. This file deals with creating 'hashtag 
//shapes' using looping and other techniques.

//====GOAL SHAPE #1====

#
##
###
####
###
##
#

function sidewaysTriangle() {
	var num = 1;
	var shape = '';
	while (num < 5) {
		for (var i = 0; i < num; i++) {
			shape += '#';
		}
		shape += '\n';
		num++;
	}
	while (num > 0) {
		for (var j = 0; j < num; j++) {
			shape += '#';
		}
		shape += '\n';
		num--;
	}
	console.log(shape);
}


//====GOAL SHAPE #2====

########
 ######
  ####
   ##
   
function makeFunnel(num) {
	var shape = '';
	var spaces = ' ';
	for (var i = num; i > 0; i -= 2) {
		for (var j = 0; j < i; j++) {
			shape += '#';
		}
		shape += '\n' + spaces;
		spaces += ' ';
	}
	console.log(shape);
}

//====GOAL SHAPE #3====
##
  ####
 ######
########
########
 ######
  ####
   ##
 
function twoDown() {
	var shape = '';
	for (var i = 0; i < 2; i++) {
		shape += '#';
	}
	shape += '\n  ';
	var spaces = ' ';
	for (var j = 4; j <= 8; j += 2) {
		for (var k = 0; k < j; k++) {
			shape += '#';
		}
		shape += '\n' + spaces;
		spaces = '';
	}
	spaces = ' ';
	for (var l = 8; l > 0; l -= 2) {
		for (var m = 0; m < l; m++) {
			shape += '#';
		}
		shape += '\n' + spaces;
		spaces += ' ';
		
	}
	console.log(shape);
}

//====GOAL SHAPE #4====

#            #
 ##        ##
  ###    ###
   ########
   ########
  ###    ###
 ##        ##
#            #




