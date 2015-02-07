// 1 - Constructors
/*
var Phone = function Phone(manufacturer, screenResolution) {
    this.manufacturer = manufacturer;
    this.screenResolution = screenResolution;
};
*/
/*
var syPhone = Phone("pear", "102x76");
console.log(syPhone.manufacturer);
//console.log(manufacturer);
*/

/*
var iPhone = new Phone("apple", "1024x768");
console.log(iPhone.constructor.name);
console.log(iPhone instanceof Phone);
console.log(iPhone.manufacturer);
console.log(iPhone.screenResolution);
*/

// 2 - “Special” native object constructors
/*
var myNumber = new Number(23);
var myNumberLiteral = 23;

console.log(myNumber.constructor);
console.log(typeof (myNumber));
console.log(myNumberLiteral.constructor);
console.log(typeof (myNumberLiteral));
*/

// 3- “Special” behavior of primitives
/*
var name = "andoni";
console.log(name.toUpperCase());
name.isSpecial = true;
console.log(name.isSpecial);
*/