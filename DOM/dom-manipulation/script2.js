//DOM Manipulation Node

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraph Baru');

pBaru.appendChild(teksPBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const li = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');

li.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

ul.insertBefore(li, li2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Judul Baru');

h2Baru.appendChild(textH2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';

li.style.backgroundColor = 'lightgreen';

h2Baru.style.backgroundColor = 'lightgreen';