function getPilihanComp() {
    const comp = Math.random();

    if( comp < 0.34 ) { return 'gajah' } 
    if ( comp >= 0.34 && comp < 0.67) { return 'orang'; } 
    return 'semut';
}

function getHasil(comp, player) {
    if( player == comp) return 'SERI!';
    if( player == 'gajah') return (comp == 'orang') ? 'MENANG' : 'KALAH';
    if( player == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
    if( player == 'orang') return (comp == 'semut') ? 'MENANG' : 'KALAH';
}

const pGajah = document.querySelector('.gajah');
pGajah.addEventListener('click', function() {
    const pilihanComp = getPilihanComp();
    const pilihanPlayer = pGajah.className;
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    const imgComputer = document.querySelector('.img-komputer');
    imgComputer.setAttribute('src', 'img/' + pilihanComp + '.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
})

