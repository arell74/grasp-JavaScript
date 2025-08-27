export function makeCoffee(callback) {
    const estimationTime = 5000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Pesanan dibuat, Silahkan menunggu sekitar ${inSecond} detik`);

    setTimeout(() => {
        console.log('Pramusaji Selesai Membuat kopi!');

        callback();
    }, estimationTime);
}

export function sendCoffee(callback) {
    const estimationTime = 3000;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Pesanan sedang diantarkan dalam ${inSecond} detik`);

    setTimeout(() => {
        console.log('Pesanan Telah sampai ke meja');

        callback();
    }, estimationTime);
}

export function bayarJir(callback) {
    const estimationTime = 10000;
    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Silahkan bayar dalam waktu ${inSecond} detik awokawoak!`);

    setTimeout(() => {
        console.log('Sip Transaksi sudah berhasil!');

        callback();
    }, estimationTime);
}