"use strict";

//------------------------//

const ITEM_CONTAS = "accountDatabase";
const ITEM_CONTA_ATIVA = "activeAccount";
const ITEM_FICHEIROS_ADICIONADOS = "addedFiles";
const ITEM_PASTAS_CRIADAS = "createdFolders";

//------------------------//

let activeAccount = [];
let accounts = []
let addedFiles = []
let createdFolders = []

window.addEventListener("load", principal);

function principal() {
    accounts = obterBaseDeDados();
    activeAccount = obterContaAtiva();
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

    if (ITEM_FICHEIROS_ADICIONADOS == []) {
        return("memento.html")
    } else if (ITEM_PASTAS_CRIADAS == []){
        return ("mementoFotos.html")
    }
    return ("mementoFotosAlbum.html");
}