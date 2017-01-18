// javascript 
function even_integer(num) {
  var count = 0;
  for (var i = 1; i <= num; i++) {
    !(i % 2) ? count++ : null
  }
  return count
}
even_integer(10)
