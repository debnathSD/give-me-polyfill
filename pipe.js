// Create R.pipe() of Ramda.js
// One of the useful helpers of functional programming

// Pipe is essentially a Higher Order Function which takes a set of functions and
// Operate on them from left to right using reduce

const add2 = x => x + 2

const sub1 = x => x - 1

const mul5 = x => x * 5

const pipe = (...fns) => value => fns.reduce((prev, fn) => fn(prev), value);

const compResult = pipe(mul5, sub1, add2)(4);
console.log(compResult)