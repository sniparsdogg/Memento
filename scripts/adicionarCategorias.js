"use strict";

const FORM_CATEGORIAS = "frmCtg";
const BOTAO_SUBMETER = "#botaoSubmeter";
const BOTAO_AVANCAR = "botaoAvancar";
const TITULO_ALBUM = "tituloAlbum";
const TEMP_TITLE = "tempTituloAlbum";
const TAGS_ALBUM = "categorias";
const BOTAO_DENTRO_DROPDOWN = ".dropdown-item";
const BOTAO_DROPDOWN = "#dropdownMenuButton";
const ESPACO_CATEGORIAS = ".opcoesCategoria";
// const LISTA_ANIMAIS = "#listaAnimais";
// const DROPDOWN_ANIMAIS = ".dropdown-animais";
// const CHECK_ANIMAIS = "#checkAnimais";

let formulario = null;

function Album(id, title, fotos){
    this.id = id;
    this.title = title;
    this.fotos= fotos;
}

function getTemporaryTitle(){
    return JSON.stringify(localStorage.getItem(TEMP_TITLE))
}

function getTags(){
    let tagsParaAdicionar = [];
    // return formulario.elements[TAGS_ALBUM].value
    // .toLowerCase()
    // .normalize("NFD")
    // .replace(/[\u0300-\u036f]/g, "")
    // .split(",") || [];
}

function getID(){
    return activeAccount.albuns.length;
}

window.addEventListener("load", principal);


function principal(){
    formulario = document.forms[FORM_CATEGORIAS];
    adicionarOpcoes();
    defineEventHandlersParaElementsHTML();
}

function defineEventHandlersParaElementsHTML() {
    $(".checkbox-menu").on("change", "input[type='checkbox']", function() {
        $(this).closest("li").toggleClass("active", this.checked);
     });
     
     $(document).on('click', '.allow-focus', function (e) {
       e.stopPropagation();
     });
    // $(CHECK_ANIMAIS).click(function(){
    //     apresentar("animais");
    // })
    $(BOTAO_SUBMETER).click(criarPasta);
    $(BOTAO_RETROCEDER_MENU).attr(window.location.href, "criaralbum.html")
}

function criarPasta(){
    let pasta = new Album(getID(), getTemporaryTitle(), getTaggedFiles());
    createdFolders.push(pasta);
    localStorage.setItem(ITEM_PASTAS_CRIADAS, JSON.stringify(createdFolders));
    if(activeAccount.username == "LuisAndre"){
        atualizarAlbunsLuis(pasta);
    } else if(activeAccount.username == "JoaoFilipe32"){
        atualizarAlbunsJoao(pasta);
    }
    window.location.href = determinarMainMenu();
}

function adicionarOpcoes(){
    let tagsAdicionadas = obterTagsAdicionadas();
    for (const [album,tags] of Object.entries(tagsAdicionadas)){
        let tituloTags = album;
        let idTitulo = album.replace(/\s+/g, '');
        let novoDiv = 
        `<div id="${idTitulo}" class="dropdown">
            <button class="btn btn-lg btn-outline-secondary dropdown-toggle" type="button" 
                    id="dropdownMenu1" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="true">
                    Categorias obtidas do álbum ${tituloTags}:
            </button>
            <ul id="lista${idTitulo}" class="dropdown-menu pre-scrollable animais checkbox-menu allow-focus" aria-labelledby="dropdownMenu1">
            </ul>
        </div>
        `

        $(ESPACO_CATEGORIAS).prepend(novoDiv);

        tags.forEach(tag => {
            let opcaoNova = 
            `<li>
                <label>
                <input value="${tag}" type="checkbox"> ${tag}
                </label>
            </li>`
        $(`#lista${idTitulo}`).append(opcaoNova);
        })
    }
    
    // tagsAdicionadas.forEach(tag => {
    //     let opcaoNova = 
    //     `<li>
    //         <label>
    //         <input value="${tag}" type="checkbox"> ${tag}
    //         </label>
    //      </li>`
    //     $(LISTA_ANIMAIS).append(opcaoNova);    
}

function getTaggedFiles(){
    let matchingFiles = [];
    let thisTags = getTags();
    let filesToAdd = JSON.parse(JSON.stringify(addedFiles));
    let index = 0;
    filesToAdd.forEach(foto => {
        let fotoTags = foto.tags.split(" ");
        let matchesTags = false;
        fotoTags.forEach(tagFoto =>{
            thisTags.forEach(tagForm => {
                if(tagFoto == tagForm.trimLeft()){
                    matchesTags = true;
                }      
            })
        })
        if(matchesTags){
            matchingFiles.push(foto)
        }
    })
    console.log(matchingFiles);
    return matchingFiles;
}

function apresentar(menu){
    switch(menu){
        case "animais":
            $(DROPDOWN_ANIMAIS).toggleClass("escondido");
    }
}