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
even_integer(10)
