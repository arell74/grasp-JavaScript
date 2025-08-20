var jmlangkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// while(noAngkot < angkotBeroperasi) {
//     console.log('angkot ke ' + noAngkot + ' beroperasi dengan baik!');
//     noAngkot++;
// }

// for(angkotBeroperasi; angkotBeroperasi <= jmlangkot; angkotBeroperasi++) {
//     console.log('angkot ke ' + angkotBeroperasi + ' tidak beroperasi dengan baik');
// }

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot NO. ' + noAngkot + ' Beroperasi dengan baik');
    noAngkot++;
}

for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlangkot; noAngkot++) {
    console.log('Angkot NO. ' + noAngkot + ' Tidak Sedang beroperasi');
}