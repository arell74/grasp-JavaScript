// for .. of
// const mhs = ['zani', 'raiden', 'clorinde'];

// for(i = 0; i < mhs.length; i++){
//     console.log(mhs[i]);
// }

// mhs.forEach(m => console.log(m));

// for( const m of mhs){
//     console.log(m);
// }

// //String
// const nama = 'raiden';
// for( const n of nama){
//     console.log(n);
// }

// mhs.forEach((m, i) => {
//     console.log(`nama saya ${m} mahasiswa ke: ${i + 1}`)
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} istriku yang ke ${i + 1}`);
// }

// const liNama = document.querySelectorAll('.nama');

// // liNama.forEach(n => console.log(n.textContent));
// for (n of nama) {
//     console.log(n.innerHTML);
// }

// function jumlahAngka() {
//     // return arguments.reduce((a, i) => a + i);
//     let jumlah = 0;
//     // arguments.forEach(a => jumlah += a);
//     for( a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5));

// for .. in
const mhs = {
    nama: 'farel',
    umur: 18,
    email: 'farelfauzan@gmail.com'
}

for (m in mhs) {
    console.log(m);
    console.log(mhs[m]);
}