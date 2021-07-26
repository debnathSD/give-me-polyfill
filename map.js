/**
 * FUNDAMENTALS:
 * =============
 * 
 * The map() method CREATES A NEW ARRAY populated with the results of calling a provided function on every element in the calling array.
 * 
 * map(function callbackFn(element, index, array) { ... }, thisArg)
 * 
 * Parameters
 * 
 * callbackFn: Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
 * 
 * The callbackFn function accepts the following arguments:
 * 
 * element: The current element being processed in the array.
 * 
 * index (Optional): The index of the current element being processed in the array.
 * 
 * array (Optional): The array map was called upon.
 * 
 * thisArg (Optional): Value to use as this when executing callbackFn.
 * 
 * 
 * Return value: A new array with each element being the result of the callback function.
 */

// ES6
const arr = [1, 2, 3, 4];
console.log(arr.map(x => x * 2)); // [ 2, 4, 6, 8 ]


// Polyfill
Array.prototype.giveMeMap = function(callbackFn) {
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
        newArray.push(callbackFn(this[index], index, this));
    }
    return newArray;
};

console.log(arr.giveMeMap(x => x * 2)); // [ 2, 4, 6, 8 ]
