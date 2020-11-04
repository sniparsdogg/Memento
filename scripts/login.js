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

/**
 * Trata dos dados do Login, provinientes do formulário HTML
 */
function fazerLogin() {

    let loginValid = formulario.reportValidity();
    let username = null;
    let senha = null;

    if (loginValid) {

        username = formulario.elements[USERNAME].value;
        senha = formulario.elements[PASSWORD].value;

        for (var x = 0; x <= localStorage.length; x++) {

            if (x == localStorage.length) {
                alert('Username ou Password incorreta!');
                break;
            }

            let user = JSON.parse(localStorage.getItem("User" + String(x)));

            if (user.username == username) {
                if (user.senha == senha) {

                    user.login = true;

                    localStorage.setItem("User" + String(localStorage.length), JSON.stringify(user));
                    alert("O seu Login foi executado com sucesso!");

                    formulario.reset();
                    window.location.href = "memento.html";
                    break;
                }
            }
        }
    }
}