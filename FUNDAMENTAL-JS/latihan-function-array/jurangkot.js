var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        //tambah penumpang
        penumpang.push(namaPenumpang);
        //kembalikan isi array keluar function
        return penumpang;
    } else {
        //telunsuri kursi awal
        for (var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if(penumpang[i] == undefined) {
                //tambah penumpang
                penumpang[i] = namaPenumpang
                //kembalikan isi array dan keluar function
                return penumpang;
            } 
            //jika nama penumpang ada yang sama
            else if (namaPenumpang == penumpang[i]) {
                console.log(namaPenumpang + ' Sudah berada di angkot');
            //kembalikan isi array & keluar dari functiony
            return penumpang;
            }
            //jika kursi sudah penuh
            else if (i == penumpang.length -1 ) {
                penumpang.push(namaPenumpang);
                //kembalikan isi array & keluar function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong');
        //kembalikan isi array
    } 
    //ketika sudah ada isinya
    else {
        for (var i = 0; i < penumpang.length; i ++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } 
            //jika penumpang tidak ada didalam angkot
            else if ( i == penumpang.length - 1) {
                console.log('Nama penumpang tidak ada didalam angkot');
                return penumpang;
            }
        }
    }
    return penumpang;
    //jika ada penumpang yang namanya sesuai maka akan diganti undefined
}