/**
 * Implement this code: 
 * 
 * const result = calc.add(10).mul(5).substract(30).add(10) // Expected output: 30
 */


const calc = {
    total: 0,
    add(x) {
        this.total += x;
        return this;
    },
    mul(x) {
        this.total *= x;
        return this;
    },
    substract(x) {
        this.total -= x;
        return this;
    }
};

 const result = calc.add(10).mul(5).substract(30).add(10)
 console.log(result.total);