// Question:
// Write a function that determines the number of even numbers that appear in a
// range of integers 0..n, where n is supplied as the sole argument to your function.
// Language of choice = javascript

function even_integer(num) {
  var count = 0;
  for (var i = 1; i <= num; i++) {
    !(i % 2) ? count++ : null
  }
  return count
}

// test

function test(integer, expected) {
  results.total++;
  var result = even_integer(integer);
  if (result !== expected) {
    results.bad++;
    console.log("For even_integer(" + integer + "\), expected " + expected + ", but was " + result)
  }
}
var results = {
  total: 0,
  bad: 0
}

test(10, 5);
test(2, 1);
test(17, 8);
console.log("Of " + results.total + " tests " + results.bad + " failed, "
+ (results.total - results.bad) + " passed.")
