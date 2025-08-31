//Latihan DOM Query Selector
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '20px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'Ini diubah dari DOM Query selector coyy';

// const allP = document.querySelectorAll('p');
// for ( let i = 0; i < allP.length; i++) {
//     allP[i].style.backgroundColor = 'lightblue';
// }





const nodeRoot = document.getElementById('b');
const p4 = nodeRoot.querySelector('p');
p4.style.backgroundColor = 'lightblue';