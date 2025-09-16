function kerjakanMatkul(matkul, selesai) {
    console.log(`Sedang mengerjakan ${matkul} ... `);
    selesai();
}

function selesai() {
    // alert('selesai mengerjakan');
}

const gawe = kerjakanMatkul('mtk', selesai);

// function kerjakanMatkul itu bisa disebut Higher Order Function
// function selesai itu bisa disebut Callback

function repeatLog(n) {
    for ( let i = 0; i < n; i++) {
        console.log(i);
    }
}

repeatLog(10);

function repeat(n, action) {
    for ( let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(10, console.log);
repeat(3, alert);