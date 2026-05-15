// ! -- Day 1 --

// html -> structure banana
// css -> styling 
// JavaScripts -> Logic or Functibality

// What is javascript?
// javascript is a high-level, interpreterd scripting language used to cerate dynamic and interactive web applications

//  Why id javacript called a scripting language?
// script = small program that run inside another progranm 
// Browser ke andar run hota hai
// html ke sath embad hoti hai

// programming language and scripting language 
// compole hoti             usually interpreted
// standalone run           kisi environment run

// Morden JavaScript is a full programming language
// sirf scripting tak limited nahi he
// server pe bhi chalti he 

// Where JavaScript run today?
// Server and browser

// How javascript work 
/* memory heap       -> data store 
   call dtack        ->  code execute hota hai
   JavaScript Engine -> resp 
   web api           ->
   event loop        ->                  */ 


//! -- day 2 --  ----------- Feature of JavaScript ----------   


// 1. Interpreter Language
// typed define karne ki jarurt nahi
// no seprete compilation 
console.log("Skillected");

// 2. Dnyamically typed
// user action react karta hai
// int= x;

let x=10;
console.log(x)
x="hello";
console.log(x)

// 3. Event- Driver
// user action react karta hai
// click, hover, submit, keypress

// 4. Object-Orianted
// object use karta hai

let person = {
    name: "Vinay"
};

// 5. Prototype base
// JavaScripts classes nahi thi originally
// Prototype system use karta hai

// 6. Single-Threaded
// ek time pe ek hi task execute hota hai
// but:
// Asynchronous behvious support karta hai

console.log("Skillected");

// case sensitive 
// name != Name

// Keywords -> let, const, var, if, else, function
// cannot use as variable name

// 1995 -> created by Brendan Eich
// only 10 days
// ES6 (2015) -> biggest update



//! -- day 3 --  ----------- Variable ----------  

// a variable is a container that stores data 

// variable -> box (box of mobile)
// data -> item inside the box (mobile)
console.log("variables in js: ")

let box = "mobile";

console.log(box);


// javascripts is a case sensitive
// box != Box

// Memory work in js
// stack (primitive)
// heap (objects)


// var let and const

// var -> old way (before ES6 )

// Function Scoped
// can redclare
// hoisted
// causes bugs

var x1 = 10;
var x1 = 39;
console.log(x1);

// let (Introduction in ES6)

// block of scope
// cannot redclare
// can reasign


let x2 = 10;
x2 = 20;
console.log(x2)


// const

// block scope
// cannot redclare
// cannot reasign
const x3 = 20;


const obj ={
    name:"Skillected"
}
obj.name = "skillected"
console.log(obj)
/* whenever we use const keyword at this time
   refrence cannot change but object content can change */

// Glonbal scope 
let x4 = 29;
// accessible everyone 

// function scope
// only inside function

function test(){
    var x5 = 10;
}

// block scope 
// only inside block
/*
if (true){
    let y=20;
}
console.log(y)*/


//! -- day 4 --  ----------- hoisthing ----------  
 
// variable and function are moves to top of scope befor executions

// var x9;
console.log(x9);
var x9 =90;

// internally asumes -> var x; declared

// console.log(x10)
// let x10 = 10;

// let -> tdz -> temporal death zone 
// between declaration and initialization

// data types
// data types declared which type of data store in variables 

// type of data type
// 1. Primitive 
// Primitive data types stores single values

// 1. Number -> intiger, decimal, infinity, Nan -> not a number

let age = 18;

// console.log("Hello" -5)

// 2. String -> 
let name = "Vinay";   // "" '' ``

console.log(`Hello ${name}`);

// 3. Boolean

let isAdmin = true
console.log(isAdmin)

// 4.Undefined -> Declared but not assigned
let j;
console.log(j)

// 5. NUN -> Intention empty valyue 
let k=null;

// 6. Bigint -> For very large number 

let l = 13368874515484535;

// Symbol -> Unique identifiers
let id = Symbol();

console.log(id);

// 2. Non Primitive (Reference types)
// Non primitive data types stores referance type of data

// Object, Array, Function

let arr = [1, 2, 3];

function greet(){

}


//! -- day 5 --  ----------- Operators in JS ----------
//  An operator is a symbol that performs an operations on value and variables

let num=30;
let num1=20;
let result = num+num1;


// Operators -> = + 
// Operands -> num, num1 and result

// 1.Arithmetic Operators -> +, -, *, /, %, **, ++, --
// These perform mathematical calculations


// 2.Assigment Operators :- =, +=, -=, *=, /=, 
// Used to assign values

// 3.Comparison Operators :- ==, ===, !=, =>, <= 
// Used to compare values
// Result always true/false

console.log(10==="10") //type coercion

// 4.Logical Operators -> &&, ||,!
// Used for multiple conditions
// && -> and
// || -> or
//*  -> not


