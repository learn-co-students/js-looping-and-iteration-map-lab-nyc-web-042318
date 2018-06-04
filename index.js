// Code your solution in this file.

function lowerCaseDrivers(array) {
  let result = array.map(obj => obj.toLowerCase());
  return result;
}


function nameToAttributes(array) {
  let result = array.map(each => {
    let name = each.split(' ');
    let k = {};
    k["firstName"] = name[0];
    k["lastName"] = name[1];
    // debugger;
    return k;
  });
  return result;
};

function attributesToPhrase(drivers) {
  return drivers.map(each => {
    let r = `${each["name"]} is from ${each["hometown"]}`;
    // debugger;
    return r;
  });
};
