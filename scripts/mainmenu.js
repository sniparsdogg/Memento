// const SECCAO_ALBUNS = "#galeriaAlbuns"
// const PASTA_AUTOMATICA = ".pastaAutomatica"

function appendPhotos(arrayFotos){
    for(i in arrayFotos){
        let foto = `<button type="button" value=${arrayFotos[i].tags} class="foto">
        <span>    
        <img src=${arrayFotos[i].src}></img>
        </span>
        </button>`
        $(SECCAO_FOTOS).append(foto)
    }    
}

function appendAlbums(arrayAlbums){
    for (i in arrayAlbums){
        let album = `<button type="button" value="${arrayAlbums[i].id}" class="pastaAutomatica">
        <h1 class="tituloAlbum">${arrayAlbums[i].title.replace('"', " ").replace('"', " ")}
        </button>`
        $(SECCAO_ALBUNS).append(album);
    }
}

function addAlbumClick(){
    $(PASTA_AUTOMATICA).each(function(){
        $(this).click(function(){
            localStorage.setItem(ALBUM_ABERTO, $(this).attr("value"));
            window.location.href="memento_pasta.html";
        })
    })
}

window.addEventListener("load", principal);

function principal(){
    appendAlbums(activeAccount.albuns);
    appendPhotos(activeAccount.batchFotos);
    addAlbumClick()
}