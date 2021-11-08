/**
 * FUNDAMENTAL:
 * ============
 * 
 * The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, 
 * indicating that no element passed the test.
 * 
 * SYNTAX:
 * =======
 * 
 * findIndex(function(element, index, array) { ... }, thisArg)
 * 
 * callbackFn
A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.

It takes three arguments:

element
The current element being processed in the array.

index Optional
The index of the current element being processed in the array.

array Optional
The array findIndex() was called upon.

thisArg Optional
Optional object to use as this when executing callbackFn.

Return value
The index of the first element in the array that passes the test. Otherwise, -1.

Note: if the index of the first element in the array that passes the test is 0, the return value of findIndex will be interpreted as Falsy in conditional statements.
 */

//ES6
const array1 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber)); // 3

//Polyfill
Array.prototype.giveMeFindIndex = function (callBackFn) {
    if (this === null) {
        throw new TypeError('Array.prototype.giveMeFindIndex called on null or undefined');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (this.length < 1) {
        throw new TypeError('giveMeFindIndex of empty array is not supported');
    }
    for (var i = 0; i < this.length; i++) {
        if (callBackFn(this[i], i, this)) {
            return i;
        } 
    }
    return -1;
};
console.log(array1.giveMeFindIndex(isLargeNumber)); // 3