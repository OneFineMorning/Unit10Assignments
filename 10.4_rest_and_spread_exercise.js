//10.4 Rest/Spread Operator Exercises


//Given this function:
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//Refactor it to use the rest operator & an arrow function:
let  filterOutOdds = (...nums) => nums.filter ((ele) => ele % 2 === 0);

//find min
let findMin = (...args) => args.reduce ((a, b) => (a < b ? a : b));


//mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
let mergeObjects = (object1, object2) => ({...object1, ...object2});

// doubleAndReturnArg
let doubleAndReturnArgs = (arr, ...newElements) => [...arr, ...newElements.map ((val) => val *2)];


//Slice and Dice!
// let removeRandom = items => {
//     let index = Math.floor(Math.random() * items.length);
//     return [...items.slice(0, index), ...items.slice(index + 1)]; 
// }

const removeRandom = (...items) => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}


const combine = (obj1, obj2) => {
    return ({...obj1, ...obj2});
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}