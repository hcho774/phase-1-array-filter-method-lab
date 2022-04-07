// Code your solution here

/*

function findMatching(arr, str) {
    let matchedListOfDrivers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            matchedListOfDrivers.push(arr[i]);
        } else if (arr[i] === str.toLowerCase()) {
            matchedListOfDrivers.push(arr[i]);
        }
    }
    return matchedListOfDrivers;
} */

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, str) {
    return arr.filter(item => item === str || item.toLowerCase() === str.toLowerCase());
}


function fuzzyMatch(arr, str) {
    return arr.filter(item => item[0] === str[0]);
    }

function matchName(arr, str) {
    return arr.filter(item => item.name === str);
}

console.log(fuzzyMatch(drivers, "s"));


/*
function findMatching(drivers, string) {
    const whatever = drivers.filter(item => item.toUpperCase() === string.toUpperCase())
    return whatever;
};
function fuzzyMatch(drivers, string) {
    const whatever = drivers.filter(item  => item[0] === string[0])
    console.log(whatever);
    return whatever;
}
function matchName(drivers, string) {
    const whatever = drivers.filter(element => element.name === string)
    return whatever;
}
*/
/*
function findMatching(arr, str){
    let allUser = [];
    for (const user of arr){
        if (user === str) {
            allUser.push(user);
        } else if (user === str.toLowerCase()){
            allUser.push(user);
        }
    }
    return allUser;
}

fuzzyMatch(drivers, "Sa")

function fuzzyMatch(arr, str){
    
}

*/


