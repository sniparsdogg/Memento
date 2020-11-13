const SECCAO_FOTOS = "#galeriaFotos"
const SECCAO_ALBUNS = "#galeriaAlbuns"
const PASTA_AUTOMATICA = ".pastaAutomatica"


const classFotos = ".foto";

function Photo(id, tags, src){
    this.id = id;
    this.tags = tags;
    this.src = src;
}


function selectPhoto(){
    $(this).toggleClass("selected")
}

$(window).on("load", function() {
    $(classFotos).click(selectPhoto)
    $(BOTAO_RETROCEDER_MENU).click(function(){
        window.location.href = determinarMainMenu();
    })
});

