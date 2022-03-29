const teamName = document.querySelectorAll('.team__name');
const teamDesc = document.querySelectorAll('.team__desc');
// let List = document.getElementById('teamList');
console.log('teamName.length', teamName.length);

function closeEveryItems(){
    for (let i = 0; i < teamName.length; i++) {
        const button = teamName[i];

        const desc = button.nextElementSibling;
        desc.classList.remove('team__desc--active');
        button.classList.remove('team__name--active');        
    }
}

// List.addEventListener('click', function(event) {   
//     const target = event.target; 
//     console.log('target is', target);
    
//     if (target.classList.contains('team__name')) {
//         const desc = target.nextElementSibling;
//         if (desc.classList.contains('.team__desc--active')) {
//             closeEveryItems();
//         } else{
//             closeEveryItems();
//             desc.classList.add('team__desc--active');
//             target.classList.add('team__name--active');
//         }
//     }

// });

for (let index = 0; index < teamName.length; index++) {
    const button = teamName[index];
    
    button.addEventListener('click', function(event) {   
        const target = event.target; 
        console.log('target is', target);
        if (teamName[index].classList.contains('team__name--active') && teamDesc[i].classList.contains('team__desc--active')) {
            closeEveryItems()
            console.log('закрыл описание');
    
        } else {
            closeEveryItems()
            teamDesc[index].classList.add('team__desc--active');
            teamName[index].classList.add('team__name--active');
            console.log('открыл описание');
        }
    });
}


// for (let i = 0; i < teamName.length; i++) {
//     const button = teamName[i];
    
//     button.addEventListener('click', function(event) {   
//         const target = event.target; 
//         console.log('target is', target);
//         if (teamName[i].classList.contains('team__name--active') && teamDesc[i].classList.contains('team__desc--active')) {
//             teamDesc[i].classList.remove('team__desc--active');
//             teamName[i].classList.remove('team__name--active');
//             console.log('закрыл описание');
    
//         } else {
//             teamDesc[i].classList.add('team__desc--active');
//             teamName[i].classList.add('team__name--active');
//             console.log('открыл описание');
//         }
//     });
// }

    // const buttons = document.querySelectorAll('.team__name');

    // for (let i = 0; i < buttons.length; i++) {
    //     const button = buttons[i];
        
    //     button.addEventListener('clic', function (event){
    //         event.preventDefault();
            
    //         const target = event.target;
    //         const description = target.nextElementSibling;

    //         description.classList.add('team__name--active');
    //     })
    // }
