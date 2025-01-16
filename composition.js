// Create R.compose() of Ramda.js
// One of the useful helpers of functional programming

// Compose is essentially a Higher Order Function which takes a set of functions and
// Operate on them from right to left using reduceRight

const add2 = x => x + 2

const sub1 = x => x - 1

const mul5 = x => x * 5



const compose = (...fns) => val => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(mul5, sub1, add2)(4);
console.log(compResult);