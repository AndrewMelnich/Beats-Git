;(function(){
    const teamName = document.querySelectorAll('.team__name');
    const teamDesc = document.querySelectorAll('.team__desc');
    
    function closeEveryItems(){
        for (let i = 0; i < teamName.length; i++) {
            const button = teamName[i];
    
            const desc = button.nextElementSibling;
            desc.classList.remove('team__desc--active');
            button.classList.remove('team__name--active');        
        }
    }
    
    for (let index = 0; index < teamName.length; index++) {
        const button = teamName[index];
        button.addEventListener('click', function(event) {   
    
            if (teamName[index].classList.contains('team__name--active') && teamDesc[index].classList.contains('team__desc--active')) {
                closeEveryItems()
            } else {
                closeEveryItems()
                teamDesc[index].classList.add('team__desc--active');
                teamName[index].classList.add('team__name--active');
            }
        });
    }
})()
