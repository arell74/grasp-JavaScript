//global scope / window scope
var a = 1;

function tes(){
    var b = 2;
    console.log(a);
}

tes();
// console.log(b) // jika ini dijalankan maka tidak bisa karena variable b ada di dalam function

//simpulan : di dalam function kita bisa pakai variable global (a). tapi diluar function kita tidak bisa pakai
//variable yang ada di dalam function

function nameConflict(){
    var a = 2;
    console.log(a); //meskipun ada variable global yang sama, tetap tidak akan berpengaruh, nilai yang diambil
    //akan dari variable yang ada di dalam function

    console.log(window.a); //ini kondisi jika ingin mengambil variable yang sama akan tetapi nilai nya ingin
    //mengambil dari variable global

    // a = 3 ::: ini kode jika ingin menimpa variable global
    // jika ingin membuat variable lokal tanpa "var" maka bisa menggunakan "use strict"; di bagian paling atas
}

nameConflict();

console.log(a); //nilai variable a akan tetap mengambil dari variable global, meskipun ada variable yang
//sama di dalam sebuah function

console.log('-------------------');

var s = 3;

function testt(s) {
    console.log(s);
}

testt(2); //argument akan otomatis membuat var di dalam lokal
testt(s); // ini akan mengambil variable dari global
console.log(s); //mengacu ke variable global