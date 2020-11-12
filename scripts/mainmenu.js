const SECCAO_FOTOS = "#galeriaFotos"

function appendPhotos(arrayFotos){
    let posicao = 0;
    for(i in addedFiles){
        // console.log(addedFiles[i].tags)
        let foto = `<button type="button" value=${addedFiles[i].tags} class="foto">
        <span>    
        <img src=${addedFiles[i].src}></img>
        </span>
        </button>`
        $(SECCAO_FOTOS).append(foto)
    }    
}

window.addEventListener("load", principal);

function principal(){
    appendPhotos(addedFiles);
}