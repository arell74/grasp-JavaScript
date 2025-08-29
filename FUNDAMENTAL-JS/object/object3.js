// ====== membuat object =======

// 1. function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }
// this.halo();
//this mengembalikan object global

// 2. object literal
// var obj = {a : 10, nama : 'farel'}
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// 3. constructor function
// function Halo(){
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembalikan object yang baru dibuat

// ===== KONSEP THIS =========
// console.log(this);