// Solution to Chapter 5 Exercise "Every and Then Some"

// Function that returns true when every element
// of an array passes a test
function every(array, test){
  for (var i = 0; i < array.length; i++) {
    if (!test(array[i])){
       return false
    }
  }
  return true
}

// Function that returns true when any element in
// an array passes a test
function some(array, test){
  for (var i = 0; i < array.length; i++) {
    if (test(array[i])){
      return true
    }
  }
  return false
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false

console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
