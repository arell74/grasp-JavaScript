// Callback

// synchronous callback
function helo(nama) {
    alert(`Halo ${nama}`);
}

function tampilPesan(callback) {
    const nama = prompt('Masukkan nama: ');
    callback(nama);
}

tampilPesan(helo);