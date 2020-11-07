const classFotos = ".foto";

function selectPhoto(){
    $(this).toggleClass("selected")
}

$(document).ready(function() {
    $(classFotos).click(selectPhoto)
});