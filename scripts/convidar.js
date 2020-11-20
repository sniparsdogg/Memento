"use strict";

const BOTAO_RETROCEDER = "#botaoRetroceder";
const FORMULARIO_CONVITE = "#frmConvite";
const BOTAO_SUBMETER = "#botaoSubmeter";
const MODAL_SUCESSO = "#sucesso"


window.addEventListener("load", principal);

function principal(){
    defineEventHandlersParaElementsHTML();
}

function defineEventHandlersParaElementsHTML(){
    
    $(BOTAO_RETROCEDER).click(function(){
        window.history.back();
    })

    $(BOTAO_SUBMETER).click(function(){
        let albumAConvidar = pastaAUsar(getFolderID())
        convidarPara(albumAConvidar);
        apresentarSucesso();
    })

}


function convidarPara(album){
    localStorage.setItem(ITEM_ALBUM_CONVIDAR, JSON.stringify(album));
}

function apresentarSucesso(){
    $(MODAL_SUCESSO).css("display","block")
    setTimeout(function(){ 
        $(`${MODAL_SUCESSO} .loading`).replaceWith("<h1>Convidado com sucesso!</h1>") 
    }, 1000);
    setTimeout(function(){ 
        window.location.href = "memento_pasta.html"; 
    }, 2000);
}