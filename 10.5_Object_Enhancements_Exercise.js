console.log ("Exercise 10.5 here!");

//SAME KEYS AND VALUES
// function createInstructor(firstName, lastName){
//     return {
//       firstName: firstName,
//       lastName: lastName
//     }
//   }

//SAME KEYS AND VALUES ES2015 VERSION
function createInstructor (firstName, lastName) {
return {
    firstName,
    lastName
};
} 

//COMPUTED PROPERTY NAMES
var favoriteNumber = 42;
// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
// console.log(instructor[favoriteNumber]);

//COMPUTED PROPERTY NAMES ES 2015 VERSION
const instructor =  {
    firstName: "Colt",
    [42] : "That is my favorite!"
}

console.log(instructor[42]);

//OBJECT METHODS
// var instructor2a = {
//     firstName: "Colt",
//     sayHi: function(){
//       return "Hi!";
//     },
//     sayBye: function(){
//       return this.firstName + " says bye!";
//     }
//   }


//OBJECT METHODS ES2015 VERSION
let instructor2 = {
    firstName: "Colt",
    sayHi(){
        return "Hi!";
    },
    sayBye (){
        return this.firstName + " says bye!";
    } 
};

//CREATEANIMAL FUNCTION
const d = createAnimal ("dog", "bark", "Woooof!");
const s = createAnimal ("sheep", "bleet", "BAAAAaaaa");

function createAnimal (species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}