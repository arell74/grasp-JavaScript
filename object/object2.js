//membuat object
// 1. object literal
var mhs1 = {
    nama : 'farel',
    nim : 2223573297,
    alamat : 'jawa barat, kuningan'
}

var mhs2 = {
    nama : 'raiden',
    nim : 222310063090,
    alamat : 'teyvat, inazuma'
}

// 2. function decleration
function buatObjectMhs(nama, nim, alamat) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.alamat = alamat;
    return mhs;
}

var mhs3 = buatObjectMhs('zani', '222310063900', 'rinascita city');
var mhs4 = buatObjectMhs('lisa', '089535356765', 'teyvat, mondstadt');

// 3. Constructor
function Mahasiswa(nama, nim, alamat) {
    //var this = {};    ->    ini jika dibandingkan dengan function declaration
    this.nama = nama;
    this.nim = nim;
    this.alamat = alamat;
    //return this;
}

var mhs5 = new Mahasiswa('clorinde', '0895357513299', 'teyvat, fontaine');