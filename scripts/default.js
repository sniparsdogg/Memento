"use strict";

//------------------------//

const ITEM_CONTAS = "accountDatabase";
const ITEM_CONTA_ATIVA = "activeAccount";
const ITEM_FICHEIROS_ADICIONADOS = "importedFiles";
const ITEM_PASTAS_CRIADAS = "createdFolders";
const BOTAO_RETROCEDER_MENU = "#retrocederMenu"

//------------------------//

let activeAccount = [];
let accounts = []
let addedFiles = []
let createdFolders = []
let selectedPhotos = []

window.addEventListener("load", principal);

function principal() {
    accounts = obterBaseDeDados();
    activeAccount = obterContaAtiva();
    addedFiles = obterFicheirosImportados();
    createdFolders = obterPastasCriadas();

}


function obterContaAtiva(){
    return JSON.parse(localStorage.getItem(ITEM_CONTA_ATIVA)) || [];
}

function obterBaseDeDados(){
    return JSON.parse(localStorage.getItem(ITEM_CONTAS)) || [];
}

function obterFicheirosImportados(){
    return JSON.parse(localStorage.getItem(ITEM_FICHEIROS_ADICIONADOS)) || [] 
}

function obterPastasCriadas(){
    return JSON.parse(localStorage.getItem(ITEM_PASTAS_CRIADAS)) || [] 
}

function definirContaAtiva(loginData){
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(loginData));
}


function determinarMainMenu(){
    if (addedFiles.length === 0) {
        return("memento.html")
    } else if (createdFolders.length === 0){
        return ("mementoFotos.html")
    }
    return ("mementoFotosAlbum.html");
}