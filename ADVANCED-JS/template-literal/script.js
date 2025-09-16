// Template literal / string literal

const nama = 'raiden';
const umur = 20;

console.log(`Halo nama saya ${nama}, umur ${umur}`);

let a = 10;
let b = 15

//embedded expression
// console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`)
const x = 10;
console.log(`${(x % 2 == 0 ? 'genap' : 'ganjil')}`);
console.log(`jika a = 10 dan b = 15 maka hasil penjumlahannya adalah : ${a + b}, bukan ${2 *a + b}`);

const mhs = {
    nama : 'Zani',
    umur : 20,
    nrp : 222310063090,
    email : 'zani4951@gmail.com'
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span>${mhs.nrp}</span>
</div>`;

console.log(el);