var jmlangkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot NO. ' + noAngkot + ' Beroperasi dengan baik!');
    } else {
        console.log('Angkot NO. ' + noAngkot + ' Sedang tidak beroperasi!');
    }
}