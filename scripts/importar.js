"use strict";

const BOTAO_SUBMETER = "#botaoSubmeter";
const BOTAO_TODAS = "#boxTodas";
const IMG_SUBMETER = "#imgSubmeter";

window.addEventListener("load", principal);


function principal(){
    defineEventHandlersParaElementsHTML();
}

function defineEventHandlersParaElementsHTML() {

    $(BOTAO_TODAS).click(selecionarTodas);
    $(classFotos).click(modificarBotaoSubmeter);
    $(classFotos).click(modificarBotaoTodas);
}

function modificarBotaoSubmeter(){
    let existeSelected = false;
    $(classFotos).each(function() {
        if ($(this).hasClass("selected")) {
            existeSelected = true
        }
    })
    $(IMG_SUBMETER).attr("src","images/graytick.png").unbind("click");
    if(existeSelected){
        $(IMG_SUBMETER).attr("src","images/greentick.png").click(importarFotos);
    }
}

function selecionarTodas() {
    if ($(BOTAO_TODAS).is(':checked')) {
        $(classFotos).addClass("selected")
    } else {
        $(classFotos).removeClass("selected")
    }
    modificarBotaoSubmeter();
}

function importarFotos(){
    $(classFotos).each(function(){
        if($(this).hasClass("selected")){
            let foto = new Photo($(this).attr('value'), $("img", this).attr('src'));
            addedFiles.push(foto);
        }
    })
    localStorage.setItem(ITEM_FICHEIROS_ADICIONADOS, JSON.stringify(addedFiles));
    window.location.href = determinarMainMenu();
}


function modificarBotaoTodas(){
    let existeUnselected = false;
    $(classFotos).each(function() {
        if (!$(this).hasClass("selected")) {
            existeUnselected = true
        }
    })
    if(existeUnselected){
        $(BOTAO_TODAS).prop("checked", false);
    } else {
        $(BOTAO_TODAS).prop("checked", true);
    }
}