//DOM Selection

const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#9663';
judul.innerHTML = 'Farel Fwzan';

const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue';
for ( i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'ini diubah dari js coy'
