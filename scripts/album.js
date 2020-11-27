"use strict";

const BARRA_MORE = ".more"
const BOTAO_NAV_APAGAR = ".apagar"
const BOTAO_MODAL_APAGAR = ".confirmar"
const MODAL_AVISO = "#apagar"
const BOTAO_MODAL_CANCELAR = ".cancelar"

window.addEventListener("load", principal);

function principal(){
    $(BOTAO_NAV_APAGAR).click(function(){
        apresentarAviso();
    })
    $(BOTAO_MODAL_APAGAR).click(function(){
            $(CLASS_SELECIONADO).each(function(){
            eliminarFoto($(this).attr('id'))
        })
        window.location.reload();
    });
    $(BOTAO_MODAL_CANCELAR).click(function(){
        $(MODAL_AVISO).css("display","none");
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
    activeAccountFolders.splice(getFolderID(),1, novaPasta);
    if(activeAccount.username == "LuisAndre"){
        reporAlbunsLuis(novaPasta);
    } else if(activeAccount.username == "JoaoFilipe32"){
        reporAlbunsJoao(novaPasta);
    }
    atualizarContaAtiva();
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

function apresentarAviso(){
    $(MODAL_AVISO).css("display","block")
};