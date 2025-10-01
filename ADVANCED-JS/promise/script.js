// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
//     success: movies => console.log(movies)
// });

// fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers')
//     .then(response => response.json())
//     .then(response => console.log(response));

// contoh 1

// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati) {
//         resolve('Janji ditepati Mantap');
//     } else {
//         reject('Omdooooo');
//     }
// });

// janji1
//     .then(response => console.log('OK! ' + response))
//     .catch(response => console.log('GAGAL ' + response));


// contoh 2

// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu');
//         }, 2000);
//     }
// });

// console.log('Mulai');

// janji2
//     .finally(() => console.log('Selesai Menunggu'))
//     .then(response => console.log('OK! ' + response))
//     .catch(response => console.log('Omdo ' + response));
// console.log('selesai');


// ==== Menjalankan Beberapa Promise Sekaligus =====

const anime = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Shingeki no Kyojin',
            Author: 'Hajime Isayama',
            MC: 'Eren Yeager'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            desa: 'Windusengkahan',
            temperatur: 20,
            kondisi: 'Cerah Berawan'
        }])
    }, 500);
});

Promise.all([anime, cuaca])
    .then(response => {
        const [anime, cuaca] = response;
        console.log(anime);
        console.log(cuaca);
    })