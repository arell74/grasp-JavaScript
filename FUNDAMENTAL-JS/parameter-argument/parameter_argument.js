// function tambah(a,b) {
//     return a + b;
// }

// var hasil = tambah(1,3);

// console.log(hasil);


//argument juga bisa diisi dengan variable
// function tambah(a,b){
//     return a + b;
// }

// var a = parseInt(prompt('Masukkan Angka Ke 1 :'));
// var b = parseInt(prompt('Masukkan angka ke 2 :'));

// var hasil = tambah(a,b);

// alert(hasil);

// function tambah(a,b) {
//     return a + b;
// }

// function kali(a,b) {
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));

// console.log(hasil);

//jika parameter lebih sedikit dari argument, maka argument yang berlebihan akan diabaikan
//misal
// function tambah(a,b){
//     return a + b;
// }
// var hasil = tambah(10,10,20);
// console.log(hasil);

//jika parameter lebih banyak dari argument, maka parameter kelebihannya akan diisi dengan nilai undefined
//contoh

// function tambah(a,b,c){
//     return a + b;
// }

// var hasil = tambah(12,12);

// console.log(hasil);

//argument dan arguments itu beda!
//arguments = array yang berisi nilai yang dikirimkan saat fungsi dipanggil (pseudo varialbe)
//contoh arguments

// function tambah(){
//     return arguments;
// }

// var coba = tambah(10,20,"hi",false);

// console.log(coba);

function tambah(){
    var hasil = 0;
    for ( var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);