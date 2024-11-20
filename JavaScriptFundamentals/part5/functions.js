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
console.log(greetArrow2("Vishal"))