//! -- day 6 --

// 5. Conditions Statement
// Conditional statement allow a program to make decision based on conditions

//^ if statement
//     syntex
// if (condition){
// code to execute
// }

age = 19;
if (age >= 18){
    console.log("You are eligible to vote")
}

// step 1. -> chak condition
// step 2. -> if conditon true -> run code
// step 3. -> if false -> skip block

// Condition 
    // |
    // ^
    // true -> code run
    // false -> skip


//^ if-else Statement
// Sometimes we need two possible outcome
// ex : if student passes -> congratulation 
//      else -> try again 

marks = 84;
if (marks >= 35){
    console.log("Congratulation you are pass");
}
else{
    console.log("Try agin")
}

//^ if else if statement (ladder if / Multipul conditions)
// Sometimes these are many conditions
// Independent

// syntax->
// if (condition){
//     code
// }else if (condition2){
//     code
// }else if (condition3){
//     code
// }else{
//     code    
// }

// web grading system 

mark = 88;
if (mark >= 90){
    console.log("Gread => A")
}
else if (mark >= 70){
    console.log("Gread => B")
}
else if (mark >= 50){
    console.log("Gread => C")
}
else console.log("Fail")



//! -- day 7 --  ----------- Nested if and Switch case ---------- 
// if inside if another if
// Jab mujhe ek condition dusri condition ke uper dependent rakhni ho jab use karte he


let username = "admin";
let password = "1234";
if (username==="admin"){
    if (password==="1234"){
        console.log("Login Successfull")
    }
    else {
        console.log("please enter correct password")
    }
}else{
    console.log("user not found")
}

// step-1 -> chech username 
// step-2 -> password
// card valid 
// pin corerct -> withdraw

//? Switch statement 

// used when many fixd values exist 

// better alternative of else if

//^ syntax

// switch(expression){
// case value1;
//     code
//     break;
// case value2;
//     code 
//     break;
// case value3;
//     code 
//     break;
// default;
//     code
// }


let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    
    case 2:
        console.log("Tuesday");
        break;
    
    case 3:
        console.log("Wed");

    case 4:
        console.log("Thu");
        break;

    case 5:
        console.log("Fri");
        break;

    default:
        console.log("Invalid day");
}

//* Ternary operator
// Short form of if else 
//^ Syntex
// condition ? value1 : value2
let age8 = 20;
let result9 = age8>=18 ? "Adult": "Minor";
console.log(result9);

console.log(5>3>2);

//! -- day 8 --  ----------- Control Loop ----------
// A loop is used to execute a block of code repeatedly until a condition becomes false

//* 1. for loop
// for(initialization/condition/update){
// }

console.log("For loop: ")
for(let i=1;i<=5;i++){
    console.log(i)
}

// Flow
// initilize -> condition chack -> true -> execute block -> update -> repeated
                    // |
                    // false (stop the code)

//& Print number 1-100
console.log("Number 1-100: ")

for(let i=1;i<=100;i++){
    console.log(i)
}

//& Print even numbers
console.log("Even numbers 0-50: ")

for (let i=0; i<=50; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

//& Sum of numbers 
console.log("Sum of numbers: ")

let sum = 0;
for (let i=1; i<=20; i++){
    sum += i;
}
console.log(sum)

//& Multiplication Table
console.log("Multiplication")

let multi = 17;
for (let i=1; i<=10;i++){
    console.log( multi*i)
}

//& Print 10-1 reverce number
console.log("10-1 Reverce number: ")
for(let i=10;i>=1;i--){
    console.log(i);
}



//! -- day 9 --  ----------- while and do while loop ----------



//! -- day 10 --  ----------- control statement programs ----------



//! -- day 11 --  ----------- nested for loop ----------



//! -- day 12 --  ----------- Function ----------



//! -- day 13 --  ----------- Functions 2 ----------



//! -- day 14 --  ----------- Call Back function and hider Function ----------



//! -- day 15 --  ----------- Objects ----------



//! -- day 16 --  ----------- Arrays ----------



//! -- day 17 --  ----------- Map ----------
// map() creates a new array by calling a provided function on every element in the calling array.
console.log("Map: ")
let arr1 = [1, 2, 3, 4, 5];

let result1 = arr1.map(function(num){
    return num * num;
});
console.log(result1);

// return a new array with square of each element in arr1
// original array remains unchanged

// map() runs loop internally and applies the function to each element of the array, returning a new array with the results.
// each element stored in num variable and then return value becom a new arry element
console.log("arrow function: ") 

let result2 = arr1.map(num => num * num);
console.log(result2);

// returns new array
// original array remains unchanged
// runs for each and every element of the array
// used for transformation of array

arr.map(num => num * 3) // triple each element
console.log(arr) // original array remains unchanged

//? ----------- Filter ----------

// Filter() returns elemnts of array that satisfy a condition
console.log("Filter: ")
// array -> chack condition -> keep maching element -> new array woth matvhin element.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result3 = arr2.filter(function(num){
    return num % 2 == 0;
});
console.log(result3);

