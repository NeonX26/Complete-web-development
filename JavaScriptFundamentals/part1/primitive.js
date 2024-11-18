let obj = {name: "John", age: 30 , isLogged: true};
// console.log(obj);

const user = {
    name: "John",
    age: 30,
    isLogged: true
    };

// console.log(user.name); // John


user.name = "Peter";
// console.log(user.name); // Peter


user.sName = "Smith";
// console.log(user['sName']); // Smith


// Date obj
let date = new Date();
// console.log(date.getHours());  


// Array
let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[0]); // Apple

// console.log(fruits.length); // 3

fruits[3] = "Pear";
// console.log(fruits.length); // 4

fruits[fruits.length - 1 ] = "Lemon";
// console.log(fruits[fruits.length - 1]); // Lemon



// TypeConversion - implicit

console.log(1 + '1'); // 11
console.log('1' + 1); // 11
console.log(1 + 1 + '1'); // 21
console.log('1' + 1 + 1); // 111
console.log('1' + (1 + 1)); // 12
console.log(1 + '1' + 1); // 111
console.log('1' - 1); // 0
console.log('1' * 1); // 1
console.log('1' / 1); // 1

let isLogged = true;
console.log(isLogged + '1'); // true1
console.log(isLogged + 1); // 2


// TypeConversion - explicit
let value = "abc";
console.log(Number(value)); // NaN
console.log(typeof Number(value)); // number

console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
