const classFotos = ".foto";

function Photo(tags, src){
    this.tags = tags;
    this.src = src;
}


function selectPhoto(){
    $(this).toggleClass("selected")
}

$(document).ready(function() {
    $(classFotos).click(selectPhoto)
    $(BOTAO_RETROCEDER_MENU).click(function(){
        window.location.href = determinarMainMenu();
    })
});

