function jumlahDuaKubus(a,b){
    var volumeA;
    var volumeB;
    var hasil

    volumeA = a * a * a;
    volumeB = b * b * b;

    hasil = volumeA + volumeB;

    return hasil;
}

console.log(jumlahDuaKubus(20,20));

// KODE DIATAS BISA LEBIH DISEDERHANAKAN LAGI DENGAN :

function jumlahDuaKubuss(a,b){
    return a * a * a + b * b * b;
}

console.log(jumlahDuaKubuss(20,20));