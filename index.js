// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (element) {return element.toLowerCase();})
}

function nameToAttributes(array) {
  return array.map(function(name) {
    let splitName = name.split(" ");
    newObj={};
    newObj['firstName'] = splitName[0];
    newObj['lastName'] = splitName[1];
    return newObj;
  })
}

function attributesToPhrase(array) {
  return array.map(function(driverObj) {
    return `${driverObj.name} is from ${driverObj.hometown}`;
  })
}
