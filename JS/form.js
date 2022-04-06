






// const myForm = document.querySelector('#myForm');
// const send= document.querySelector('#sendBtn');

// send.addEventListener('click', event => {
//     event.preventDefault();

//     console.log(myForm.elements);
    // if (validateForm(myForm)) {
    //     const data = {
    //         name: myForm.elements.name.value, 
    //         // phone: myForm.elements.phone.value,
    //         // street: myForm.elements.street.value,
    //         // building: myForm.elements.building.value,
    //         // corpus: myForm.elements.corpus.value,
    //         // flat: myForm.elements.flat.value,
    //         // level: myForm.elements.level.value,
    //         // comment: myForm.elements.comment.value
    //     }
    //     const xhr = new XMLHttpRequest();
    //     xhr.responseType = 'json';
    //     xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    //     xhr.addEventListener('load', () =>{
    //         if (xhr.response.status) {
    //             console.log('Всё ок');
    //         };
    //     });
//};
// })

// function validateForm(form){
//     let valid = true;

//     if (!validateField(form.elements.name)){
//         valid = false;
//     }

//     // if (!validateField(form.elements.street)){
//     //     valid = false;
//     // }
//     // if (!validateField(form.elements.building)){
//     //     valid = false;
//     // }
//     // if (!validateField(form.elements.corpus)){
//     //     valid = false;
//     // }
//     // if (!validateField(form.elements.flat)){
//     //     valid = false;
//     // }
//     // if (!validateField(form.elements.level)){
//     //     valid = false;
//     // }
//     // if (!validateField(form.elements.comment)){
//     //     valid = false;
//     // }

//     return valid;
// }

// function validateField(field){
//     field.nextElementSibling.textContent = field.validationMessege;
//     return field.checkValidity();
// }