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

// let mahasiswa = ['raiden', 'zani', 'kafka'];
// // let jumlahHuruf =  mahasiswa.map(nama => nama.length);
// // console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf : nama.length}));
// console.table(jumlahHuruf);

// constructor function
// const Mahasiswa = function() {
//     this.nama = 'zani';
//     this.umur = 20;

//     this.sayHello = function() {
//         console.log(`Halo nama saya ${this.nama}, umur ${this.umur}`);
//     }
// }

// const zani = new Mahasiswa();

//arrow function
// const Mahasiswa = function() {
//     this.nama = 'raiden';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`Halo nama saya ${this.nama}, umur ${this.umur}`);
//     }
// }

// const raiden = new Mahasiswa();

// object literal
// const Mahasiswa = {
//     nama : 'clorinde',
//     umur : 20,
//     sayHello : () => {
//         console.log(`Halo nama saya ${nama}, umur ${umur}`);
//     }
// }

// const Mahasiswa = function() {
//     this.nama = 'lisa';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`Halo, saya ${this.nama}, umur ${this.umur}`);
//     } 

//     setInterval(() => {
//         console.log(this.umur++);
//     }, 500);
// }

// const lisa = new Mahasiswa();

const box = document.querySelector('.box');
box.addEventListener('click', function(){
    let satu = 'size';
    let dua = 'caption'

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600);
});