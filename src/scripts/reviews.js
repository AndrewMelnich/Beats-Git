;(function(){
    const itemRecall = document.querySelectorAll('.reviews__item');
    const itemUser = document.querySelectorAll('.reviews-users__item');
    
    itemUser.forEach(function (item) {
        item.addEventListener('click', function(){
            let currentBtn = item;
            let currentId = currentBtn.getAttribute("data-open");
            let currentTab = document.querySelector(currentId);
    
            if(!currentBtn.classList.contains('interactive__avatar--active')) {
                itemUser.forEach(function(item){
                    item.classList.remove('interactive__avatar--active')
                });
        
                itemRecall.forEach(function(item){
                    item.classList.remove('reviews__item--showing');
                });
        
                currentBtn.classList.add('interactive__avatar--active');
                currentTab.classList.add('reviews__item--showing');
            } 
        });
    });
})()