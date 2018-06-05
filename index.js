// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map(driver => {
    let driverFirstName = driver.split(" ")[0]
    let driverLastName = driver.split(" ")[1]

    return { firstName: driverFirstName, lastName: driverLastName };
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
