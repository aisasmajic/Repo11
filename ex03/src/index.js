// Create a myPetsArraay array here
var myPetsArray = ["Dog", "Cat"];
// End of myPetsArray array
// Create a function below this line
function myArrayFunction(myPets){
    var myNewPets = myPets;
   myPets.push("Bird", "Fish");
   var firstPet = myNewPets.shift();
   var lastPet = myNewPets.pop();
   myNewPets.unshift("Lion");
   return myNewPets;
}
// End of creating a function
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;