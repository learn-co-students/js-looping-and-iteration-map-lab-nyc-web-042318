// Code your solution in this file.
function lowerCaseDrivers(list) {
  return list.map(function(name) {
    return name.toLowerCase();
  })
}

function nameToAttributes(list) {
  return list.map(function(name) {
    array = name.split(" ")
    return {firstName: array[0], lastName: array[1]}
  })
}

function attributesToPhrase(list) {
  return list.map(function(object) {
    return `${object.name} is from ${object.hometown}`
  })
}
