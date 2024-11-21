function greet(name){
    console.log(`Hello ${name}`)
}
// greet("Vishal")


function orderTea(teaType, sugar, milk){
    function ConfirmOrder() {
        return `Order received for ${teaType} with ${sugar} sugar and ${milk} milk`
    }
    return ConfirmOrder()
}
// console.log(orderTea("Green Tea", 2, "Full"))



// arrow functions
const greetArrow = (name) => {
    console.log(`Hello ${name}`)
}
// greetArrow("Vishal")


const greetArrow2 = name => `Hello ${name}`;
// console.log(greetArrow2("Vishal"))


// higher order functions
// functions that take other functions as arguments
// functions that return functions
function makeTea(typeOfTea){
    return `Making ${typeOfTea}`
}

function processTeaOrder(teaFunction) {
    return teaFunction("Green Tea")
}

let Order = processTeaOrder(makeTea)    // Making Green Tea
console.log(Order)


// function returning function
function createTeaMaker(name) {
    return function (teaType) {
        return `Making ${teaType}`
    }
}
let teaMaker = createTeaMaker("vishal")
let result = teaMaker("Green Tea")
console.log(result)