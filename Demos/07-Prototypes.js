//"use strict";

// 1- Resolving properties
/*
Object.prototype.sayHello = function() {
    return "Hey, I'm " + this.ramGB + " GB computer";
};

var Computer = function(ramGB) {
    this.ramGB = ramGB;
};

var newComputer = new Computer(4);
console.log(newComputer.sayHello());

var newBigComputer = new Computer(8);
console.log(newBigComputer.sayHello());
*/

// 2 - in VS hasOwnProperty
/*
var Person = function(name) {
    this.name = name;
};

var andoni = new Person('Andoni');

console.log("name" in andoni);
console.log("toString" in andoni);
console.log(andoni.hasOwnProperty("toString"));
*/

// 3 - for in
/*
Object.prototype.anotherProperty = "yeaaa";
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};

var andoni = new Person('Andoni', 33);

for (var key in andoni) {
    if (andoni.hasOwnProperty(key)) {
        console.log(key);
    }
}
*/

// 4 - Custom prototypes
/*
var Person = function () {
};

Person.prototype.sayHello = function() {
    return "Hi! My name is " + this.name + " and I'm " + this.age;
};

var Chef = function (name, age, stars) {
    this.stars = stars;
    this.name = name;
    this.age = age;
};

var relatedPrototype = new Person();
relatedPrototype.constructor = Chef;
Chef.prototype = relatedPrototype;

Chef.prototype.reportStars = function() {
    return "Hi! I've " + this.stars + " stars";
};

var andoni = new Chef("andoni", 33, 5);
console.log(andoni.constructor);
console.log(andoni.reportStars());
console.log(andoni.sayHello());
*/