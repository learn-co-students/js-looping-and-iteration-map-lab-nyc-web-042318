// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (name) { return name.toLowerCase(); });
}

function nameToAttributes(array) {
  return array.map(function (name) { return Object.assign({}, {firstName: name.split(" ")[0]}, {lastName: name.split(" ")[1]})});
}

function attributesToPhrase(array) {
  return array.map(function (hash) { return `${hash['name']} is from ${hash['hometown']}`});
}
