// const p3 = document.querySelector('.p3');

// function ubahWarna() {
//     p3.style.backgroundColor = 'lightblue';
// }
// function ubahWarna2() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarna2;

// const p4 = document.querySelector('section#b p');
// p4.innerHTML = 'Tambah Item';
// p4.addEventListener('click', function() {
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textBaru = document.createTextNode('Item Baru');
//     liBaru.appendChild(textBaru);
//     ul.appendChild(liBaru);
// });

// ======== Perbedaan event handler & event listener =========

//event handler
const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
//     p3.style.color = 'red';
// }

//event listener
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function() {
    p3.style.color = 'white';
});

const p4 = document.querySelector('section#b p');
p4.addEventListener('mouseenter', function() {
    p4.style.backgroundColor = 'lightblue';
    p4.innerHTML = 'Kamu mengarahkan mouse kesini :>'
});
p4.addEventListener('mouseleave', function() {
    p4.style.backgroundColor = 'yellow';
    p4.innerHTML = 'Noooo dont leave meeeeeee :(';
});