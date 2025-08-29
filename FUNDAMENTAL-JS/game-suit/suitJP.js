var tanya = true;
while ( tanya ) {

var p = prompt('Ketik antara: Kertas, Batu, Gunting');
var hasil = '';
var comp = Math.random();

if( comp < 0.34) {
    comp = 'Kertas';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'Batu';
} else {
    comp = 'Gunting';
}

if( p == comp ){
    hasil = 'SERI';
} else if (p == 'Kertas') {
    hasil = ( comp == 'Batu') ? 'Menang' : 'Kalah';
} else if (p == 'Batu') {
    hasil = ( comp == 'Gunting') ? 'Menang' : 'Kalah';
} else if (p == 'Gunting') {
    hasil = ( comp == 'Kertas') ? 'Menang' : 'Kalah';
} else {
    hasil = 'Kamu Milih Apaan njir';
}

alert('Kamu mengetik: ' + p + ' dan Komputer Memilih: ' + comp + '\nMaka Hasilnya..');
if ( hasil == 'Menang') {
    alert('Menang GG!!!!');
} else if( hasil == 'Kalah') {
    alert('Kalah Awokwokwoakwaok Mampua!');
} else if( hasil == 'SERI'){
    alert('Seri euy')
}
else {
    alert(hasil);
}

tanya = confirm('Lagi?');
} 
alert('Thanks For Playing:D')