
$(document).ready(function (){
    console.log("loaded");
    $.material.init();

    $(document).on("submit", "#refister-form", function (e){
        e.preventDefault();
        console.log("form submitted");
    });
});
