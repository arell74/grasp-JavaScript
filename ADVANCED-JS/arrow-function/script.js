// function expression
// const tampilNama = function(nama) {
//     return `Halo ${nama}`;
// }

// console.log(tampilNama('raiden'));

// const tampilNama = (nama) => { return `Halo ${nama}`; }

// console.log(tampilNama('raiden'));

// const tampilNama = (waktu, nama) => {
//     return `Halo, selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('siang', 'raiden'));

//implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('raiden'));

// const tampilNama = () => 'Hello World';
// console.log(tampilNama());

let mahasiswa = ['raiden', 'zani', 'kafka'];
// let jumlahHuruf =  mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf : nama.length}));
console.table(jumlahHuruf);
