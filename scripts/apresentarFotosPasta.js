"use strict";

let albumAberto;

window.addEventListener("load", principal);

function principal(){
    albumAberto = localStorage.getItem(ALBUM_ABERTO);    
    apresentarFotos(albumAberto);
}

function pastaAUsar(id){
    for(let i in createdFolders){
        if(createdFolders[i].id == id){
            console.log(createdFolders[i])
            return createdFolders[i]
        }
    }
}

function apresentarFotos(id){
    let fotos = []
    let pasta = pastaAUsar(albumAberto)
    addedFiles.forEach(file => {
        file.tags.split(" ").forEach(fileTag =>{
            pasta.tags.forEach(folderTag => {
                if(fileTag == folderTag){
                    fotos.push(file);
                }
            })
        })
    })    
    fotos.forEach(foto => {
            let button = `<button type="button" value=${foto.tags} class="foto">
            <span>    
            <img src=${foto.src}></img>
            </span>
            </button>`;
            $(SECCAO_FOTOS).append(button);
        
    });

}