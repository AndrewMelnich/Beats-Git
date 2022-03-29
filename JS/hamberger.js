const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector('.menu');
const lock = document.querySelector('body');

hamburger.addEventListener('click', e => {
    if (hamburger.classList.contains('hamburger--active') && menu.classList.contains('menu--active') && lock.classList.contains('lock')) {
        hamburger.classList.remove('hamburger--active');
        menu.classList.remove('menu--active');
        lock.classList.remove('lock');
        console.log('close бургер =|');

    } else {
        hamburger.classList.add('hamburger--active');
        menu.classList.add('menu--active');
        lock.classList.add('lock');
        console.log('open бургер =)');
    }
})

