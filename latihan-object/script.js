function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if(this.penumpang.length === 0) {
            console.log('Angkot masih kosong!');
        return false;
        }

        for( var i = 0; i < this.penumpang.length; i++) {
            if ( this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (i == penumpang.length - 1) {
                console.log('Nama penumpang tidak ada di angkot');
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Farel', ['sengkahan', 'kuningan'], [], 0);
var angkot1 = new Angkot('Liebert', ['sengkahan', 'cijoho'], [], 0);