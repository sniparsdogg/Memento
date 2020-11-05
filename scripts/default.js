"use strict";

//------------------------//

const ITEM_CONTAS = "accountDatabase";
const ITEM_CONTA_ATIVA = "activeAccount";

//------------------------//

let activeAccount = [];
let accounts = []

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

function definirContaAtiva(loginData){
    localStorage.setItem(ITEM_CONTA_ATIVA, JSON.stringify(loginData));
}