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