const container = document.querySelector('.container');
const mains = document.querySelector('.main');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
    if(e.target.className == 'thumb') {
        mains.src = e.target.src;
        mains.classList.add('fade');
        setTimeout(function(){
            mains.classList.remove('fade');
        }, 500);

        thumbs.forEach(function(thumb) {
            // if(thumb.classList.contains('active')) {
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        });

        e.target.classList.add('active')
    }
})