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
