"use strict";

const BOTAO_SUBMETER = "botaoSubmeter";



function defineEventHandlersParaElementsHTML() {

    document.getElementById(BOTAO_SUBMETER).
        addEventListener("click",importarFotos);
}

function importarFotos(){
    let fotos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    addedFiles.push(fotos);
    localStorage.setItem(ITEM_FICHEIROS_ADICIONADOS, JSON.stringify(addedFiles));
    window.location.href = determinarMainMenu();
}