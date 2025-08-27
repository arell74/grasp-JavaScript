import { doSomething } from "./utils.mjs";

// console.log('Start');

// doSomething() 
//     .then((value) => {
//         console.log(value);
//     });

//     console.log('End');

//jika ingin syncronus
async function promiseWithAsyncAwait() {
    console.log('Start');

    const result = await doSomething();
    console.log(result);

    console.log('end');
}

promiseWithAsyncAwait();