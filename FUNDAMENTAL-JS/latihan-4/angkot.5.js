var jmlangkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++) {
    if(noAngkot <= angkotBeroperasi) {
        console.log('Angkot NO. ' + noAngkot + ' Beroperasi Dengan Baik!');
    } else if (noAngkot === 8 || noAngkot === 10) {
        console.log('Angkot NO. ' + noAngkot + ' Sedang Lembur.');
    } else {
        console.log('Angkot NO. ' + noAngkot + ' Sedang Tidak Beroperasi!');
    }
}