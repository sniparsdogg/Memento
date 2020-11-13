"use strict";

const FORM_PASTA = "frmAlbum"
const BOTAO_AVANCAR = "#botaoAvancar"
const TITULO_ALBUM = "tituloAlbum"
const TEMP_TITLE = "tempTituloAlbum"

let formulario = null;


function getFormTitle(){
    return formulario.elements[TITULO_ALBUM].value;
}

window.addEventListener("load", principal);


function principal(){
    formulario = document.forms[FORM_PASTA];
    defineEventHandlersParaElementsHTML();

}

function defineEventHandlersParaElementsHTML() {
    $(BOTAO_AVANCAR).click(guardarNome);

    $(BOTAO_RETROCEDER_MENU).click(determinarMainMenu)
}

function guardarNome(){
    let formValid = formulario.reportValidity();
    localStorage.setItem(TEMP_TITLE, getFormTitle());
    if(formValid){
        window.location.href = "adicionar_ctg.html";
    }
}
