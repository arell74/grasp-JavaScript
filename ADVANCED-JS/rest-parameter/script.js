// rest parameter

// function myFunc() {
//     // return myArgs;
//     // return Array.from(arguments);
//     return [...arguments];
// }

// console.log(myFunc(1,2,3,4,5))

// function jumlahkanAngka(...angka) {
//     // let total = 0;
//     // for (const a of angka) {
//     //     total += a;
//     // }

//     // return total;



//     return angka.reduce((a,b) => a + b);
// }

// console.log(jumlahkanAngka(1,2,3,4,5,6,7));

// array distructuring
const kelompok1 = ['raiden', 'zani', 'clorinde', 'lisa', 'evelyn'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);

// object distructuring
const team = {
    mobile: 'raiden',
    frontend: 'zani',
    backend: 'clorinde',
    pm: 'makima'
}

const { mobile, ...myTeam } = team;
console.log(mobile);

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type);
}
console.log(filterBy('number', 1, 2, 'farel', false, 20, true, 'zani'));