// Callback

// synchronous callback
// function helo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilPesan(callback) {
//     const nama = prompt('Masukkan nama: ');
//     callback(nama);
// }

// tampilPesan(helo);

// asynchronous callback
// function getMahasiswa(url, success, error) {
//     let xhr = new XMLHttpRequest();

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 400) {
//                 error();
//             }
//         }
//     }

//     xhr.open('get', url);
//     xhr.send();
// }

// console.log('Mulai');
// getMahasiswa('mhs.json', results => {
//     const mhs = JSON.parse(results);
//     mhs.forEach(m => console.log(m.nama));
// }, () => {

// });

// console.log('selesai');

// JQuery
console.log('Mulai');
$.ajax({
    url: 'mhs.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});

console.log('Selesai');