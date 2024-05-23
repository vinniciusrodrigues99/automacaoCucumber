/// <reference types="cypress" />
import { Entao, Dado, Quando, E} from '../..'
import EventosLogin from '../support/page/login-page'
import InputID from '../support/page/input_page';
const eventosLogin = new EventosLogin(); 
const input = new InputID();

//CASO-1

Dado("que o usuário está na página de login", ()=> {
    eventosLogin.loginQAFornecedor();
})

E("clica em {string}", (string)=> {
    eventosLogin.clickBotao(string);
})

Quando("ele insere o valor {string} no campo {string} da tela de login", (valor, campo)=> {
    input.inputLabel(campo).type(valor);
})

E("clica no botão {string} da tela de login", (string)=> {
    eventosLogin.clickBotao(string);
})

Entao("ele deve ser redirecionado para a página inicial do Fornecedor", ()=> {
    cy.contains("span", "Bem-vindo(a),");
});

//CASO-2
E("clica em {string} no Falha ao Acessar pela rede", (string)=> {
    cy.contains("button", string).then(($modal) => {
        if ($modal.length > 0) {
            eventosLogin.clickBotao(string);
        }
    });
})

Entao("ele deve ser redirecionado para a página inicial do Analista", ()=> {
    cy.contains("span", "Bem-vindo(a),");
});

//CASO-3

E("clica em {string} no Falha ao Acessar pela rede", (string)=> {
    cy.contains("button", string).then(($modal) => {
        if ($modal.length > 0) {
            eventosLogin.clickBotao(string);
        }
    });
})

Entao("ele deve ser redirecionado para a página inicial do Contraparte", ()=> {
    cy.contains("span", "Bem-vindo(a),");
});
