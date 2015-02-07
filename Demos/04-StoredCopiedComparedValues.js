// 1 - Primitives
// Copy by value
/*
var myName = "Andoni";
var yourName = myName;
console.log(myName, yourName);
yourName = "Naiara";
console.log(myName, yourName);
*/

// Comparison by value
/*
var price1 = 99;
var price2 = 99;
var price3 = new Number(99);
var price4 = price3;

console.log(price1 === price2);
console.log(price3 === price4);

price4 = new Number(99);
console.log(price3 === price4);
*/

// 2 - Objects
/*
var myObject = {};
var copyOfMyObject = myObject;

myObject.name = "andoni";
console.log(copyOfMyObject.name);
*/