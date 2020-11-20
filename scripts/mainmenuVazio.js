const SECCAO_CONVITE = "#convite";
const BOTAO_SUBMETER = "#botaoSubmeter";

let convite;

window.addEventListener("load", principal);

function principal(){
    convite = obterConvite();
    aparecerConvite(convite);
}

function aparecerConvite(conviteQuery){
    if(conviteQuery){
        $(SECCAO_CONVITE).toggleClass("escondido");
        $(SECCAO_CONVITE).append(`<h1>Recebeu um convite para o álbum ${convite.title}`);
        $(SECCAO_CONVITE).append(`<div class="spacer"></div>`)
        $(SECCAO_CONVITE).append(`<button type="button" id="botaoSubmeter">
                                      <img id="imgSubmeter" src="images/greentick.png" width="80px">
                                  </button>`)
        $(BOTAO_SUBMETER).click(function(){
            aceitarConvite(conviteQuery);
        })
    }
}

function obterConvite(){
    return JSON.parse(localStorage.getItem(ITEM_ALBUM_CONVIDAR));
}

function aceitarConvite(conviteQuery){
    let novoAlbum = conviteQuery;
    if(activeAccount.username == "LuisAndre"){
        atualizarAlbunsLuis(conviteQuery);
    } else if(activeAccount.username == "JoaoFilipe32"){
        atualizarAlbunsJoao(conviteQuery);
    }
    window.location.href = determinarMainMenu();
}