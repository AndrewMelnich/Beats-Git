const sections = $('section');
const display = $('.maincontent');
const sideMenu = $('.fixed-menu');
const menuItems = sideMenu.find('.fixed-menu__item');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

let inScroll = false;

sections.first().addClass('active');

const counSectionPosition = sectionEq => {
    const position = sectionEq * -100;

    if (isNaN(position)){
        console.error("передано не верное значение в counSectionPosition");
        return 0;
    };

    return position;
};

const resetActiveClassForItem = (items, itemEq, activeClass) => {
    items.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
};

const performTransition = sectionEq => {
    if (inScroll) return
    const transitionOver = 1000;
    const mouseInertiaOver = 300;

    inScroll = true;

    const position = counSectionPosition(sectionEq);

    display.css({
        transform: `translateY(${position}%)`,
    });

    resetActiveClassForItem(sections, sectionEq, 'active');

    setTimeout(() =>{
        inScroll= false;

        resetActiveClassForItem(menuItems, sectionEq, 'fixed-menu__item--active'); 
    }, transitionOver + mouseInertiaOver);
    
};

const vieportScroller = () => {
const activeSection = sections.filter(".active");
const nextSection = activeSection.next();
const prevSection = activeSection.prev();

    return {
        next (){
            if (nextSection.length) {
                performTransition(nextSection.index());
            }
        },

        prev(){
            if (prevSection.length) {
                performTransition(prevSection.index());
            }
        }
    }    
}

$(window).on('wheel', e =>{
    const deltaY = e.originalEvent.deltaY;
    const scroller = vieportScroller();

    if (deltaY > 0){
        scroller.next();
        // scrollVieport('next');
    }
    if (deltaY < 0){
        scroller.prev();
        // scrollVieport('prev');
    }
    console.log(deltaY);
});

$(window).on("keydown", (e)=>{
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInputs = tagName == "input" || tagName == "textarea";
    const scroller = vieportScroller();
    
    if (userTypingInputs) return;
    
    switch(e.keyCode){
        case 38:
            scroller.prev();;
            break;
        case 40:
            scroller.next();;
            break;
    };
});

$("[data-scroll-to]").click(e =>{
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-scroll-to');
    const reqSection = $(`[data-section-id=${[target]}]`);

    performTransition(reqSection.index());
});

if (isMobile){
    //https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
    $("body").swipe ({
        swipe: function(event, direction) {
            const scroller = vieportScroller();
            let scrollDirection = "";

            if (direction === "up") scrollDirection = "next";
            if (direction === "down") scrollDirection = "prev";
            
            if (scrollDirection) {
                scroller[scrollDirection]();
            }
        }
    });   
}

