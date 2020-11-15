"use strict";

const CLASS_REDESOCIAL = ".rede-social"
const MODAL_SUCESSO = "#sucesso";
const CLASS_FECHAR = ".fechar"

let SELETOR_REDESOCIAL = $(CLASS_REDESOCIAL);
let SELETOR_MODAL = $(MODAL_SUCESSO);
let SELETOR_FECHAR = $(CLASS_FECHAR);

window.addEventListener("load", principal);

function principal(){
    
    $(BOTAO_RETROCEDER_MENU).click(function(){
        window.history.back();
    });
    apresentarSucesso()
    
}

function apresentarSucesso(){
    $(CLASS_REDESOCIAL).click(function(){
        $(MODAL_SUCESSO).css("display","block")
        setTimeout(function(){ 
            $(`${MODAL_SUCESSO} .loading`).replaceWith("<h1>Partilhado com sucesso!</h1>") 
        }, 1000);
        setTimeout(function(){ 
            window.history.back(); 
        }, 2000);
    });
}
    