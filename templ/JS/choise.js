;(function(){
    const menuChoise = document.querySelector('#horizontalChoise');
    const itemsChoise = document.querySelectorAll('.choise__item');
    
    const getItemsWidth = (item) => {
        let resultWidth = 400;
        const windowWidth = window.innerWidth;
        const itemWidth = item.offsetWidth;
        const isTablet = window.matchMedia("(max-width: 768px)").matches;
        const isPhone = window.matchMedia("(max-width: 480px)").matches;
    
        if (isTablet){
            resultWidth = windowWidth - itemWidth * itemsChoise.length;
        }
        if (isPhone){
            resultWidth = windowWidth - itemWidth;
        }
        // console.log('getItemsWidth');
        return resultWidth;
    };
    
    const setItemWidth = (item, width) => {
        const itemContent = item.nextElementSibling;
        const itemText = item.firstElementChild;
        itemContent.style.width = `${width}px`;
        itemText.style.width = `${width}px`;
    };
    
    const Item1 = document.getElementsByClassName('choise__item');
    
    for (let i = 0; i < Item1.length; i++) {
        const element = Item1[i];
    
        element.addEventListener('click', function(e){
            for (let index = 0; index < Item1.length; index++) {
                if (index !== i){
                    Item1[index].classList.remove('choise__content--active');
                }            
            }
    
            if (element.classList.contains('choise__content--active')){
                element.classList.remove('choise__content--active');
            } else {
                element.classList.add('choise__content--active');
            };
        });
    };
})()