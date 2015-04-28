var ancestry = require("../05_higher_order/code/ancestry.js")

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

function age(p) { return p.died - p.born; }

// Get all the centuries and place into an array
// I feel like I can make the following three statements shorter
var theCenturies = []
ancestry.forEach(function(person){
  return theCenturies.push(Math.ceil(person.died / 100))
})

// Remove any duplicates, found on stackoverflow
// http://stackoverflow.com/questions/9229645/remove-duplicates-from-javascript-array
uniqueArray = theCenturies.filter(function(item, pos, self) {
    return self.indexOf(item) == pos;
})
uniqueArray = uniqueArray.sort(); // Sort the array

// Compute and log the average age of the centuries and output them
for (i=0; i<uniqueArray.length; i++){
  function century(p) { return Math.ceil(p.died / 100) == uniqueArray[i]}
    console.log(uniqueArray[i] + ": " + Math.round(average(ancestry.filter(century).map(age)) * 10) / 10)
}



