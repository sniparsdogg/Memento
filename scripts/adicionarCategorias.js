"use strict";

const FORM_CATEGORIAS = "frmCtg"
const BOTAO_SUBMETER = "#botaoSubmeter";
const BOTAO_AVANCAR = "botaoAvancar"
const TITULO_ALBUM = "tituloAlbum"
const TEMP_TITLE = "tempTituloAlbum"
const TAGS_ALBUM = "categorias"

let formulario = null;

function Album(id, title, fotos){
    this.id = id;
    this.title = title;
    this.fotos= fotos;

}

function getTemporaryTitle(){
    return JSON.stringify(localStorage.getItem(TEMP_TITLE))
}

function getTags(){
    return formulario.elements[TAGS_ALBUM].value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(",") || [];
}

function getID(){
    return createdFolders.length
}

window.addEventListener("load", principal);


function principal(){
    formulario = document.forms[FORM_CATEGORIAS];
    defineEventHandlersParaElementsHTML();
}

function defineEventHandlersParaElementsHTML() {

    $(BOTAO_SUBMETER).click(criarPasta);

    $(BOTAO_RETROCEDER_MENU).attr(window.location.href, "criaralbum.html")
}

function criarPasta(){
    let pasta = new Album(getID(), getTemporaryTitle(), getTaggedFiles());
    createdFolders.push(pasta);
    localStorage.setItem(ITEM_PASTAS_CRIADAS, JSON.stringify(createdFolders));
    window.location.href = determinarMainMenu();
}

function getTaggedFiles(){
    let matchingFiles = [];
    let thisTags = getTags();
    let filesToAdd = JSON.parse(JSON.stringify(addedFiles));
    let index = 0;
    filesToAdd.forEach(foto => {
        let fotoTags = foto.tags.split(" ");
        let matchesTags = false;
        fotoTags.forEach(tagFoto =>{
            thisTags.forEach(tagForm => {
                if(tagFoto == tagForm){
                    matchesTags = true;
                }      
            })
        })
        if(matchesTags){
            matchingFiles.push(foto)
        }
    })
    console.log(matchingFiles);
    return matchingFiles;
}