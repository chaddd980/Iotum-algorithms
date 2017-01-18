// javascript
function removeDuplicate(array) {
  return array.filter(function(el, i, arr){
    return arr.indexOf(el) === i;
  });
}
removeDuplicate(['one', 'one', 'two', 'three', 'three', 'two'])
