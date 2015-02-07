// 1 - Object literal
/*
var fact = {
    name: 'Chuck',
    rules: 'Noooo!!',
    sayToNay: function ()
                {
                    return 'Nay, ' + fact.name + ' rules? ' + fact.rules;
                }
    };

console.log(fact.name);
console.log(fact.rules);
console.log(fact.sayToNay());
console.log(typeof (fact));
console.log(fact.constructor);
*/

// 2 - Object constructor
/*
var fact = new Object();
fact.name = 'Chuck';
fact.rules = 'Noooo!!';
fact.sayToNay = function() {
    return 'Nay, ' + fact.name + ' rules? ' + fact.rules;
};
console.log(fact.name);
console.log(fact.rules);
console.log(fact.sayToNay());
console.log(typeof (fact));
console.log(fact.constructor);
*/

// 3 - Custom constructor
/*
var Movie = function MovieCtr (title, year) {
    this.title = title;
    this.year = year;
    this.summary = function() {
        return "The amazing film " + this.title + ' was made in the ' + this.year;
    };
};

var clerks = new Movie('clerks', 1994);
console.log(clerks.summary());

var amelie = new Movie('amelie', 2001);
console.log(amelie.summary());

console.log(typeof (clerks));
console.log(clerks.constructor.name);
*/