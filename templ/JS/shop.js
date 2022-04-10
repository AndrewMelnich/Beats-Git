;(function(){
    const sliderShop = $('.shop__list').bxSlider({
        pager: false,
        controls: false
    });
    
    $('.slider__shop-left').click((e) =>{
        e.preventDefault();
    
        sliderShop.goToPrevSlide();
    })
    $('.slider__shop-right').click((e)=>{
        e.preventDefault();
    
        sliderShop.goToNextSlide();
    })
})()