const myPromise = new Promise((res, rej) => {
    if (true) res("RESOLVED");
    rej("REJECTED");
});

myPromise.then(d => console.log(d)).catch(e => console.log(e));