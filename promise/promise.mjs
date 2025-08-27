// doSomething((doSomethingError, doSomethingData) => {
//     if (doSomethingError) {
//         console.log(doSomethingData);
//     }

//     console.log(doSomethingData);
// });
// ini jika pakai CALLBACK

//jika pakai promise
// function onFulfilled(doSomethingData) {
//     console.log(doSomethingData);
// }

// function onRejected(doSomethingError) {
//     console.log(doSomethingError);
// }

// doSomething().then(onFulfilled, onRejected);

function promiseExecutor(resolve, reject) {
  setTimeout(() => {
    console.log('Melakukan sesuatu sebelum Promise diselesaikan.');
 
    // Penentuan hasil dari proses asinkron
    const number = Math.random();
 
    // Nilai fulfillment dari Promise
    if (number > 0.5) {
      resolve('You did it!');
    }
 
    // Nilai rejection dari Promise
    else {
      reject(new Error('Sorry, something went wrong!'));
    }
  }, 2000);
}
 
export function doSomething() {
  return new Promise(promiseExecutor);
}