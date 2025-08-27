export function promiseExecutor(resolve, reject) {
    setTimeout(() => {
        resolve('You Did IT!');
    }, 2000);
}

export function doSomething() {
    return new Promise(promiseExecutor);
}