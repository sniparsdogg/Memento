"use strict";

//------------------------//

const ITEM_CONTAS = "accountDatabase";
const ITEM_CONTA_ATIVA = "activeAccount";
const ITEM_FICHEIROS_ADICIONADOS = "importedFiles";
const ITEM_PASTAS_CRIADAS = "createdFolders";
const BOTAO_RETROCEDER_MENU = "#retrocederMenu"
const USERNAME = "loginUsername";
const PASSWORD = "loginPass";
const ALBUM_ABERTO = "albumAberto";
const CLASS_SELECIONADO = ".selected";
const TAGS_ADICIONADAS = "addedTags";


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

function getFolderID(){
    return localStorage.getItem(ALBUM_ABERTO); 
}

function pastaAUsar(id){
    for(let i in createdFolders){
        if(createdFolders[i].id == id){
            console.log(createdFolders[i])
            return createdFolders[i]
        }
    }
}

function obterTagsAdicionadas(){
    return JSON.parse(localStorage.getItem(TAGS_ADICIONADAS)) || [];
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

function updateFoldersLocalStorage(folder){
    localStorage.setItem(ITEM_PASTAS_CRIADAS, JSON.stringify(folder));
}

function definirContaAtiva(loginData){
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(loginData));
}


function determinarMainMenu(){
    if (addedFiles.length === 0) {
        return("memento.html")
    }
    return ("mementoFotosAlbum.html");
}