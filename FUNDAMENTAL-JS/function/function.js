var nama = 'farel fauzan';

console.log(nama.charAt(7));
//charAt adalah fungsi dari javascript atau built-in function

var bil = Math.random();
console.log(bil);

//fungsi yang di buat oleh user

//function declaration
function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;

    return total;
}

//function expression
var jumlahDuaBilangann = function(a, b) {
    var total;
    total = a + b;

    return total;
}

alert(jumlahDuaBilangan(1,9));
alert(jumlahDuaBilangan(9,20));
alert(jumlahDuaBilangan(17,90));