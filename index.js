// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    let lowerCasedDriversArray = [];

    for (const element of drivers) {
        lowerCasedDriversArray.push(element.toLowerCase())
    }
    return lowerCasedDriversArray;
}

function nameToAttributes(drivers) {
    let objectedArray = [];
    let fullName;

    for (const element of drivers) {
        fullName = element.split(" ");
        const obj = {firstName:fullName[0], lastName:fullName[1]};
        objectedArray.push(obj);
    }

    return objectedArray;
}

function attributesToPhrase(arr) {
    let objectedArr = [];

    for (const element of arr) {
        const str = element.name + " is from " + element.hometown;
        objectedArr.push(str);
    }

    return objectedArr;
}