const validateFields = (form, fieldArray) =>{
    fieldArray.forEach((field) => {
        field.removeClass("form__input--error");
        if (field.val().trim() === "") {
            field.addClass("form__input--error");
        }
    });

    const errorField = form.find(".form__input--error");

    return errorField.length === 0;
}

$('.form').submit( e => {
    e.preventDefault();

    
    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name='phone']");
    const comment = form.find("[name='comment']");
    const to = form.find("[name='to']");

    const modal =$("#modal");
    const content = modal.find(".modal__content");

    const isValid = validateFields(form, [name, phone, comment, to]);

    if (isValid){
       const request = $.ajax({
            url: "https://webdev-api.loftschool.com/sendmail",
            method: "post",
    
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                to: to.val()
            },

            // success: data =>{
                
            // },

            // error: data =>{
                
            // }
        }); 

        request.done(data =>{
            console.log(data);
                content.text(data.message)
                
            $.fancybox.open({
                src: "#modal",
                type: "inline"
            });
        });

        request.fail(data=>{
            const message = data.responseJSON.message;
            content.text(message);
            console.log(data);

            $.fancybox.open({
                src: "#modal",
                type: "inline"
            });
        });
        
        // request.always(()=>{
        //     $.fancybox.open({
        //         src: "#modal",
        //         type: "inline"
        //     }); 
        // })
    }

    // $.ajax({
    //     url: "https://webdev-api.loftschool.com/sendmail",
    //     method: "post",

    //     data: {
    //         name: name.val(),
    //         phone: phone.val(),
    //         comment: phone.val(),
    //         to: to.val()
    //     }
    // }); 

    // $.fancybox.open({
    //     src: "#modal",
    //     type: "inline"
    // });
});



$('.app-modal-close').click(e =>{
    e.preventDefault();

    $.fancybox.close();
});