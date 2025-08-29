var mahasiswa = {
    nama : 'farel',
    lulus : true,
    IPSemester : [3.90, 3.90, 3.90, 3.90, 3.90],
    IPKumulatif : function() {
        var total = 0;
        var ips = this.IPSemester;
        for (var i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total/ips.length;
    }
}

mahasiswa.IPKumulatif();

//membuat object
var mhs = {}
//bisa ditulis didalam console dan juga bisa ditulis di codingan disini

var mahasiswaa = {
    nama : 'farel',
    umur : 18,
    ips : [3.90, 3.90, 3.90, 3.90, 3.90],
    alamat : {
        jalan : "Mukti",
        kota : "kuningan",
        provinsi : "jawa barat"
    }
}