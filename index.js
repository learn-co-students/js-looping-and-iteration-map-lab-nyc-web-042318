// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(d){return d.toLowerCase();})
}

function nameToAttributes(drivers){
  return drivers.map(function(d){
    a = d.split(" ")
    return Object.assign({}, {firstName:a[0], lastName:a[1]})
  }
  )
}

function attributesToPhrase(drivers){
  a = drivers.map(function(d){
    return (`${d['name']} is from ${d['hometown']}`);
  }
  )
  return a;
}
