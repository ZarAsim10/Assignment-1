// let massage: string = "Zara!";
// console.log(massage);
// massage = "123";
// console.log(massage);

//Data types PRIMITIVES
//example 1 string
//example 2 number
//example 3 boolean => true/false
//example 4 null
//example 5 undefined
//example 6 symbol
//example 7 bigint

// let userName: string = "Zara Asim";
// let age: number = 28;
// let A boolean = true;

let A: number = 123
console.log(A)

let b: string = "Hello"
console.log(b)

let c: boolean = true
console.log(c)

let d: null = null
console.log(d)

let e= undefined
console.log(e)

//let sym1= Symbol("key")
//console.log(sym1)

//let num: BigInt = 524555452n;
//console.log(num);

//OPERATORS IN TYPESCRIPT

//1. Arithmetic operators.
//+, - , * , / , % , **

let x = 10;

console.log (x + 5);
console.log (x - 18);
console.log (x * 8);
console.log (x % 10);
console.log (x % 20);
console.log (x ** 10);

//TYPES OF VARIABLE NAMES:

//1.camelCase
//2.snake_case
//3.PascalCase

let userName = "Asim" // e.g. CamelCase
let user_name = "Sara" // e.g. snake_case
let UserName = "Farah" // e.g. PascalCase

console.log('userName' ,'user_name' , 'UserName');

//DATA TYPES NON PRIMITIVES (ARRAYS)

let students = ['Zara', 'Sarwat', 'Kashaf']

console.log(students)

let firstStudentName = students[1]
console.log(firstStudentName)

let SecondStudentName = students[2]
console.log(SecondStudentName)

console.log(students[3])

console.log(students[2])
console.log(students[0])

//task
//create number array

let number :(number) []= [1 ,2 ,3]
console.log(number)

//create bullean array

let boolean: (boolean) [] = [true,false]
console.log(boolean)

let nuts =['peanut','cashew','almond']
nuts[1]= "walnut"
console.log(nuts)