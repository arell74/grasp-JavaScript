// var a = 8;
// var b = 3;

// var volumeA;
// var volumeB;

// var hasil;

// volumeA = a * a * a;
// volumeB = b * b * b;

// hasil = volumeA + volumeB;

// console.log(hasil);


function jumlahDuaKubus(a, b) {
    var hasil, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;

    hasil = volumeA + volumeB;

    return hasil;
}

console.log(jumlahDuaKubus(8, 3));
console.log(jumlahDuaKubus(10, 7));