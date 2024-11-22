let computer = {
    CPU : 12,
}

let lenovo = {
    screen : "HD",
    __proto__: computer
}

let HP = {}

// console.log(lenovo.__proto__);




let genericCar = { tyers : 4}

let tesla = {
    driver : "AI"
}

Object.setPrototypeOf(tesla,genericCar)
// console.log(tesla.tyers);

console.log(`tesla `, Object.getPrototypeOf(tesla));



// Using a Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Adding a method to the prototype
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
// Creating instances
const person1 = new Person('Vishal', 25);
const person2 = new Person('Aditi', 28);

person1.greet(); // Output: Hello, my name is Vishal and I am 25 years old.
person2.greet(); // Output: Hello, my name is Aditi and I am 28 years old.



// Using Classes (Syntactic Sugar)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Prototype method
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person11 = new Person('Vishal', 25);
const person22 = new Person('Aditi', 28);

person1.greet(); // Output: Hello, my name is Vishal and I am 25 years old.
person2.greet(); // Output: Hello, my name is Aditi and I am 28 years old.


// Prototypal Inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name); // Call parent constructor
}

// Inherit prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Override speak method
Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex');
dog.speak(); // Output: Rex barks.
