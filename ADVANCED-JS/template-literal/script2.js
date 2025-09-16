// const mhs = {
//     nama : 'zani',
//     umur : 20,
//     nrp : 222310063090,
//     email : 'zani4951@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`

// const mhs = [
//     {
//         nama : 'raiden',
//         email : 'raidensho@gmail.com'
//     },
//     {
//         nama : 'zani',
//         email : 'zani@gmail.com'
//     },
//     {
//         nama : 'kafka',
//         email : 'kafka@gmail.com'
//     },
// ]

// looping
// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;

// conditionals
// ternary
// const lagu = {
//     nama : 'Summer Night',
//     penyanyi : 'Jeon jin hee',
//     feat : 'wave to earth'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.nama} ${lagu.feat ? `(${lagu.feat})` : ''}</li>
//         <li>${lagu.penyanyi}</li>
// </div>`

// document.body.innerHTML = el;

// nested
// html bersarang

const mhs = {
    nama : 'Han sooyoung',
    email : 'hsy123@gmail.com',
    semester : 5,
    mataKuliah : [
        'Rekayasa Web',
        'Analisis Novel dan perancangan skenario',
        'Probabilitas dalam skenario berlaku',
    ]
};

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester">Semester : ${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    <ul>
    ${cetakMataKuliah(mhs.mataKuliah)}
    </ul>
</div>`

document.body.innerHTML = el;
