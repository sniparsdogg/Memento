"use strict";

//------------------------//

const ITEM_CONTAS = "accountDatabase";
const ITEM_CONTA_ATIVA = "activeAccount";
const ITEM_FICHEIROS_ADICIONADOS = "importedFiles";
const ITEM_PASTAS_CRIADAS = "createdFolders";
const ITEM_FOTOS_LUIS = "fotosLuis";
const ITEM_FOTOS_JOAO = "fotosJoao";
const ITEM_ALBUNS_LUIS = "albunsLuis";
const ITEM_ALBUNS_JOAO = "albunsJoao";
const ITEM_ALBUM_CONVIDAR = "albumConvidar";
const BOTAO_RETROCEDER_MENU = "#retrocederMenu"
const USERNAME = "loginUsername";
const PASSWORD = "loginPass";
const ALBUM_ABERTO = "albumAberto";
const CLASS_SELECIONADO = ".selected";
const TAGS_ADICIONADAS = "addedTags";


//------------------------//

let activeAccount;
let accounts = [];
let addedFiles = [];
let createdFolders = [];
let selectedPhotos = [];
let activeAccountFiles = [];
let activeAccountFolders = [];




function Conta(username, batchFotos, albuns){
    this.username = username;
    this.batchFotos = batchFotos;
    this.albuns = albuns;
}    


window.addEventListener("load", principal);

function principal() {
    accounts = obterBaseDeDados();
    activeAccount = obterContaAtiva();
    addedFiles = obterFicheirosImportados();
    createdFolders = obterPastasCriadas();
    activeAccountFiles = obterFicheirosConta(activeAccount);
    activeAccountFolders = obterAlbunsConta(activeAccount);
}



function getFolderID(){
    return localStorage.getItem(ALBUM_ABERTO); 
}
    
function pastaAUsar(id){
    for(let i in activeAccountFolders){
        if(activeAccountFolders[i].id == id){
            console.log(activeAccountFolders[i]);
            return activeAccountFolders[i];
        }
    }
}

function obterTagsAdicionadas(){
    return JSON.parse(localStorage.getItem(TAGS_ADICIONADAS)) || [];
}

function obterContaAtiva(){
    let dadosConta = JSON.parse(localStorage.getItem(ITEM_CONTA_ATIVA)) || []
    if(dadosConta){
        return new Conta(dadosConta.username, dadosConta.batchFotos, dadosConta.albuns);
    }
}



function obterFicheirosConta(conta){
    for(let i = 0; i < accounts.length; i++){
        if (accounts[i].username == conta.username){
            return accounts[i].batchFotos;
        }
    }
    return [];
}

function obterAlbunsConta(conta){
    for(let i = 0; i < accounts.length; i++){
        if (accounts[i].username == conta.username){
            return accounts[i].albuns;
        }
    }
    return [];
}

function obterBaseDeDados(){
    let contas = [];
    contas.push(new Conta("LuisAndre", obterFotosLuis(), obterAlbunsLuis()));
    contas.push(new Conta("JoaoFilipe32", obterFotosJoao(), obterAlbunsJoao()));
    return contas;
}


function obterContaUsername(conta){
    return conta.username;
}

function obterContaFicheiros(conta){
    return conta.batchFotos || [];
}

function obterContaAlbuns(conta){
    return conta.albuns || [];
}

function obterUsernameFicheiros(username){
    for(let i = 0; i < accounts.length; i++){
        if (accounts[i].username == username) {
            return i.batchFotos || [];
        }
    }
    return [];
}

function obterUsernameAlbuns(username){
    for(let i = 0; i < accounts.length; i++){
        if(accounts[i].username == username){
            return i.albuns || [];
        }
    }
    return [];
}


function obterFicheirosImportados(){
    // return JSON.parse(localStorage.getItem(ITEM_FICHEIROS_ADICIONADOS)) || [] 
    return activeAccount.batchFotos;
}

function obterPastasCriadas(){
    // return JSON.parse(localStorage.getItem(ITEM_PASTAS_CRIADAS)) || [];
    return activeAccount.albuns;
}

function updateFoldersLocalStorage(folder){
    localStorage.setItem(ITEM_PASTAS_CRIADAS, JSON.stringify(folder));
}

function definirContaAtiva(loginData){
    for(let conta = 0; conta < accounts.length; conta++){
        if(accounts[conta].username == loginData.username){
        localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(accounts[conta]));
        activeAccount = accounts[conta]
        }
    }
}

function obterFotosLuis(){
    return JSON.parse(localStorage.getItem(ITEM_FOTOS_LUIS)) || [];
}

function obterFotosJoao(){
    return JSON.parse(localStorage.getItem(ITEM_FOTOS_JOAO)) || [];
}

function obterAlbunsLuis(){
    return JSON.parse(localStorage.getItem(ITEM_ALBUNS_LUIS)) || []; 
}

function obterAlbunsJoao(){
    return JSON.parse(localStorage.getItem(ITEM_ALBUNS_JOAO)) || [];
}

function atualizarFotosLuis(arrayFotos){
    let novasFotos = obterFotosLuis();
    for(let i = 0; i < arrayFotos.length; i++){
        novasFotos.push(arrayFotos[i]);
    }
    activeAccount.batchFotos = novasFotos;
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(activeAccount));
    localStorage.setItem(ITEM_FOTOS_LUIS, JSON.stringify(novasFotos));
}

function atualizarFotosJoao(arrayFotos){
    let novasFotos = obterFotosJoao();
    for(let i = 0; i < arrayFotos.length; i++){
        novasFotos.push(arrayFotos[i]);
    }
    activeAccount.batchFotos = novasFotos;
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(activeAccount));
    localStorage.setItem(ITEM_FOTOS_JOAO, JSON.stringify(novasFotos));
}

function atualizarAlbunsLuis(album){
    let novosAlbuns = obterAlbunsLuis();
    novosAlbuns.push(album);
    activeAccount.albuns = novosAlbuns;
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(activeAccount));
    localStorage.setItem(ITEM_ALBUNS_LUIS, JSON.stringify(novosAlbuns));
}

function atualizarAlbunsJoao(album){
    let novosAlbuns = obterAlbunsJoao();
    novosAlbuns.push(album);
    activeAccount.albuns = novosAlbuns;
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(activeAccount));
    localStorage.setItem(ITEM_ALBUNS_JOAO, JSON.stringify(novosAlbuns));
}

function reporAlbunsJoao(album){
    let novosAlbuns = obterAlbunsJoao();
    novosAlbuns.splice(getFolderID(),1, album);
    localStorage.setItem(ITEM_ALBUNS_JOAO, JSON.stringify(novosAlbuns));
}

function reporAlbunsLuis(album){
    let novosAlbuns = obterAlbunsLuis();
    novosAlbuns.splice(getFolderID(),1, album);
    localStorage.setItem(ITEM_ALBUNS_LUIS, JSON.stringify(novosAlbuns));
}


function atualizarContaAtiva(){
    let novaConta = new Conta(activeAccount.username, activeAccountFiles, activeAccountFolders);
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(novaConta));
}

function determinarMainMenu(){
    if (activeAccount.batchFotos.length === 0 && activeAccount.albuns.length === 0) {
        return("memento.html")
    }
    return ("mementoFotosAlbum.html");
}