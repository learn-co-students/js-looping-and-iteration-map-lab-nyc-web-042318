// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const map1 = drivers.map(x => x.toLowerCase());
  return map1;
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    new_object = {}
    object = driver.split(" ");
    new_object["firstName"] = object[0];
    new_object["lastName"] = object[1];
    return new_object;
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  })
}
