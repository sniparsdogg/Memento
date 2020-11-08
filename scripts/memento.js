const classFotos = ".foto";

function selectPhoto(){
    $(this).toggleClass("selected")
}

$(document).ready(function() {
    $(classFotos).click(selectPhoto)
    $(BOTAO_RETROCEDER_MENU).click(function(){
        window.location.href = determinarMainMenu();
    })
});