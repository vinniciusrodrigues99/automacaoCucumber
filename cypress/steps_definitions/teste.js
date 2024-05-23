/// <reference types="cypress" />
import { Entao, Dado, Quando, E } from "../..";
import EventosLogin from "../support/page/login-page";
import {
  EventosContratos,
  EventosContratosModal,
  EventosContratosAdicionarNovo,
  
} from "../support/page/contratos_page";
import { MovimentacaoMensal } from "../support/page/movimentacaoMensal_page";

//import ElementosContratos from "../support/elements/contrato-elements";
const eventosLogin = new EventosLogin();
const eventosContratos = new EventosContratos();
const eventosContratosModal = new EventosContratosModal();
const eventosContratosAdicionarNovo = new EventosContratosAdicionarNovo();
const eventosMovimentacao = new MovimentacaoMensal();

//CASO-1
Dado("que o usuário está na página inicial", () => {
  eventosLogin.loginQA();
});
Dado("que o usuário está na página inicial no ambiente de homologação", ()=>{
  eventosLogin.loginGenerico();
})
E("clica no módulo de Contratos", () => {
  eventosContratos.acessarModulo();
});
E("clica na seção {string}", () => {
  eventosContratos.acessarSeção();
});
Quando("ele insere o valor {string} no campo {string}", (valor, campo) => {
  eventosContratos.preencherInput(valor, campo);
});
E("clica no botão {string}", (string) => {
  eventosContratos.clickBotao(string);
});
Entao("a tabela retorna o dado esperado {string}", (string) => {
  eventosContratos.resultadoFiltro(string);
});

//Passar os filtros numa única feature
//CASO-2
//CASO-3
//CASO-4
//CASO-5

//Esse passo debaixo pode ser removido
Entao("a tabela retorna todos os campos em branco", () => {
  eventosContratos.verificarCampoVazio();
});

//CASO-6
Quando("ele clica no seletor de página {string}", (string) => {
  eventosContratos.clickBotao(string);
});
Entao("a tabela retorna os contratos da página {string}", (string, int) => {
  eventosContratos.validarRodape(string, int);
});

//CASO-7
Quando("ele visualiza a tabela", () => {
  eventosContratos.visualizarTabela();
});

Entao("devem ser exibidos {int} itens por pagina", (qtd) => {
  eventosContratos.obterQuantidadeLinhas(qtd);
});

//CASO-8

E("clica no botão excluir", () => {
  eventosContratos.removerContrato();
});
E("clica em {string} para confirmar", (string) => {
  eventosContratos.clickBotao(string);
});
Entao("o sistema executa a ação e exibe a mensagem de {string}", (string) => {
  eventosContratos.mensagemSistema(string);
});
//CASO-9

Quando("ele insere o valor {string} no campo {string}", (valor, campo) => {
  eventosContratos.preencherInput(valor, campo);
});

E("clica no valor {string} apresentado", (string) => {
  eventosContratos.validarTabela(string);
});
Entao("ele visualiza os dados de {string}", (string) => {
  eventosContratos.validarContrato(string);
});

//CASO-10

E("clica no botão + em Matricula Substituto", () => {
  eventosContratos.adcSubstituto();
});
E("preenche o valor de {string} no campo {string}", (campo, valor) => {
  eventosContratos.inputSubstituto(valor, campo);
});

//CASO-11 USUÁRIO ANALISTA REMOVE UM SUBSTITUTO DENTRO DE CONTRATO
E("clica no botão - da {string} que deseja remover", () => {
  eventosContratos.rmSubstituto();
});

//CASO 12
E("insere o valor {string} no campo {string}", (valor, campo) => {
  eventosContratos.preencherInputComEnter(valor, campo);
});
//CASO 13 - Completo - Dá pra refatorar com o objeto iconeRemoverTeste

//CASO 14
E("anexa a evidência trabalhista do {string}", (string) => {
  eventosContratos.anexarArquivos(string);
});
//CASO 15 - COMPLETO

//CASO 16
//CASO 17 - FAZER
Entao("a tabela retorna todos os {string} necessários em branco", (string) => {
  eventosContratos.verificarCamposVaziosContrato(string);
});

Entao("verifica que em movimentação mensal visão individual {string}", (mensagem) => {
  eventosMovimentacao.verificarEfetivo(mensagem);
});
//CASO 18 - COMPLETO
//CASO 19 - COMPLETO
//CASO 20
E("ele insere o valor {string} no campo {string} do modal", (valor, campo) => {
  eventosContratosModal.preencherInput(valor, campo);
});
E("clica no botão {string} do modal", (nomeBotao) => {
  eventosContratosModal.clickBotaoModal(nomeBotao);
});
//CASO 21
Entao("o sistema não realiza a requisição e retorna a mensagem de {string}", (string) => {
  eventosContratos.mensagemSistema(string);
});

//CASO 26
E("ele insere o valor {string} no campo {string} em adicionar", (valor, campos) => {
  eventosContratosAdicionarNovo.preencherAdicionarNovo(valor, campos);
});

E("ele insere o valor {string} no campo {string} e clica na opção de autocomplete", (valor, campos) => {
  eventosContratosAdicionarNovo.preencherInputComAutoComplete(valor, campos);
});
E("clica no icone pesquisar", () => {
  eventosContratos.clickIconePesquisar();
});
//caso34
Entao("a tabela retorna todos os campos {string} contrato em branco", (pagina) => {
  eventosContratosAdicionarNovo.verificarCamposVazios_AdicionarNovo(pagina);
});
