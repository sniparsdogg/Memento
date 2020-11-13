"use strict";

const TITULO_ALBUM = "#tituloAlbum";

let albumAberto;

window.addEventListener("load", principal);

function principal(){
    albumAberto = getFolderID();    
    apresentarFotos(albumAberto);
    apresentarTitulo(albumAberto);
}

function apresentarTitulo(album){
    let pasta = pastaAUsar(album);
    let titulo = pasta.title.replace('"',"").replace('"',"");
    let tituloInterface = `<h1 id="tituloAlbum" style="font-size: 60px" class="titulo">${titulo}</h1>`
    $(TITULO_ALBUM).append(tituloInterface);
}

function apresentarFotos(albumAberto){
    let pasta = pastaAUsar(albumAberto)
    let fotos = pasta.fotos
    fotos.forEach(foto => {
            let button = `<button type="button" id="${foto.id}" value=${foto.tags} class="foto">
            <span>    
            <img src=${foto.src}></img>
            </span>
            </button>`;
            $(SECCAO_FOTOS).append(button);
        
    });
}

