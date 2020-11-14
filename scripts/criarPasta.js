"use strict";

const FORM_PASTA = "frmAlbum"
const BOTAO_AVANCAR = "#botaoAvancar"
const TITULO_ALBUM = "tituloAlbum"
const TEMP_TITLE = "tempTituloAlbum"
const CHECK_AUTO = "#checkAuto"

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
    $(BOTAO_AVANCAR).click(guardarPasta);

    $(BOTAO_RETROCEDER_MENU).click(determinarMainMenu)
}

function guardarPasta(){
    let formValid = formulario.reportValidity();
    if(formValid){
        guardarNome();
        if($(CHECK_AUTO).is(':checked')){
            window.location.href = "adicionar_ctg.html";
        } else {
            window.location.href = determinarMainMenu();
        }
    }
}

function criarPasta(){
    let pasta = new Album(getID(), getTemporaryTitle(), getTaggedFiles());
    createdFolders.push(pasta);
    localStorage.setItem(ITEM_PASTAS_CRIADAS, JSON.stringify(createdFolders));
    window.location.href = determinarMainMenu();
}

function guardarNome(){
    // let formValid = formulario.reportValidity();
    // if(formValid){
    localStorage.setItem(TEMP_TITLE, getFormTitle());
        // window.location.href = "adicionar_ctg.html";
    }
