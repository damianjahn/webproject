
$(document).ready(function (){
    console.log("loaded");
    $.material.init();

    $(document).on("submit", "#refister-form", function (e){
        e.preventDefault();
        console.log("form submitted");
        var form = $('#register-form').serialize();
        $.ajax({
            url: '/postregistration',
            type: 'POST',
            data: form,
            success: function (response){
                console.log(response);
            }
        })
    });
});
