//======= manipulasi array =======

//menambah isi array
var arr = [];
arr[0] = "a",
arr[1] = 1,
arr[2] = true

console.log(arr);

//menghapus isi array
var arrh = ["raiden", "zani", "farel"];
arrh[2] = undefined

console.log(arrh);

//menampilkan isi array
var arrTampil = ["raiden", "zani", "clorinde", "nanaka"];

for (i = 0; i < arrTampil.length; i++) {
    console.log('waifu ke-' + (i+1) + ' : ' + arrTampil[i]);
}

//======= Method pada array =======

var arrs = ['raiden', 'zani', 'clorinde']
// 1. join
// console.log(arrs.join(' - '));

// 2. push & pop
arrs.push('nanaka', 'lisa'); //push ini akan menambah elemen di akhir array

arrs.pop(); //pop ini akan menghapus nilai array paling akhir
arrs.pop();

// * CATATAN: PUSH BISA LANGSUNG MEMASUKKAN LEBIH DARI SATU ELEMEN SEDANGKAN
// POP HARUS DIPANGGIL METHOD NYA SATU PER SATU

// 3. unshift & shift
// * CATATAN: MIRIP SEPERTI PUSH & POP DIATAS, BEDANYA INI MENAMBAH/MENGHAPUS
// ELEMEN YANG ADA DI AWAL ARRAY
arrs.unshift('mikasa');
arrs.shift();
console.log(arrs.join(' - '));

// SHIFT DAN POP INI BENAR BENAR MENGHILANGKAN ELEMENNYA BUKAN MENGGANTI NYA JADI UNDEFINED!

// 4. Splice

var arrSplice = ['Apocalyps', 'Seasons', 'Kizuato', 'if only', 'yes to heaven'];
// arrSplice.splice(1, 2, 'Red Swan', 'M.');
// console.log(arrSplice.join(' - '));

// 5. Slice (awal dan akhir)

var arrSlice = arrSplice.slice(1,4);
console.log(arrSlice.join());

// 6. foreach
var angka = [1,2,3,4,9,6,10,8,20,7,5];
var nama = ['raiden', 'zani', 'clorinde'];

// for (i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// var cetak = function(e) {
//     console.log(e);
// }

// angka.forEach(cetak);

// angka.forEach(function(e){
//     console.log(e);
// });

nama.forEach(function(e, i){
    console.log('Waifu ke-' + (i+1) + ' adalah: ' + e);
});

// 7. map
var angka2 = angka.map(function(e){
    return e * 2;
})
console.log(angka2.join('+'))

console.log(angka.join() + ' angka ori')

//sort = mengurutkan
angka.sort(function(a,b){
    return a-b;
});
console.log(angka.join() + ' ini sort');

//filter
// var angkas = [3,4,5,6,7,1,2,10,9];
// var angkasa = angkas.filter(function(x){
//     return x > 5;
// });
// console.log(angkasa.join('-'));

//find
var angkas = [3,4,10,5,6,7,1,2,9];
var angkasa = angkas.find(function(x){
    return x > 5;
});
console.log(angkasa);
