// check the number is greater than another number

let num1 = 10;
let num2 = 5;

if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
}
else{
    console.log(`${num2} is greater than ${num1}`);
}


// check if the string is equal to another string
let string = "hello";
let string2 = "hello";

if(string === string2) {
    console.log(`${string} is equal to ${string2}`);
}
else{
    console.log(`${string} is not equal to ${string2}`);
}


// check if the variable is number or not
let variable = "NeonX";

if(typeof variable === 'number') {
    console.log(`${variable} is a number`);
}
else{
    console.log(`${variable} is not a number`);
}


// check if the boolean value is true or false
let boolean = true;
if(boolean) {
    console.log(`${boolean} is true`);
}
else{
    console.log(`${boolean} is false`);
}

// check if the array is empty or not
let array = [];
if(array.length === 0) {
    console.log(`Array is empty`);
}
else{
    console.log(`Array is not empty`);
}