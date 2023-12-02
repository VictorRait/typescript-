"use strict";
let stringArr = ["one", "hey", "dave"];
let guitars = ["Strat", "Les Paul", 5150];
let mixedData = ["EVH", 1984, true];
stringArr[0] = "John";
stringArr.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 42, true];
let mixed = ["John", 1, false];
myTuple[1] = 42;
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop2 = 42;
