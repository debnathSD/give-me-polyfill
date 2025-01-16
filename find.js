/**
 * FUNDAMENTALS
 * ============
 * 
 * The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
 * If no values satisfy the testing function, "undefined" is returned.
 * 
 * DESCRIPTION
 * ===========
 * SIGNATURE: find(function callbackFn(element, index, array) { ... }, thisArg)
 * 
 * RETURN VALUE:
 * ============
 * The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 */


// ES6
const arr = [5, 12, 8, 130, 44];
console.log(arr.find(x => x > 10)); // 12


// Polyfill
Array.prototype.giveMeFind = function(callbackFn) {
    if (this === null) {
        throw new TypeError('Array.prototype.giveMeFind called on null or undefined');
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }
    if (this.length < 1) {
        throw new TypeError('giveMeFind of empty array is not supported');
    }
    for (var index = 0; index < this.length; index++) {
        if (callbackFn(this[index], index, this)) {
            return this[index];
        }
        return undefined;
    }
}

console.log(arr.giveMeFind(x => x > 10)); // 12


Array.prototype.myFind = function(cb) {
    for (var i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};


console.log(arr.myFind(x => x > 10)); // 12