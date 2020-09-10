let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 3000);
})

promise.then(
    result => console.log(result),
    error => console.error(error)
);
