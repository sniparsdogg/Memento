"use strict";

const BARRA_MORE = ".more"
const BOTAO_APAGAR = ".apagar"


window.addEventListener("load", principal);

function principal(){
    $(BOTAO_APAGAR).click(function(){
        $(CLASS_SELECIONADO).each(function(){
            eliminarFoto($(this).attr('id'))
        })
        window.location.reload();
    })
    $(classFotos).click(apresentarBarra);

}

function apresentarBarra(){
    let existeSelected = false;
    $(classFotos).each(function() {
        if ($(this).hasClass("selected")) {
            existeSelected = true
        }
    })
    $(BARRA_MORE).addClass("escondido");
    if(existeSelected){
        $(BARRA_MORE).removeClass("escondido");
    }
}

function eliminarFoto(foto){
    let novaPasta = pastaAUsar(getFolderID());
    let fotosPasta = novaPasta.fotos;
    let fileToDelete = fotoSelecionada(fotosPasta, foto)
    const indexFoto = fotosPasta.indexOf(fileToDelete);
    fotosPasta.splice(indexFoto, 1);
    createdFolders.splice(getFolderID(),1, novaPasta);
    updateFoldersLocalStorage(createdFolders)
}

function fotoSelecionada(pasta, id){
    for(let i = 0; i < pasta.length; i++){
        let foto = pasta[i];
        if(foto.id == id){
            return foto;
        }
    }   
}

// TODO: Add album menus to share, invite to album, etc