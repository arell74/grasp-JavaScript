// Destructuring function

// function perjumlahanPerkalian(a, b) {
//     return[a + b, a * b];
// }

// const [jumlah, kali] = perjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);

// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(2,3);
// console.log(tambah);

// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const { bagi, kurang, kali, tambah} = kalkulasi(2,4);
// console.log(bagi);

const mhs1 = {
    nama: 'farel',
    umur: 18,
    nilai: {
        tugas: 100,
        uts: 100,
        uas: 100
    }
};

function panggilMhs({nama, umur, nilai: {tugas, uts, uas}}) {
    return (`Halo nama saya ${nama}, umur ${umur} tahun.
nilai uas saya: ${uas}`);
}

console.log(panggilMhs(mhs1));