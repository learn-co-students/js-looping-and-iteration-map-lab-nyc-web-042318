function lowerCaseDrivers(array) {
  return array.map(function (element) { return element.toLowerCase(); });
}

function nameToAttributes(array) {
  return array.map(function (element) {
    const names = element.split(' ');
    return Object.assign({}, { firstName: names[0], lastName: names[1] });
  });
}

function attributesToPhrase(array) {
  return array.map(function (element) { return `${element.name} is from ${element.hometown}` });
}
