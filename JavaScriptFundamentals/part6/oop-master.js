let car = {
    make : "toyota",
    model : "camry",
    year : 2000,
    start : function (){
        return ` ${this.make} car got started in ${this.year}`
    },
};
// console.log(car.start());


function Person(name,age) {
    this.name = name
    this.age = age
}
let vishal = new Person("Vishal",23)
// console.log(`Hello ${vishal.name}, I think your age is ${vishal.age}`);


function Animal(type){
    this.type = type
}

Animal.prototype.speak = function() {
    return `${this.type} make a sound`
}

Array.prototype.vishal = function (){
    return `Custom method ${this}`
}
let myArray = [1,2,3]
// console.log(myArray.vishal());

let mynewArray = [4,5,6]
// console.log(mynewArray.vishal());


// class
class Vehicle{
    constructor(make,model){
        this.make = make
        this.model = model 
    }
    start(){
        return `${this.model} is car from ${this.make} `
    }
}

class Car extends Vehicle{
    drive(){
        return `${this.make}  :  This is an inheritance Ex`
    }
}

let myCar = new Car("Toyota","Corolla")
// console.log(myCar.start());
// console.log(myCar.drive());



// Encapsulation
class BankAccount {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance())


//Abstraction 
class CoffeeMachine{
    start(){
        // call Db
        // call API
        return `starting the machine....`
    }
    brewCoffee(){
        // call Db
        // call API
        return `And Brewing coffee`
    }
    pressStartButton(){
        let result1 = this.start()
        let result2 = this.brewCoffee()
        return `${result1} ${result2}`
    }
}

let coffeeMachine = new CoffeeMachine()
// console.log(coffeeMachine.pressStartButton())


// Polymorphism
class Bird{
    fly(){
        return "flying..."
    }
}

class Penguin extends Bird{
    fly(){
        return "It cant fly"
    }
}

let bird = new Bird()
let penguin = new Penguin()
// console.log(bird.fly())
// console.log(penguin.fly())


// static method
class Calculator{
    static add (a,b){
        return a + b
    }
}

// let miniCal = new Calculator()
// console.log(miniCal.add(5,5))

// console.log(Calculator.add(3,5))



// Getter and setters
class Employee{
    #salary;
    constructor(name, salary){
        if (salary < 0){
            throw new Error("Salary cannot be negative")
        }else{
        this._name = name
        this.#salary = salary
        }
    }
    get salary(){
        return `not sharing salary`
    }
    set salary(newSalary){
        if(newSalary < 0){
            console.log("Invalid Salary");
        }
        else{
            this._salary = newSalary;
        }
    }
}
let emp = new Employee("VJ",-10)
console.log(emp._salary)
emp.salary = 6000