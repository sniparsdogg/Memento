"use strict";

const BOTAO_SUBMETER = "botaoSubmeter";


window.addEventListener("load", principal);


function principal(){
    defineEventHandlersParaElementsHTML();
}

function defineEventHandlersParaElementsHTML() {

    document.getElementById(BOTAO_SUBMETER).
    addEventListener("click", criarPasta);

    // document.getElementsByClassName()
}

function criarPasta(){
    let pastaCriada = "ZOO 2020";
    createdFolders.push(pastaCriada);
    localStorage.setItem(ITEM_PASTAS_CRIADAS, JSON.stringify(createdFolders));
    window.location.href = determinarMainMenu();
}