/**
 * FUNDAMENTALS:
 * =============
 * 
 * The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
 * 
 * SYNTAX:
 * =======
 * every(function(element, index, array) { ... }, thisArg)
 * 
 * Parameters
callbackFn
A function to test for each element, taking three arguments:

element
The current element being processed in the array.

index Optional
The index of the current element being processed in the array.

array Optional
The array every was called upon.

thisArg Optional
A value to use as this when executing callbackFn.

Return value
============
true if the callbackFn function returns a truthy value for every array element. Otherwise, false.
 */

//ES6
const isBelowThreshold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); // true

//Polyfill
Array.prototype.giveMeEvery = function(callBackFn) {
    if (this === null) {
        throw new TypeError('Array.prototype.giveMeEvery called on null or undefined');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (this.length < 1) {
        throw new TypeError('giveMeEvery of empty array is not supported');
    }
    for (var i = 0; i < this.length; i++) {
        if (!callBackFn(this[i], i, this)) {
            return false;
        } 
    }
    return true;
};
console.log(array1.giveMeEvery(isBelowThreshold)); // true