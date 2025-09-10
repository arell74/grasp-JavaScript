// Membuat object di javascript

// 1. Object Literal
let mhs = {
    nama : 'Farel',
    energy : 10,
    makan : function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`Selamat makan ${this.nama}, wareg nyah`);
    }
}


// 2. function declaration

// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Selamat makan ${this.nama}, Wareg nyah`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, Selamat buang waktu`);
//     }

//     return mahasiswa;
// } 

// let farel = Mahasiswa('farel', 100);


// 3. constructor function
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Selamat makan ${this.nama}, Wareg nyah`);
    }

    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat buang waktu`);
    }

} 

let farel = new Mahasiswa('farel', 100);
