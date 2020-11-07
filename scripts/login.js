"use strict";

/* ------------------------------------------------------------------------- */
/*                                                                CONSTANTES */
/* ------------------------------------------------------------------------- */

const FORMULARIO_LOGIN = "frmLogin";
const BOTAO_LOGIN = "btnLogin";
const USERNAME = "loginUsername";
const PASSWORD = "loginPass";

/* ------------------------------------------------------------------------- */
/*                                                         VARIÁVEIS GLOBAIS */
/* ------------------------------------------------------------------------- */

let formulario = null;

function Login(username, password){
    this.username = username;
    this.password = password;
}

/* ------------------------------------------------------------------------- */
/*                                                         VARIÁVEIS GLOBAIS */
/* ------------------------------------------------------------------------- */



/* ------------------------------------------------------------------------- */
/*                                                INICIALIZAÇÃO DA APLICAÇÃO */
/* ------------------------------------------------------------------------- */

window.addEventListener("load", principal);

/**
 * Primeira função a ser executada após o browser completar o carregamento de
 * toda a informação presente no documento html
 */
function principal() {

    formulario = document.forms[FORMULARIO_LOGIN];

    defineEventHandlersParaElementsHTML();
}

/* ------------------------------------------------------------------------- */
/*                                            REAÇÃO A EVENTOS DO UTILIZADOR */
/* ------------------------------------------------------------------------- */

/**
 * Associa event handlers a elementos no documento HTML, em particular botões.
 */
function defineEventHandlersParaElementsHTML() {

    document.getElementById(BOTAO_LOGIN).
        addEventListener("click",fazerLogin);
}

function getUsernameLoginForm() {
    return formulario.elements[USERNAME].value;
}

function getPasswordLoginForm() {
    return formulario.elements[PASSWORD].value;
}

/**
 * Trata dos dados do Login, provinientes do formulário HTML
 */
function fazerLogin() {

    let loginValid = formulario.reportValidity();
    let username = null;
    let senha = null;

    if (loginValid) {
        let loginData = new Login(getUsernameLoginForm(), getPasswordLoginForm());
        if ((loginData.username === "LuisAndre" && loginData.password === "xpto1234")
            || (loginData.username === "JoaoFilipe32" && loginData.password === "j0a0f1x3")) {

            definirContaAtiva(loginData);
            alert("O seu Login foi executado com sucesso!");

            formulario.reset();
            window.location.href = determinarMainMenu();
        } else {
            alert("Username ou Password incorreta!");
        }
    }
}

