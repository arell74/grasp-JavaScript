import { makeCoffee, sendCoffee } from './coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order)
  .then(
    (value) => {
      return sendCoffee(value);
    },
    (error) => {
      console.error(error.message);
      throw error;
    },
  )
  .then(
    (value) => {
      console.log(`Pramusaji memberikan ${value} pesanan.`);
      console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
    })
    .catch((error) => {
        console.log(error.message);
    });

//     Pastikan kita mengembalikan nilai Promise-nya (return) jika memanfaatkan chaining method. Hal ini karena then akan berjalan jika menemukan objek Promise.

// makeCoffee(order)
//   .then((value) => {
//     sendCoffee(value); // <-- tidak akan dilanjutkan ke then berikutnya.
//   })
//   .then((value) => {
//     console.log(`Pramusaji memberikan ${value} pesanan.`);
//     console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
//   })
//   .catch((error) => {
//     console.log(error.message);
//     throw error;
//   });
// Contoh kode di atas akan berhenti sampai then pertama saja. Oleh karena itu, pastikan kembalikan nilai Promise-nya, ya.
makeCoffee(order)
  .then((value) => {
    return sendCoffee(value); // <-- akan dilanjutkan ke then berikutnya.
  })
  .then((value) => {
    console.log(`Pramusaji memberikan ${value} pesanan.`);
    console.log(`Saya mendapatkan ${value} dan menghabiskannya.`);
  })
  .catch((error) => {
    console.log(error.message);
    throw error;
  });