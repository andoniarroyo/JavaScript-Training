// 1 - this
/*
var name = "globalName";

var sayHello = function() {
    return this.name;
};

var myObject = {
    name: "localName",
    say: sayHello
};

console.log(sayHello());
console.log(myObject.say());
*/

// 2 - this in nested functions
/*
var name = "globalName";

var sayHello = function() {
    //return this.name;
    var anotherFunctionInsideHello = function() {
        return this.name;
    };
    return anotherFunctionInsideHello();
};

var obj = { name: "localName", sayHello: sayHello };
console.log(obj.sayHello());
*/

// 3 - this in nested functions, fixed
/*
var name = "globalName";

var sayHello = function() {
    var that = this;
    var anotherFunctionInsideHello = function() {
        return that.name;
    };
    return anotherFunctionInsideHello();
};

var obj = { name: "localName", sayHello: sayHello };
console.log(obj.sayHello());
*/