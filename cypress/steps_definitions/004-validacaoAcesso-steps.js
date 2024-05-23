///  <reference types="cypress" />
import { Entao, Dado, Quando, E } from "../..";
import EventosLogin from "../support/page/login-page";
import { MovimentacaoMensal } from "../support/page/movimentacaoMensal_page";
import { ValidacaoAcesso } from "../support/page/validacaoAcesso_page";
import { InputActions } from "../support/page/validacaoAcesso_page";
const eventosLogin = new EventosLogin();
const eventosMovimentacao = new MovimentacaoMensal();
const eventosValidacaoAcesso = new ValidacaoAcesso();
const eventosValidacaoAcessoInput = new InputActions();

//CASO-1
Dado("que o usuário está na página inicial", () => {
  eventosLogin.loginQA();
});
E("clica no módulo de Efetivos", () => {
  eventosMovimentacao.acessarModulo();
});
E("clica na seção {string}", (nome) => {
  eventosValidacaoAcesso.acessarSeção(nome);
});
Quando("ele insere o valor {string} no campo {string}", (valor, campo) => {
  eventosContratos.preencherInput(valor, campo);
});
E("clica no botão {string}", (string) => {
  eventosValidacaoAcesso.clickBotao(string);
});
E("clica no contrato {string}", (string) => {
  eventosValidacaoAcesso.validarTabela(string);
});
Quando("ele insere o valor {string} no campo {string}", (valor, campo) => {
 eventosValidacaoAcesso.preencherInput(valor, campo);
});
Quando("insere o valor {string} no campo {string}", (valor, campo) => {
  eventosValidacaoAcesso.preencherInputComEnter(valor, campo);
 });
Entao("o sistema executa a ação e exibe a mensagem de {string}", (string) => {
  eventosValidacaoAcesso.mensagemSistema(string);
});
Entao("a tabela retorna o colaborador relacionado ao {string}", (filtro) => {
  eventosValidacaoAcesso.ResultadoFiltrosValidacaoAcesso(filtro);
});
E("clica no botão de ação {string}", (acoes) => {
  eventosValidacaoAcesso.Acoes(acoes);
});
Quando("o analista clica no checkbox do {string} que deseja validar", (colaborador) =>{
  eventosValidacaoAcesso.validarColaborador(colaborador);
})
E("seleciona o {string} não vinculado que deseja vincular ao colaborador", (contrato) => {
  eventosValidacaoAcesso.vincularContrato(contrato);
});
E("clica na seta para {string} o contrato", (nomeSeta) => {
  eventosValidacaoAcesso.relacionarContrato(nomeSeta);
});
Entao("o sistema executa a ação e retorna o status {string}, indicando que não há conteúdo para exibir", (status) => {
  eventosValidacaoAcesso.respostaRequisicao(status);
})
E("seleciona o valor do {string} que deseja relacionar ao fornecedor", (tipoPerfil) => {
  eventosValidacaoAcessoInput.selecionarPerfil(tipoPerfil);
})
E("clica no input de {string}", (nomeBotao) => {
  eventosValidacaoAcessoInput.clicarInput(nomeBotao);
});
Quando("ele insere o valor {string} no campo {string} e insere o valor {string} no campo {string} em validação de acesso", (valor1, campo1, valor2, campo2) => {
  eventosValidacaoAcessoInput.inputsValidadedeAcesso(valor1, campo1, valor2, campo2);
});
Entao("a tabela retorna os colaboradores relacionados aos status {string}", (valorFiltro) => {
  eventosValidacaoAcessoInput.resultadoFiltroValidacaoAcessoStatus(valorFiltro)
});
E("seleciona o valor do status {string} que deseja relacionar ao fornecedor", (tipoStatus) => {
  eventosValidacaoAcessoInput.selecionarStatus(tipoStatus);
});
Entao("o usuário é redirecionado para a página {string}", (pagina) => {
  eventosValidacaoAcesso.redirecionandoPagina(pagina);
});
Entao("o sistema executa a solicitação e o {string} é desativado com sucesso", (nomeColaborador) => {
  eventosValidacaoAcesso.colaboradorDesativado(nomeColaborador);
});