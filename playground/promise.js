// Simple promise
var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey. It worked!');
        reject('Nooooo!');
    }, 2000);

});
somePromise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

//advanced promise chaining
var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};
// to chain respose must be returned in .then
asyncAdd(1, 2).then((response) => {
    return asyncAdd(response, 3);
}).then((response) => {
    console.log(response);
}).catch((errorMessage) => {
    console.log(errorMessage);
});