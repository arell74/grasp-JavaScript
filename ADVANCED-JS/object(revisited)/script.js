// Membuat object di javascript

// 1. Object Literal
// PROBLEM: tidak efektif untuk object yang banyak
// let mhs = {
//     nama : 'Farel',
//     energy : 10,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat makan ${this.nama}, wareg nyah`);
//     }
// }

// let mhs2 = {
//     nama : 'Raiden',
//     energy : 10,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Selamat makan ${this.nama}, wareg nyah`);
//     }
// }


// 2. function declaration

// const methodMahasiswa = {
//     makan : function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${this.nama}, Wareg nyah`);
//     },

//     main : function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, Selamat buang waktu`);
//     },

//     tidur : function(jam) {
//         this.energy += jam * 2;
//         console.log(`Halo ${this.nama}, Oyasumi~`);
//     }
// }

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// } 

// let farel = Mahasiswa('farel', 100);
// let raiden = Mahasiswa('raiden', 100);]


// ==== Prototype =====
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;
// } 

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energy += porsi;
//     console.log(`Halo ${this.nama}, Selamat Madang`);
// }

// Mahasiswa.prototype.main = function(jam) {
//     this.energy -= jam;
//     console.log(`Halo ${this.nama}, Selamat buang waktu`);
// }

// Mahasiswa.prototype.tidur = function(jam) {
//     this.energy += jam * 2;
//     console.log(`Halo ${this.nama}, Selamat bobo!`);
// }

// let farel = new Mahasiswa('Farel', 100);


// 3. constructor function
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${this.nama}, Wareg nyah`);
//     }

//     this.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, Selamat buang waktu`);
//     }

// } 

// let farel = new Mahasiswa('farel', 100);


// ==== Versi Class =====
class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }

    makan(porsi) {
        this.energy += porsi;
        console.log(`Selamat Makan ${this.nama}, wareg nyah`);
    }

    main(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat buang buang waktu`);
    }

    tidur(jam) {
        this.energy += jam * 2;
        console.log(`Oyasuminasai @ ${this.nama}`);
    }
}

let farel = new Mahasiswa('farel', 10);
let zani = new Mahasiswa('zani', 10);