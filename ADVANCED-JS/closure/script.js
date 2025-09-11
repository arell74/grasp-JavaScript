// function init() {
//     var name = 'Farel'; //local variable
//     function sayMyName() { //inner function *closure
//         console.log(name); //akses ke parent variable
//     }
//     sayMyName();
// }

// init();

function init() {
    return function (nama) {
        console.log(nama);
    }
}

let panggilNama = init();
panggilNama('farel');
panggilNama('fauzan');


function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`);
    }
}

let waktuPagi = ucapkanSalam('Pagi');
let waktuMalam = ucapkanSalam('Malam');
let waktuSore = ucapkanSalam('Sore');

waktuPagi('farel');
waktuMalam('zani');


let add = (function () {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

console.log(add());
console.log(add());
console.log(add());
console.log(add());