const angka = [-1, 3, 7, 9, 10, 2, 4, 8, 5, 6];

// angka yang lebih dari 3

// pakai for
// const newAngka = [];

// for ( let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// pakai filter
// const newAngka = angka.filter(function(a) {
//     return a >= 3;
// });

// console.log(newAngka);

// filter dengan arrow function
// const newAngka = angka.filter(a =>  a >= 3);
// console.log(newAngka);

// map
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// reduce
// jumlah kan seluruh elemen pada array
// 0 + -1 + 3 + 7 + 9 + 10 + 2 + 4 + 8 + 5 + 6
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 7);
// // sebenarnya ada nilai lagi setelah currentValue, yang defaultnya 0
// console.log(newAngka);

// method chaining
const hasil = angka.filter(a => a >  5)
    .map(a => a * 3) // 21, 27, 30, 24, 18
    .map(a => a / 2) // hasil dari yang atas dibagi 2
    .reduce((acc, curVal) => acc + curVal);
console.log(hasil);
