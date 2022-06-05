var cm = require("./calculateMode");
var shallowEqualArrays = require('shallow-equal/arrays');

console.log(shallowEqualArrays(cm.calculateMode([1,2,3,3]), [3]))
console.log(shallowEqualArrays(cm.calculateMode([4.5, 0, 0]), [0]));
console.log(shallowEqualArrays(cm.calculateMode([1.5, -1, 1, 1.5]), [1.5]));
console.log(shallowEqualArrays(cm.calculateMode([1,1,2,2]), [1,2]));
console.log(shallowEqualArrays(cm.calculateMode(["who", "what", "where", "who"]), ["who"]));
console.log(shallowEqualArrays(cm.calculateMode([]), []))
console.log(shallowEqualArrays(cm.calculateMode([1,1,1]), [1]))
console.log(shallowEqualArrays(cm.calculateMode(["hello", "hello", 1, 3]), ["hello"]))
console.log(shallowEqualArrays(cm.calculateMode(["hello", "hello", 1, 3, 3, 3]), ["3"]))