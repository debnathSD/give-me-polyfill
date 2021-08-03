/**
 * FUNDAMENTALS
 * ============
 * The forEach() method executes a provided function ONCE for each array element.
 * 
 * DESCRIPTION
 * ===========
 * 
 * Signature: forEach(function callbackFn(element, index, array) { ... }, thisArg)
 * 
 * Parameters:
 * 
 * callbackFn: Function to execute on each element. It accepts between one and three arguments:

        element
        The current element being processed in the array.

        index Optional
        The index of element in the array.

        array Optional
        The array forEach() was called upon.

 * thisArg (Optional): Value to use as this when executing callbackFn.
 * 
 * Return value: undefined.
 * 
 * SPECIAL NOTE===========> forEach() doesn't support async functions - that means it does not wait for Promises, so it is not
 * recommended to use async-await inside a forEach() loop
 */


// ES6
const arr = [2, 4, 6, 8];
arr.forEach(item => console.log(item)); // 2, 4, 6, 8


// Polyfill
Array.prototype.giveMeForEach = function(callbackFn) {
    if (this === null) {
        throw new TypeError('Array.prototype.giveMeForEach called on null or undefined');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (this.length < 1) {
        throw new TypeError('giveMeForEach of empty array is not supported');
    }
    for (var index = 0; index < this.length; index++) {
        callbackFn(this[index], index, this);
    }
    return undefined;
};

arr.giveMeForEach(item => console.log(item)); // 2, 4, 6, 8