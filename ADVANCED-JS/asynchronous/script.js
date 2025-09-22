// Asynchronous callback
// ini terjadi karena adanya event loop

console.log('satu');
setTimeout(() => {
    console.log('dua');
}, 5000);

console.log('tiga');