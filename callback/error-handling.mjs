export function makeCoffee(name, callback) {
    const estimationTime = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Mohon menunggu waktu sekitar ${inSecond}`);

    setTimeout(() => {
        const number = Math.random();
        if ( number > 0.3) {
            isSuccess = true;
        }

        if (!isSuccess) {
            callback(new Error('Gagal membuat kopi :('), null);
            return;
        }

        console.log('Pramusaji selesai membuat kopi');
        callback(null, name);
    }, estimationTime);
}

export function sendCoffee(name, callback) {
    const estimationTime = 5000;
    let isSuccess = false;

    const inSecond = Math.ceil(estimationTime / 1000);
    console.log(`Pramusaji sedang mengantarkan kopi perkiraan waktu ${inSecond}`);
    
    setTimeout(() => {
        const number = Math.random();
        if ( number > 0.3) {
            isSuccess = true;
        }

        if (!isSuccess) {
            callback(new Error('KOPINYA TUMPAHHHH'), null);
            return;
        }

        console.log('Kopi berhasil diantarkan! hell yeahh');
        callback(null, name);

    }, estimationTime);
}