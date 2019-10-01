(function() {
    let widthWindow = document.documentElement.clientWidth;
    let headerInform = $('.header_information__wrapper');
    let headerLang = $('.change_lang__wrapper');

    if (widthWindow <= 768) {
        $('#navbar').append(headerInform);
        $('.top_navigation').append(headerLang);
    }

    function removeError() {
        $('#main-form').removeClass('error')
    }

    function addError() {
        $('#main-form').addClass('error');
    }

	$('#next_question').click(function(event){
        event.preventDefault();
        let firstCheckboxs = $(".first_checkbox");
        let firstChecked = false;
        $(firstCheckboxs).each(function () {
            if ($(this).prop('checked')) {
                firstChecked = true;
            } 
        }); 

        if(firstChecked === false) {
            addError();
            setTimeout(removeError,800);
        } else {
            $('#first-step').slideUp("slow");
            $('#second-step').slideDown("slow");
        }  
    });

    $('.form_button__next').click(function(event){
        event.preventDefault();
        let secondCheckboxs = $(".second_checkbox");
        let secondChecked = false;
        $(secondCheckboxs).each(function () {
            if ($(this).prop('checked')) {
                secondChecked = true;
            } 
        }); 

        if(secondChecked === false) {
            addError();
            setTimeout(removeError,800);
        } else {
            $('#second-step').slideUp("slow");
            $('#third-step').slideDown("slow");
            setTimeout(openStepFourth, 3000);
        }
    });

    $('.form_button__back').click(function(event){
        event.preventDefault();
        $('#second-step').slideUp("slow");
        $('#first-step').slideDown("slow");
    });

    function openStepFourth() {
        $('#third-step').slideUp("slow");
        $('#fourth-step').slideDown("slow");
    }

    
})();

