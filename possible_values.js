// Question:
// Given the following pseudo code, determine the range of possible values for “a”.
// x = random_int(1,6)
// y = random_int(1,6)
// z = random_int(1,6)
// a = x + y + z
// language of choice = javascript with jQuery

$("document").ready(function(){
	a = []
	for (var i=1; i<=6; i++) {
		for (var j=1; j<=6; j++) {
			for (var k=1; k<=6; k++) {
				a.push(i+j+k);
			}
		}
	}
	var rangeOfValues = jQuery.unique(a).join(", ");
  $("#values").append(rangeOfValues)
})
