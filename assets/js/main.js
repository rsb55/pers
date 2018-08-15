

//document.getElementById(id+"Button").onclick = function() { HideError(id); }



function scrollToDiv(destiny){
    $('html,body').animate({
        scrollTop: $(destiny).offset().top},
        'slow');
    }