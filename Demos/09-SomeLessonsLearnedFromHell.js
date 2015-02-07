// 0- Some typeof may be unexpected...
/*
var name = "andoni";
var otherName = String("arroyo");
var otherNameMore = new String("arroyo");

console.log(typeof(name));
console.log(typeof(otherName));
console.log(typeof(otherNameMore));

var myNull = null;
console.log(typeof(myNull));

var myFunction = function () { };
console.log(typeof (myFunction));
*/

// 1- The Array constructor
/*
var newArray = new Array(1, 2, 3, 4);
console.log(newArray[0]);
console.log(newArray);

var oneElementArray = new Array(3);
console.log(oneElementArray[0]);
console.log(oneElementArray);

var reallyOneElementArray = [3];
console.log(reallyOneElementArray[0]);
*/

// 2 - Months starts by 0
/*
var date = new Date();
console.log(date.getMonth());
*/

// 3 - = != ==
/*
var newArray = new Array(1, 2, 3, 4);
if (newArray.length = 7) {
    console.log(newArray.length);
    console.log(newArray[6]);
}
*/

// 4 - Be careful with numbers…(specially with NaN)
/*
var sum = 0.1 + 0.2;
console.log(sum);

sum = (0.1 + 0.2).toFixed(2);
console.log(sum);

sum = (0.1 * 100 + 0.2 * 100) / 100;
console.log(sum);

var sum = "a";
sum = sum / 1;
sum = sum + 1;
console.log(sum);
*/

// Hoisting
/*
var name = "andoni";
var hoistingFunction = function() {
    console.log(name);
    var name = "arroyo";
};
hoistingFunction();
*/

// bonustrack
/*
var composedText = "";
var text = "whatever";

for (var i = 0; i < 20; i++) {
    composedText += (text + i).toString();
}

//composedText = composedText + " batmaaaaan!!";
console.log(composedText);
*/