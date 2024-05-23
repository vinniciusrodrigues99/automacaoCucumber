///  <reference types="cypress" />
import { Entao, Dado, Quando, E } from "../../..";
import EventosLogin from "../../support/page/login-page";
import { MovimentacaoMensal } from "../../support/page/movimentacaoMensal_page";
import { ValidacaoAcesso } from "../../support/page/validacaoAcesso_page";
import { InputActions } from "../../support/page/validacaoAcesso_page";
import { analiseCRE } from "../../support/page/analiseCRE_page";
const eventosLogin = new EventosLogin();
const eventosMovimentacao = new MovimentacaoMensal();
const eventosValidacaoAcesso = new ValidacaoAcesso();
const eventosValidacaoAcessoInput = new InputActions();
const eventosAnaliseCRE = new analiseCRE();
//CASO-1
Dado("que o usuário está na página inicial", () => {
  eventosLogin.loginQA();
});
E("clica no módulo de {string}", (modulo) => {
  eventosValidacaoAcesso.acessarModulo(modulo);
});
E("clica na seção {string}", (nomes) => {
  eventosValidacaoAcesso.acessarSeção(nomes);
});
Quando("ele insere o valor {string} no campo {string}", (valor, campo) => {
  eventosContratos.preencherInput(valor, campo);
});
E("clica no botão {string}", (string) => {
  eventosValidacaoAcesso.clickBotao(string);
});
Entao("o usuário é redirecionado para a página {string}", (pagina) => {
 eventosValidacaoAcesso.redirecionandoPagina(pagina);
});
Entao("o sistema apresenta na tabela o {string} {string} filtrado", (tipoFiltro, valorFiltro) => {
  eventosAnaliseCRE.resultadoFiltroCRE(tipoFiltro, valorFiltro);
});
E("ele insere o valor {string} no campo {string} da tela Análise CRE", (valor, campo) => {
  eventosAnaliseCRE.PreencherInputCRE(valor, campo);
});
Entao("os campos em {string} são limpos", (tela) => { 
  eventosAnaliseCRE.verificarCamposVaziosCRE(tela);
});
// E("clica no contrato {string} com competência {string}", (contrato, competencia) => {
//   eventosMovimentacao.clicaNoContratoComCompetencia(contrato, competencia);
// });
Quando("clica no botão {string} do filtro de {string}", (botao, valorFiltro) => {
  eventosAnaliseCRE.clickFiltroCRE(botao, valorFiltro);
})
Entao("ao filtrar por {string} o sistema exibe os contratos com {string}", (tipoFiltro, valorFiltro) => {
  eventosAnaliseCRE.resultadoFiltroCRE(tipoFiltro, valorFiltro);
});
E("clica no botão de {string} do contrato {string}", (botao, contrato) => {
  eventosAnaliseCRE.clickAcoesContrato(botao, contrato);
})
E("verifica se o contrato tem flag de {string} na tela de Análise CRE", (tipoFlag) => {
  eventosAnaliseCRE.verificarFlagEncerradosNA(tipoFlag);
})