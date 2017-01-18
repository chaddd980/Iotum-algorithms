// Question:
// Given the following pseudo code, determine the range of possible values for “a”.
// language of choice = javascript with jQuery

a = []
for (var i=1; i<=6; i++) {
	for (var j=1; j<=6; j++) {
		for (var k=1; k<=6; k++) {
			a.push(i+j+k);
		}
	}
}
var totalSumsWithRepeat = a.length
var totalSumsNoRepeat = jQuery.unique(a).length
