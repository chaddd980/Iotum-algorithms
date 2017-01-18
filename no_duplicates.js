// Question:
// Given: words = ['one', 'one', 'two', 'three', 'three', 'two']
// Remove the duplicates.
// Language of choice = javascript

function removeDuplicate(array) {
  return array.filter(function(el, i, arr){
    return arr.indexOf(el) === i;
  });
}
console.log(removeDuplicate(['one', 'one', 'two', 'three', 'three', 'two']))
