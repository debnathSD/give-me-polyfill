/**
 * FUNDAMENTALS:
 * =============
 * 
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * 
 * The reducer function takes four arguments:
 * Accumulator
 * Current Value
 * Current Index
 * Source Array
 * 
 * The reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and
 * ultimately becomes the final, single resulting value.
 * 
 * ////////////////////////////////////////////////////////////////////////////////////
 * 
 * SYNTAX:
 * =======
 * 
 * Arrow function: reduce((accumulator, currentValue, index, array) => { ... }, initialValue)
 * 
 * Callback function: reduce(function callbackFn(accumulator, currentValue, index, array) { ... }, initialValue)
 * 
 *      Params:
 *      ======    
 *      callbackFn: A function to execute on each element in the array (except for the first, if no initialValue is supplied).
 *      It takes four arguments:
 * 
 *          accumulator: The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the last invocation of
 *          the callback—or initialValue, if it was supplied.
 * 
 *          currentValue: The current element being processed in the array.
 * 
 *          index (Optional): The index of the current element being processed in the array. Starts from index 0 if an initialValue is provided. Otherwise, it
 *                            starts from index 1.
 * 
 *          array (Optional): The array reduce() was called upon.
 * 
 *      initialValue (Optional): A value to use as the first argument to the first call of the callbackFn. If no initialValue is supplied, the first element in the
 *                               array will be used as the initial accumulator value and skipped as currentValue. Calling reduce() on an empty array without an
 *                               initialValue will throw a TypeError.
 */


// ES6
const array = [2, 4, 6, 8, 10];
const initialValue = 0;
const res = array.reduce((accumulator, currentValue, index, array) => {return (accumulator + currentValue)}, initialValue);
console.log(res); // 30


// Polyfill
Array.prototype.giveMeReduce = function(callbackFn, init) {
    if (this === null) {
        throw new TypeError('Array.prototype.giveMeReduce called on null or undefined');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (this.length < 1) {
        throw new TypeError('giveMeReduce of empty array is not supported');
    }
    if (!init) {
        throw new TypeError('giveMeReduce can not be applied on null or undefined initialValue');
    }
    let accumulator = init;
    for (let index = 0; index < this.length; index++) {
        accumulator = callbackFn(accumulator, this[index], index, this);
    }
    return accumulator;
};

const polyfillRes = array.giveMeReduce((accumulator, currentValue) => accumulator + currentValue, 1);
console.log(polyfillRes); // 31