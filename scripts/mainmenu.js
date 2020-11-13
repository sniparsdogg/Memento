// const SECCAO_ALBUNS = "#galeriaAlbuns"
// const PASTA_AUTOMATICA = ".pastaAutomatica"

function appendPhotos(arrayFotos){
    for(i in addedFiles){
        let foto = `<button type="button" value=${addedFiles[i].tags} class="foto">
        <span>    
        <img src=${addedFiles[i].src}></img>
        </span>
        </button>`
        $(SECCAO_FOTOS).append(foto)
    }    
}

function appendAlbums(arrayAlbums){
    let posicao = 1;

    for (i in arrayAlbums){
        let album = `<button type="button" value="${arrayAlbums[i].id}" class="pastaAutomatica">
        <h1 class="tituloAlbum">${arrayAlbums[i].title.replace('"', " ").replace('"', " ")}
        </button>`
        $(SECCAO_ALBUNS).append(album);
        posicao++;
    }
}

function addAlbumClick(){
    $(PASTA_AUTOMATICA).each(function(){
        switch($(this).attr("value")){
            case "0":
                $(this).click(function(){
                    localStorage.setItem(ALBUM_ABERTO, $(this).attr("value"));
                    window.location.href="memento_pasta_zoo.html";
                })
                break;
            case "1":
                $(this).click(function(){
                    localStorage.setItem(ALBUM_ABERTO, $(this).attr("value"));
                    window.location.href="memento_pasta_AnivAfonso.html";
                })
            break;
        }
    })
}

window.addEventListener("load", principal);

function principal(){
    appendAlbums(createdFolders);
    appendPhotos(addedFiles);
    addAlbumClick()
}