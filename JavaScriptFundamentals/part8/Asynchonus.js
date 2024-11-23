// console.log("Start");
// setTimeout(() => {
//   console.log("We are in the timeout");
// }, 2000);

// function newFunc(name) {
//     console.log(`Hello ${name}`);
// }
// newFunc("John");
// setTimeout(newFunc, 3000, "Vishal");

// const greet = () => {
//   console.log("Hello World");
// }

// setTimeout(greet, 4000);


const head = document.querySelector('h1');
const Iam = ['web developer', 'designer', 'programmer', 'coder', 'developer'];
let index = 0;

let whoIAm = function () {
    setInterval(() => {
        head.textContent = "I am " + Iam[index];
        index = (index + 1) % Iam.length;
    }, 2000);
}

whoIAm();



