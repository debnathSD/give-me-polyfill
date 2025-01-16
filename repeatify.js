/**
 * Given a string and a function repeatify(n) -> implement that.
 * 
 * 'Hi'.repeatify(3) -> Should output: Hi Hi Hi -> 3 times
 */

String.prototype.repeatify = function(n) {
    let acc = '';
    for (let i = 0; i < n; i++) {
        acc += this + ' ';
    }
    return acc.trim();
};

console.log('Hi'.repeatify(3)); // Hi Hi Hi