"use strict";

const BOTAO_SUBMETER = "botaoSubmeter";

window.addEventListener("load", principal);


function principal(){
    defineEventHandlersParaElementsHTML();
}

function defineEventHandlersParaElementsHTML() {

    document.getElementById(BOTAO_SUBMETER).
        addEventListener("click",importarFotos);
}

function importarFotos(){
    let fotos = [1,2,3,4,5];
    addedFiles.push(fotos);
    localStorage.setItem(ITEM_FICHEIROS_ADICIONADOS, JSON.stringify(addedFiles));
    window.location.href = determinarMainMenu();
}
function