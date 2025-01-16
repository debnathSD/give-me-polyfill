/**
 * Implement a Polyfill for Promise.all()
 */

const prom1 = Promise.resolve(3);

const prom2 = 42;

const prom3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'foo'));

Promise.all([
    prom1,
    prom2,
    prom3
])
    .then(values => console.log(values)) // [ 3, 42, 'foo' ]
    .catch(err => console.log(err));




Promise.myAll = function(values) {
    return new Promise((res, rej) => {
        const results = [];
        values.forEach((val, idx) => {
            Promise.resolve(val).then(p => {
                results.push(p);
                if((idx + 1) === values.length) {
                    res(results);
                }
            }).catch(err => rej(err));
        });
    });
}


Promise.myAll([
    prom1,
    prom2,
    prom3
])
    .then(values => console.log(values)) // [ 3, 42, 'foo' ]
    .catch(err => console.log(err));
