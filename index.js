import { input, botaoSubmit, modalMensagem, tabelaFiltro, cabecalho, menuLateral, menuCadastro, helpSistema, abaTela } from './cypress/support/page/page'
import { InputID } from './cypress/support/page/input_page'
import { Given as Dado, When as Quando, Then as Entao, And as E } from "cypress-cucumber-preprocessor/steps"

export {
    input,
    Dado,
    Quando,
    Entao,
    E,
    InputID,
}