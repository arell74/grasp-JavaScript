var penumpang = ['farel', undefined, 'zani'];
var tambahPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for ( var i = 0; i < penumpang.length; i++) {
            //jika ada kursi kosong
            if(penumpang[i] == undefined ) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            //jika ada penumpang yang namanya sama
            else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + ' Sudah ada didalam angkot')
            }

            //jika seluruh kursi terisi
            else if( i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
}