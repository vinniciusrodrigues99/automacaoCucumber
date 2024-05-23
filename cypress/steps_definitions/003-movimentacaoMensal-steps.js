/// <reference types="cypress" />
import { Entao, Dado, Quando, E } from "../..";
import EventosLogin from "../support/page/login-page";
import { MovimentacaoMensal } from "../support/page/movimentacaoMensal_page";


const eventosLogin = new EventosLogin();
const eventosMovimentacao = new MovimentacaoMensal();

//CASO-1
Dado("que o usuário está na página inicial", () => {
  eventosLogin.loginGenerico();
});
E("clica no módulo de Efetivos", () => {
  eventosMovimentacao.acessarModulo();
});
E("clica na seção {string}", (nome) => {
  eventosMovimentacao.acessarSeção(nome);
});
Entao("o usuário é redirecionado para a tela de Movimentação Mensal", () => {
  cy.get("span").contains("Movimentação Mensal");
});
//CASO-2
Quando("ele insere o valor {string} no campo {string}", (valor, campo) => {
  eventosMovimentacao.preencherInput(valor, campo);
});
E("clica no botão {string}", (string) => {
  eventosMovimentacao.clickBotao(string);
});
Entao("a tabela retorna o dado esperado {string}", (string) => {
  eventosMovimentacao.resultadoFiltro(string);
});
//Caso-3
Entao("a tabela retorna o contrato relacionado ao {string} do contrato", (filtro) => {
    eventosMovimentacao.resultadoFiltro(filtro);
  }
);
Quando("ele insere o valor {string} no campo {string} de movimentação mensal", (valor, campo) => {
  eventosMovimentacao.preencherinputfornecedor(valor, campo);
});
//Caso de teste
Quando("ele insere o valor do CPF no campo {string}", (campo) => {
  cy.fixture("acessos").then((x) => {
    let scan = x;
    scan.CPFS.forEach((x) => {
      eventosMovimentacao.preencherInput(x, campo);
    });
  });
});
//Caso-5
Quando("ele clica no campo {string} e seleciona o {string}", (campo, valor) => {
  eventosMovimentacao.filtroDropdown(valor, campo);
});
Entao("a tabela retorna os contratos relacionados ao status {string}", (filtro) => {
  eventosMovimentacao.resultadoFiltro(filtro);
});
//caso 13
Quando("ele insere o valor {string} no campo {string} e insere o valor {string} no campo {string}", (valor1, campo1, valor2, campo2) => {
  eventosMovimentacao.filtroCompetencia(valor1, campo1, valor2, campo2);
});
//caso 14
Entao("os inputs em {string} são limpos", (movimentacaoMensal) => {
  eventosMovimentacao.verificarCamposVaziosMovimentacao(movimentacaoMensal);
});
//caso 15
Quando("ele visualiza a tabela", () => {
  eventosMovimentacao.visualizarTabela();
});
Entao("devem ser exibidos {int} itens por página", (qtd) => {
  eventosMovimentacao.obterQuantidadeLinhas(qtd);
});
//caso
Quando("ele clica no seletor de página {string}", (string) => {
  eventosMovimentacao.clickBotao(string);
});
Entao("a tabela retorna os contratos da página {int}", (int) => {
  eventosMovimentacao.validarRodapeMovimentacao(int);
});
//CASO
E("clica no contrato {string}", (string) => {
  eventosMovimentacao.validarTabela(string);
});
Entao("o sistema realiza o download do {string}", (nmArquivo) => {
  eventosMovimentacao.download(nmArquivo);
});
E("seleciona a opção {string}", (opcao) => {
  eventosMovimentacao.opcaoMobilizacao(opcao);
});
//caso 17
E("verifica se o botão {string} está desabilitado", (botao) => {
  eventosMovimentacao.verificarEstadoBotao(botao);
});
Entao("verifica que em movimentação mensal visão individual {string}", (mensagem) => {
  eventosMovimentacao.verificarEfetivo(mensagem);
});
//caso 18
E("clica no contrato {string} com competência {string}", (contrato, competencia) => {
    eventosMovimentacao.clicaNoContratoComCompetencia(contrato, competencia);
});

E("verifica o {string} a qual está vinculado", (contrato) => {
  eventosMovimentacao.validandoContratoCompartilhado(contrato);
});
Entao("o sistema redireciona o usuário para a página de {string}", (pagina) => {
  eventosMovimentacao.colapseAnterior(pagina);
});
Entao("o sistema não retorna os contratos de {string} de competências anteriores", (filtro)=>{
  eventosMovimentacao.resultadoFiltro(filtro)
});
E("clica no botão {string} e edita o nome do efetivo {string}", (botao, nomeEfetivo) => {
  eventosMovimentacao.clickBotao(botao, nomeEfetivo)
});
E("anexa a planilha de {string}", (tipoUpload) => {
  eventosMovimentacao.anexarMovimentacao(tipoUpload);
}); 
Entao("o sistema executa a ação e exibe um {string} pois o efetivo já foi lançado", (mensagem) => {
  eventosMovimentacao.mensagemErroEfetivoDuplicado(mensagem);
});
Entao("clica no botão {string} do efetivo {string}", (nomeBotao, nomeEfetivo)=>{
  eventosMovimentacao.botaoRemoverEfetivo(nomeBotao, nomeEfetivo);
});
Entao("o sistema exibe a mensagem {string}", mensagem => {
  eventosMovimentacao.mensagemSistema(mensagem);
  cy.screenshot('evidência do teste sendo um sucesso');
});
Entao("ao verificar o campo {string} deve ser exibido o valor correto", (campo) => {
  eventosMovimentacao.verificarValorCampo(campo);
});
