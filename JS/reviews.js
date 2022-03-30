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



// const dataTargetRecall = document.querySelector('data-linked-with')

// console.log(dataTargetRecall);
// const getAtr = document.querySelector('li') => {
//     let target = '';

//     for (let i = 0; i < stringToFilter.length; i++) {
//         const currentAtr = stringToFilter[i];

//         if (dataTarget.includes(currentAtr)) {
//             target += currentAtr;
//         }
//     }
//     return target;
// }

// console.log(getAtr(itemUser));

// function closeEveryItems(){
//     for (let index = 0; index < itemUser.length; index++) {
//         const button = itemUser[index];
//         var btn = button;

//         button.classList.remove('interactive__avatar--active'); 

        // for (let i = 0; i < itemRecall.length; i++) {
        //     const buttonR = itemRecall[i];
    
        //     buttonR.classList.remove('reviews__item--showing');        
        // }
//     }
// }

// const findBlocksData = function (){
//     document.querySelectorAll('[data-linked-with = one]').length;
// }

// console.log('findBlocksData', findBlocksData);
// if (document.querySelectorAll('[data-linked-with = one]').length){
//     console.log();
// }

// for (let i = 0; i < itemUser.length; i++) {
//     const button = itemUser[i];
    
//     button.addEventListener('click', function(event) {   
//         // const target = event.target; 
//         // console.log('target is', target);
//         if (itemUser[i].classList.contains('interactive__avatar--active')){
//             // closeEveryItems()
//             console.log('закрыл описание');
    
//         } else {
//             closeEveryItems()

//             itemUser[i].classList.add('interactive__avatar--active');
//             console.log('открыл описание');
//         }
//     });
// }


