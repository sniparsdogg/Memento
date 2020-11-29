"use strict";

const BOTAO_SUBMETER = "#botaoSubmeter";
const BOTAO_TODAS = "#boxTodas";
const IMG_SUBMETER = "#imgSubmeter";
const TITULO_ALBUM = ".titulo";

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
    let novasTags = [];
    let newFiles = [];
    let tituloAlbum = $(TITULO_ALBUM).text();
    $(classFotos).each(function(){
        if($(this).hasClass("selected")){
            let tags = $(this).attr('value');
            novasTags = adicionarTags(tags, novasTags);
            let foto = new Photo($(this).attr('id'), $(this).attr('value'), $("img", this).attr('src'));
            newFiles.push(foto);
        }
    })
    for (let i = 0; i < newFiles.length; i++){
        addedFiles.push(newFiles[i]);
    }
    localStorage.setItem(ITEM_FICHEIROS_ADICIONADOS, JSON.stringify(addedFiles));
    if(activeAccount.username == "LuisAndre"){
        atualizarFotosLuis(newFiles);
    } else if(activeAccount.username == "JoaoFilipe32"){
        atualizarFotosJoao(newFiles);
    }
    atualizarTags(novasTags, tituloAlbum);
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

function adicionarTags(tags, arrayTags){
    let tagsNovas = tags.split(" ")
    tagsNovas.forEach(tag => {
        arrayTags.push(tag);
    })
    return arrayTags;
}

function atualizarTags(tags, album){
    let tituloAlbum = album;
    let tagsNovas = [];
        tags.forEach(tagNova => {
        let adicionarTag = true;
        if(tagsNovas.length != 0){
            tagsNovas.forEach(tagExistente => {
                if(tagNova == tagExistente){
                    adicionarTag = false;
                }
            })
            if(adicionarTag){
                tagsNovas.push(tagNova);
            }
        } else {
            tagsNovas.push(tagNova);
        }
    });
    let tagsExistentes = obterTagsAdicionadas();
    if(tituloAlbum in tagsExistentes){
        tagsNovas.forEach(tag => {
            let adicionarTag = true;
            if(tagsNovas.length != 0){
                tagsExistentes[tituloAlbum].forEach(tagExistente => {
                    if(tag == tagExistente){
                        adicionarTag = false;
                    }
                })
                if(adicionarTag){
                    tagsExistentes[tituloAlbum].push(tag);
                }
            // tagsExistentes[tituloAlbum].push(tag);
        }})
    } else{
        tagsExistentes[tituloAlbum] = tagsNovas;
    }
    localStorage.setItem(TAGS_ADICIONADAS, JSON.stringify(tagsExistentes));
}