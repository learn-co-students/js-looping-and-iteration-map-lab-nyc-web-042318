// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newArray = array.map(function (element) { return element.toLowerCase()})
  return newArray;
}

function nameToAttributes(array) {
  newArray = []
  array.map(function (element) {
    debugger;
    newArray.push({firstName: splitName(element)[0], lastName: splitName(element)[1]})
  })
  return newArray
}

function splitName(name) {
  return name.split(' ');
}

function attributesToPhrase(array) {
  const newArray = array.map(function (element) { return `${element['name']} is from ${element['hometown']}`})
  return newArray;
}
