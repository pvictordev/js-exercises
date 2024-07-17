// 1. Let and Const Practice
const x = 10;
const y = 5;

let sum = x + y; 
let difference = x - 7; 

console.log(`Sum is: ${sum}`); 
console.log(`Difference is: ${difference}`); 


// 2. Arrow Function
const squre = (n) => n * n; 

console.log(squre(2)); 


// 3. Template Literals
let name = "Victor"; 
let age = 20;
let hobby = "coding in TipaScript"; 

console.log(`Hello, my name is ${name}, I am ${age} and I love ${hobby}`); 


// 4. Default Parameters 
function greeting(name = "Victor") {
    return name; 
}

console.log(`Hi ${greeting()}`);
console.log(`Hi ${greeting("Daniel")}`);