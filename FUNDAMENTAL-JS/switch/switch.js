// var angka = parseInt(prompt('Masukkan Angka :'));

// if (angka === 1) {
//     alert('anda memasukan angka 1');
// } else if(angka === 2) {
//     alert('anda memasukan angka 2');
// } else if(angka === 3) {
//     alert('anda memasukan angka 3');
// } else {
//     alert('yeu jawa');
// }

// var angka = prompt('masukkan angka :');

// switch ( angka ) {
//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukan angka 2');
//         break;
//     case '3' : 
//         alert('anda memasukan angka 3');
//     default :
//         alert('yeu jawa');
//         break; 
// }

var item = prompt('Masukan Makanan / Minuman \n Cth: Nasi, Daging, Bajigur, Torpedo, Hamburger');

switch ( item ) {
    case 'Nasi' :
    case 'Daging' :
    case 'Bajigur' :
        alert('Makanan / Minuman SEHAT👍');
        break;
    case 'Torpedo' :
    case 'Hamburger' :
        alert('Makanan / Minuman TIDAK SEHAT👎');
        break;
    default :
        alert('wthell was that');
        break;
}
