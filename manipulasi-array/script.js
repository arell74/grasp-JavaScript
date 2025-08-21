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
