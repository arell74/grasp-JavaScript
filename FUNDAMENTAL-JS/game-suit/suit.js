
var tanya = true;

while( tanya ) {
// opsi player
var p = prompt('Pilih Antara : Gajah, Semut, Orang');

// opsi komputer
var comp = Math.random();

if ( comp < 0.34 ) {
    comp = 'Gajah';
} else if ( comp >= 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}
var hasil = '';

// generate bilangan random


// rules
if ( p == comp ) {
    hasil = 'SERI';
} else if ( p == 'Gajah') {
    // if ( comp == 'Semut') {
    //     hasil = 'Menang';
    // } else {
    //     hasil = 'Kalah';
    // }
    hasil = ( comp == 'Semut') ? 'Kalah' : 'Menang';
} else if ( p == 'Semut') {
    // if ( comp == 'Orang') {
    //     hasil = 'Kalah';
    // } else {
    //     hasil = 'Menang';
    // }
    hasil = ( comp == 'Gajah') ? 'Menang' : 'Kalah';
} else if ( p == 'Orang') {
    hasil = ( comp == 'Gajah') ? 'Kalah' : 'Menang Cihuyy'
} else {
    // if (comp == 'Gajah') {
    //     hasil = 'Kalah';
    // } else {
    //     hasil = 'Menang';
    // }
    hasil = 'Memasukkan Pilihan Yang Salah!'
}

// hasil

alert ('Kamu Memilih: ' + p + ' dan Komputer memilih: ' + comp + '\nMaka Hasilnya : ' + hasil);
tanya = confirm('Lagi?');
}

alert('Terima kasih Sudah bermain degojawa!');