/**
 * FUNDAMENTALS:
 * =============
 * 
 * The filter() method CREATES A NEW ARRAY with all elements that pass the test implemented by the provided function.
 * 
 * SYNTAX:
 * =======
 * 
 * filter(function callbackFn(element, index, array) { ... }, thisArg)
 * 
 * Parameters:
 * 
 * callbackFn: Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
 * 
 * It accepts three arguments:
 * ---------------------------
 * element: The current element being processed in the array.
 * index (optional): The index of the current element being processed in the array.
 * array (optional): The array on which "filter" was called upon.
 * thisArg (optional): Value to use as this when executing callbackFn. (Generally, the array itself on which "filter is applied")
 * 
 * Return Value:
 * --------------
 * A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 */

// ES6
const arr = [8, 3, 90, 56, 77, 32];
console.log(arr.filter(item => item > 10)); // [ 90, 56, 77, 32 ]


// Polyfill
Array.prototype.giveMeFilter = function(callbackFn) {
    if (this === null) {
        throw new TypeError('Array.prototype.giveMeMap called on null or undefined');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (this.length < 1) {
        throw new TypeError('giveMeMap of empty array is not supported');
    }
    var newArray = [];
    for (var index = 0; index < this.length; index++) {
        if (callbackFn(this[index], index, this)) {
            newArray.push(this[index]);
        }
    }

    return newArray;
};

console.log(arr.filter(item => item > 10)); // [ 90, 56, 77, 32 ]