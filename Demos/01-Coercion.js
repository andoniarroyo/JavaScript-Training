// 1- Coercion tricks...
/*
var name = "andoni";

if (name) {
    console.log(name == false);
    console.log(name == true);
}
*/
/*
if ([0]) {
    console.log([0] == true);
}
*/

// 2 - Expressions
/*
function operationOne(){
    // do some operations...
    console.log("operationOne");
    return "one";
}

function operationTwo() {
    // do some operations...
    console.log("operationTwo");
    return "two";
}

function operationThree() {
    // do some operations...
    console.log("operationThree");
    return "three";
}

var result = operationOne() || operationTwo() ;
console.log(result);

//operationOne() && operationTwo() && operationThree();
*/
