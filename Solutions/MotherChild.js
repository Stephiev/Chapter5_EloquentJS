var ancestry = require("../05_higher_order/code/ancestry.js")

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Make a person's properties accessible by their name
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


// Sets up an array to put all the ages of the existing mothers
// at the age of child's birth
var ageArray = []

for (var person in byName) {
  var childBirthYear = byName[person].born
  var mother = byName[person].mother

  if (mother !== null && mother in byName) {
    var motherBirthYear = byName[mother].born
    var difference = childBirthYear - motherBirthYear
    ageArray.push(difference)
  }
}

console.log(average(ageArray))
