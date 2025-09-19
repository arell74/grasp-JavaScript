// Spread Operator

// memecah iterables menjadi single element

// const mhs = ['raiden', 'zani', 'clorinde'];
// console.log(...mhs);
// console.log(...mhs[2]);

// // menggabungkan 2 array
// const mhs1 = ['raiden', 'zani', 'clorinde'];
// const mhs2 = ['makima', 'kafka', 'evelyn'];

// // const gabung = [...mhs1, ...mhs2];
// const gabung = [...mhs1, 'lisa', ...mhs2];
// console.log(gabung);

// // meng-copy array
// const mhs = ['raiden', 'zani', 'clorinde'];
// // const copy = mhs; === ini salah, karena apa yang diganti di variable baru nanti, variable yang ini nya juga akan ikut ke ubah
// const copy = [...mhs]; === ini baru benar benar ter-copy

// copy[2] = 'lisa';
// console.log(copy);

// const liNama = document.querySelectorAll('li');
// // const mhs = [];
// // for (let i = 0; i < liNama.length; i++) {
// //     mhs.push(liNama[i].textContent);
// // }

// const mhs = [...liNama].map(m => m.textContent);

// console.log(mhs);


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(m => `<span>${m}</span>`).join('');
console.log(huruf);

nama.innerHTML = huruf;