// returns a new array with only even numbers
// original array remains unchanged
// runs for each and every element of the array
// used for filtering of array

let result4 = arr2.filter(num => num % 2 == 0);
console.log(result4);


let users = [
    {name: "Vinay", age: 19},
    {name: "Ravi", age: 17},
    {name: "Anu", age: 30},
    {name: "Sita", age: 15}
]

let adulst = users.filter(user => user.age >= 18);
console.log(adulst);

// returns a new array with only adult users
// original array remains unchanged


// map -> transformation each element of array and return new array(modify each element of array and return new array)
// filter -> return element of array that satisfy a condition (select data from array and return new array)

// ? ----------- Reduce ----------
// reduce() reduces the array to a single value by applying a function
// array.reduce(function(accumulator, currentValue,index,array){
    // code to be executed for each element
// }, initialValue)

// accumulator -> accumulates the result of the function
// currentValue -> current element being processed
// index -> index of current element
// array -> the array on which reduce is called
// initialValue -> optional value to start the accumulation

let numbers = [1, 2, 3, 4, 5];

let sum1 = numbers.reduce(function(acc, num){
    return acc + num; // 1+0, 1+2, 3+3, 4+6, 5+10
}, 0);
console.log(sum1);

// returns the sum of all numbers in the array
// original array remains unchanged



// Map -> transformation of array
// Filter -> selection of array
// Reduce -> combine all element of array to single value


// ! -- 18 -- ----------- oops ----------
// what id oop
// opp is a programming paradigm based on the consept of objects

// real world cheezon ko code me represent karne ka tarika

// object -> real world entity
// property -> data about object
// method -> action perform by object

// name , age , city -> propertys
// greet() -> method


// why opp?
// code reusability -> code ko reuse kar sakte he
// modularity -> code ko module me divide kar sakte he
// maintainability -> code ko maintain karna easy hota hai
// scalability -> code ko scale karna easy hota hai
// real world modeling -> real world cheezon ko code me represent karna easy hota hai

// constructor function -> template for creating objects
console.log("Constructor function: ")
function User(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}
let u1 = new User("Vinay", 19, "Delhi");
console.log(u1);
let u2 = new User("Ravi", 17, "Mumbai");
console.log(u2);

// class in js(es6)
//  class is a blueprnt for creating objects
// class is a syntactical suger over constructor function

class User1{
    constructor(name,age,city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old from ${this.city}`);
    }
}

let u3 = new User1("Payal", 18, "Julmi");
console.log(u3);
u3.greet();


// encapsulation -> bulding data and methods that operate on that data within a single unit (class)
// data hiding -> hiding internal details and showing only functionality to user
// abstraction -> hiding internal details and showing only functionality to user
// inheritance -> child class can inherit properties and methods from parent class
// polymorphism -> ability of object to take many forms (method overriding)


class Bank{
    #balance = 1200; // private property

    deposit(amount){
        this.#balance += amount;
        console.log(`Deposited ${amount}. Current balance: ${this.#balance}`);
    }
}

let bank = new Bank();
bank.deposit(500);
// console.log(bank.#balance) // error -> private property cannot be accessed outside class 


// inheritance
// parent class -> child class -> child class can inherit properties and methods from parent class
// child class can also have its own properties and methods


// parent class
class Animal{
    speak(){
        console.log("Animal speaks");
    }
}
// child class
class Dog extends Animal{
    bark(){
        console.log("Dog barks");
    }   
}

let dog = new Dog();
dog.speak(); // Dog barks -> method overriding
dog.bark(); // Dog barks -> bark is a function of Dog class


// polimorphism
// ability of object to take many forms
// method overriding -> child class can provide specific implementation of method that is already provided by parent class


// same method name but different implementation in parent and child class(different behavior in parent and child class)


class Cat extends Animal{
    speak(){
        console.log("Cat meows");
    }   
}

let cat = new Cat();
cat.speak(); // Cat meows -> method overriding


// ! --Day 19 -- ---------- DOM & EVENTS ---------

// browser concverts html into tree structure called dom

// why dom?
// java script  cannot directly access with html
// it change the dom to main html elements and conten 
// dom -> document object model

// dom is a tree like structure where each node represents an element in the html document
// dom allows us to manipulate the html document using java script

// dom provides methods to access and manipulate html elements
// document.getElementById() -> access element by id
// document.getElementsByClassName() -> access element by class name
// document.getElementsByTagName() -> access element by tag name
// document.querySelector() -> access element by css selector
// document.querySelectorAll() -> access all element by css selector



let title = document.getElementById("title");
console.log(title);

// document -> object or browser and request to access html document
// getElementById -> method to access element by id

//  webpage me se id = title wale element ko access karke title variable me store kar diya

