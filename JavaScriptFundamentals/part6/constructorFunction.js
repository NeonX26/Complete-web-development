function Person(name, age) {
    this.name = name
    this.age = age
}

function Car(make,model) {
    this.make = make
    this.model = model
}

let myCar = new Car("Toyota", "Camry")
// console.log(myCar);

let myNewCar = new Car("Honda", "Civic")
// console.log(myNewCar);


function Tea(typeOfTea) {
    this.typeOfTea = typeOfTea
    this.describe = ()=> `This is a cup of ${this.typeOfTea}`
}

let myTea = new Tea("Earl Grey")
// console.log(myTea.describe());



function Animal(species) {
    this.species = species
}
Animal.prototype.sound = function () {
    return `The ${this.species} makes a sound`
}
let Dog = new Animal("Dog")
console.log(Dog.sound());

let Cat = new Animal("Cat")
console.log(Cat.sound());
console.log(Cat.species);



// If user creating a object without new keyword
function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}

let newDrink = Drink("Chola")
console.log(newDrink.name);
