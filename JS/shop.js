const leftBtn = document.querySelector('#shopLeft');
const rightBtn = document.querySelector('#shopRight');
const itemsList = document.querySelector('#shopList');
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll('.shop__item');
const slider = document.querySelectorAll('.slider__shop');
const itemsWidth = `${940}px`;

const minRight = 0;
const itemWidth = getComputedStyle(items[0]).width;
const sliderWidth = getComputedStyle(slider[0]).width;
const step = parseInt(itemWidth);
const widthSlider = parseInt(sliderWidth);;
const preShowItems = widthSlider / step;
const maxRight = (items.length - preShowItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

shopRight.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    } 
    // else {
    //     currentRight -= step;
    //     itemsList.style.right = `${currentRight}px`;
    // }
});

shopLeft.addEventListener('click', e => {
    e.preventDefault();

    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    } 
    // else {
    //     currentRight += step;
    //     itemsList.style.right = `${currentRight}px`;
    // }
});
