// With built-ins
const x = 2;
const y = 2;

console.log(x===y);
//====================================//


// With custom
function strictEqual(a, b) {
    if (!a || !b) {
        throw new TypeError('You must provide two arguments in strictEqual()');
    }
    if (Object.is(NaN, a)) {
        return false;
    }
    if (
        (Object.is(a, 0) && Object.is(b, -0)) ||
        (Object.is(a, -0) && Object.is(b, 0))
    ) {
        return true
    }
    return Object.is(a, b)
}

console.log(strictEqual(x, y));