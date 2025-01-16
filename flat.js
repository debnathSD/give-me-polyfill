// const arr = [
//     [1,2],
//     [3,4],
//     [5,6, [7, 8]],
//     [9, 10, [11, [12, 13]]]
// ];
// FOR LEVEL / DEPTH = 1
// const flatOneLevel = [].concat(...arr);
// console.log(flatOneLevel);

// const newArr = arr.reduce((acc, val) => acc.concat(val), []);
// console.log(newArr);

// FOR INFINITE DEPTH
// const flatInfinte = (arr, d = 1) => {
//     return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatInfinte(val, d-1) : val), []) : arr;
// };

const arr = [
    [1,2],
    [3,4],
    [5,6, [7, 8]],
    [9, 10, [11, [12, 13]]]
];


// one level
// const flat1D = arr.reduce((acc, val) => acc.concat(val), []);
// console.log(flat1D)


const flatInfinite = (arr, d) => {
    if (d > 0) {
        return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatInfinite(val, d-1) : val), []);
    } else {
        return arr;
    }
};

const anyFlat = (arr, d) => {
    if (d > 0) {
        return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? anyFlat(val, d-1) : val), []);
    } else {
        return arr;
    }
}

console.log(anyFlat(arr, Infinity));