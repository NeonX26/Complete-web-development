/*
Datatypes:
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. Object
8. Array
9. Function
*/
 
// 1. Number
let num = 10;
console.log(num); // 10
console.log(typeof num); // number

// 2. String
let str = "Hello";
console.log(str); // Hello
console.log(typeof str); // string
console.log(str.length); // 5

// 3. Boolean
let bool = true;
console.log(bool); // true
console.log(typeof bool); // boolean
console.log(bool === true); // true
console.log(bool === false); // false

// 4. Null
let n = null;
console.log(n); // null
console.log(typeof n); // object

// 5. Undefined
let u;
console.log(u); // undefined
console.log(typeof u); // undefined

// 6. Symbol
const sym = Symbol();
console.log(sym); // Symbol()
console.log(typeof sym); // symbol

// 7. Object
let obj = { name: "John", age: 30 };
console.log(obj); // { name: "John", age: 30 }
console.log(typeof obj); // object

// 8. Array
let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
console.log(typeof arr); // object

// 9. Function
let func = function() {
  return "Hello";
};
console.log(func()); // Hello
console.log(typeof func); // function

