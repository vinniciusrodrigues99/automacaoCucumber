import ElementosContratos from "../elements/contrato-elements";
//import { analiseCRE } from "./analiseCRE_page";
const elementosContratos = new ElementosContratos();
import InputID from "./input_page";
//import { ValidacaoAcesso } from "./validacaoAcesso_page";
//import { ValidacaoAcesso } from "./validacaoAcesso_page";
const inputContratos = new InputID();

class EventosContratos {
    //Criar um objeto com todos os valores de campos disponíveis na página
  clickBotao(tipoBotao, nomeEfetivo) {
    this.nomeEfetivo = nomeEfetivo;
    switch (tipoBotao) {
      case "Remover": {
        cy.wait(2000);
        elementosContratos.iconeRemover().last().click();
        break;
      }
      case "Visualizar": {
        cy.wait(1000);
        cy.get("tr").find("td").last().find("svg").find("path").eq(0).click();
        break;
      }
      case "Adicionar Novo": {
        elementosContratos.botaoAdicionarNovo().click();
        cy.wait(2000);
        break;
      }
      case "Delete":
        elementosContratos.iconeRemoverTeste(tipoBotao).last().click();
      break;
      case 'Download da Planilha':
        cy.get('svg').eq(0).click({force: true});
      break;
      case 'Download do PDF':
        cy.get('svg[id="IconPdf"]').click({force: true});
      break;
      case 'Download do Excel':
        cy.get('svg[id="IconExcel"]').click({force: true});
      break;
      case 'Remover efetivo':
        this.metodosDeAcoesMovimentacaoMensal().removerEfetivo();
      break;
      case 'Editar efetivo':
        this.metodosDeAcoesMovimentacaoMensal().editarEfetivo(nomeEfetivo);
      break;
      default:
        cy.get(elementosContratos.botao()).contains(tipoBotao).click();
      break;
    }
  }

  metodosDeAcoesMovimentacaoMensal(nomeEfetivo){
    this.nomeEfetivo = nomeEfetivo;
    const removerEfetivo = () => {
      cy.get('table').find('tr').contains('USUÁRIO DE TESTES').parent('tr').within(() => {
        cy.get('[data-testid="DeleteIcon"]').click();
      });
    };
    const editarEfetivo = (nomeEfetivo) => {
      cy.get('table').find('tr').contains(nomeEfetivo).parent('tr').within(() => {
        cy.get('[data-testid="EditIcon"]').click();
      });
      cy.get(`input[value="${nomeEfetivo}"]`).should('have.value', nomeEfetivo).clear();
    };
    return {
      removerEfetivo,
      editarEfetivo
    }
  }

  preencherInput(valor, campo) {
    const camposEfetuarMovimentacao = {
      justificativaQTD: () => {
        inputContratos.inputLabel('Justificativa de Variação').eq(0).type(valor);      
      },
      justificativaHrsExtras: () => {
        cy.get('input[placeholder="Onde"]').type(valor);
        cy.get('input[placeholder="Quando?"]').type(valor);
        cy.get('input[placeholder="Por quê?"]').type(valor);
      },
      justificativaVariacaoSalario: ()=> {
        cy.get('input[name="txSalBaseJustificativa"]').type(valor);
      },
      totalSalarioBase: () => {
        cy.get('input[name="vlSalBase"]').type(valor);
      },
      totalFolhaPagamento: () => {
        cy.get('input[name="vlFolhaPagto"]').type(valor);
      }
    }


    //cy.wait(3000); VER SE EU ATUALIZO
  
    switch(campo) {
      case "Justificativa de Variação":
        camposEfetuarMovimentacao.justificativaQTD();
        break;
      case "Justificativa de Variação das horas extras":
        camposEfetuarMovimentacao.justificativaHrsExtras();
        break;
      case "Justificativa de Variação do salário base":
        camposEfetuarMovimentacao.justificativaVariacaoSalario();
        break;
      case "Fornecedor":  
        inputContratos.inputLabel(campo).eq(1).type(valor);
        break;
      case "Total Salário Base":
        camposEfetuarMovimentacao.totalSalarioBase();
        break;
      case "Total Folha de Pagamento":
        camposEfetuarMovimentacao.totalFolhaPagamento();
        break;
      default: {
        inputContratos.inputLabel(campo).type(valor);
        //cy.wait(1000);
      }
    }
  }

  preencherinputfornecedor(valor, campo){
    cy.wait(7000);
    inputContratos.inputLabel(campo).type(valor);
  }

  preencherInputComEnter(valor, campo) { //Modificar esse campo 
    switch (valor) {
      case "reusmilgrau1999@hotmail.com": {
        inputContratos.inputLabel(campo).eq(1).click();
        inputContratos.inputLabel(campo).eq(1).type(valor).type("{enter}");
        inputContratos.inputLabel("Observação").last().click();
      break;
      }
      default: {
        //inputContratos.inputLabel(campo).find('input').last().click();
        inputContratos.inputLabel(campo).find('input').last().click().type(valor).type("{enter}");
      }
      break;
    }
  }

  acessarModulo(modulo) {
    const modulos = { 
      contratos: ()=> cy.get('ul').find('li').find('div[aria-label="Contratos"]'),
      CRE: ()=> cy.get('ul').find('li').find('div[aria-label="CRE"]'),
      efetivos: ()=> cy.get('ul').find('li').find('div[aria-label="Efetivos"]'),
    }
    switch(modulo){ 
      case "Contratos": modulos.contratos().click();
      break;
      case "CRE": modulos.CRE().click();
      break;
      case "Efetivos": modulos.efetivos().click();
      break;
      default: {
        cy.get('ul').find('li').find('div[aria-label="Contratos"]').click();
      }
    }

  }

  acessarSeção(nomes) {
    const secoes = {
      contrato: () => cy.get('ul').find('li').contains('Contrato'),
      validacaoAcesso: () => cy.get('ul').find('li').contains('Validação de Acesso'),
      analiseCRE: () => cy.get('ul').find('li').contains('Análise CRE'),
    }
    //cy.get("ul");
    switch(nomes){
      case "Contrato":
        //elementosContratos.itemListaContrato(0).click();
        secoes.contrato().click();
      break;
      case "Validação de Acesso":
        secoes.validacaoAcesso().click();
      break; 
      case "Análise CRE":
        secoes.analiseCRE().click();
      break;
      default: 
        elementosContratos.itemListaContrato(0).click();
        cy.wait(1000);
    }
    
  }

  validarRodape(string, int) {
    var int = parseInt(string) + 1;
    cy.get(elementosContratos.botao())
      .eq(int)
      .contains(string)
      .should("have.text", string);
  }
  
  verificarCampoVazio = (tela) => {
    cy.get(`input[id="CdContrato-text"]`).should("have.text", "");
    cy.get(`input[id="CdDocto-text"]`).should("have.text", "");
    cy.get(`input[id="NmFornecedor-text"]`).should("have.text", "");
    cy.get(`input[id="NmContraparte-text"]`).should("have.text", "");
  };

  verificarCamposVaziosContrato(string) {
    const campos = {
      Contrato: 'input[id="cdContrato-text"]',
      Cnpj: 'input[id="cnpj-text"]',
      Fornecedor: 'input[id="nmFornecedor-text"]',
      Empresa: 'input[id="empresa-text"]',
      Objeto: 'textarea[name="ObjetoDoContrato"]'
      //nome do campo: seletor
      //10x
    };

    cy.get(campos[string]).should("have.text", "");
    //cy.get(campos[nomedoparametro])
  }

  validarTabela(string) {
    //cy.wait(3000);
    elementosContratos.tabela().eq(1).should("have.text", string).click();
    cy.wait(1000);
    cy.get('body').then(($body)=>{
      if ($body.find('h2:contains("Alerta")').length > 0) {
        cy.get('span').contains('Alerta').then(($element) => {
          if($element.is(':visible')) {
            cy.get('button').contains('Fechar').then(($button) => {
              if($button.is(':visible')) {
                $button.click();
              }
              else
              return true;
            });
          }
        });
      } 
      else {
        console.log('Teste passou normalmente e não exibiu o alerta');
      }
    });
  }
  
  validarContrato(string) {
    cy.get("input").eq(1).should("have.attr", "value", string);
  }

  visualizarTabela() {
    cy.get("table").find("thead tr th").contains("Contrato");
  }

  obterQuantidadeLinhas(qtd) {
    cy.get("table").find("tbody tr").should("have.length", qtd);
  }

  removerContrato() {
    cy.wait(3000);
    elementosContratos.botaoExcluir().should("be.visible").eq(10).click();
  }

  adcSubstituto() {
    elementosContratos.botaoAdicionar().should("be.visible").eq(0).click();
  }

  rmSubstituto() {
    elementosContratos.botaoRemover().should("be.visible").last().click();
  }

  inputSubstituto(campo, valor) {
    //this.preencherInput(campo, valor).last();
    inputContratos.inputLabel(campo).last().type(valor);
    cy.wait(2000);
    cy.get(".MuiAutocomplete-option").click();
  }

  visualizarMatricula(string) {
    inputContratos.inputLabel(campo).last().should("have.text", string);
  }

  mensagemSistema(string) {
    cy.wait(1000);
    switch(string) {
      case "Sucesso":
        cy.get('span', { timeout: 10000 }).contains(string);
      break;
      default:
        cy.get('span').contains(string);
    }
  }

  resultadoFiltro(string) {
    cy.contains("td", string);
  }

  anexarArquivos(paginas) {
    const tipoPaginas = {
      Contrato: "[type='file']",
      Modal: "[type='file']"
    };

    if (paginas === "Contrato")
      cy.get(tipoPaginas[paginas]).selectFile("cypress/arquivosParaTestarUpload/evidencia.pdf", { force: true });
    else
      cy.get(tipoPaginas[paginas]).last().selectFile("cypress/arquivosParaTestarUpload/evidencia.txt", { force: true });
  }

  clickIconePesquisar() {
    elementosContratos.iconePesquisar().click();
  }

  redirecionandoPagina(nomePagina) {
    const nomePaginas = { 
      relatorioDeAcesso: ()=> cy.get('span').contains('RELATÓRIOS DE ACESSO'),
      analiseCRE: () => cy.get('span').contains('Análise CRE'),
    }
    const urlsHomolog = {
      relatorioDeAcesso: 'http://10.200.12.244:1917/#/ngt/relatorios-acesso',
      analiseCRE: 'http://10.200.12.244:1917/#/ngt/analise-cre',
    }
    const urlsMelhorias = { 
      relatorioDeAcesso: 'https://portal-ngt-qa.mgr.services/#/ngt/relatorios-acesso',
      analiseCRE: 'https://portal-ngt-qa.mgr.services/#/ngt/analise-cre',
    }
    switch(nomePagina) {
      case "Relatório de acesso": {
        nomePaginas.relatorioDeAcesso().should('be.visible');
        cy.url().should('include', urlsHomolog.relatorioDeAcesso, 'URL inconsistenste');
      }
      break;
      case "Análise CRE": {
        nomePaginas.analiseCRE().should('be.visible');
        cy.url().should('eq', urlsMelhorias.analiseCRE, 'URL consistente');
      }
      break;
      default: throw new Error('Página não encontrada');
    }
  }
}



class EventosContratosModal extends EventosContratos {
  preencherInput(valor, campo) {
      switch (campo) {
        case "Objeto do contrato": {
            cy.get('textarea[name="ObjetoDoContrato"]').last().type(valor);
            break;
      }
        default: {
            inputContratos.inputLabel(campo).last().type(valor);
            cy.wait(1000);
        }
    }
  }
  
  clickBotaoModal(nomeBotao) {
    switch(nomeBotao) {
      case "Salvar e Finalizar":
        elementosContratos.botaoSalvarModal(nomeBotao).click({force: true});
      break;
      case "Upload":
        elementosContratos.botaoUploadModal(nomeBotao).click();
      break;
      case "Delete":
        elementosContratos.iconeRemoverTeste(string).last().click();
      break;
      case "Limpar":
        elementosContratos.botaoLimparModal(nomeBotao).click();
      break;
      default:
        this.clickBotao(nomeBotao);
      break;
    }
  }
}


class EventosContratosAdicionarNovo extends EventosContratos{
  preencherInputComAutoComplete(valor, campo) {
    cy.wait(1000);
    switch(campo) {
      case "MatriculaContraparte":
        cy.get('input[name="matriculaContraparte"]').type(valor).get('.MuiAutocomplete-option').click();
        break;
        default: {
          inputContratos.inputLabel(campo).type(valor);
          cy.wait(1000);
          cy.get('.MuiAutocomplete-option').then(($option) => {
            // Verificar se o elemento está visível
            if ($option.length > 0) {
              // Clicar na opção de autocomplete apenas se estiver visível
              cy.get('.MuiAutocomplete-option').eq(0).click();
            } else 
              return true;
          })
        }
    }
  }

  preencherAdicionarNovo(valor, campos) {
    const camposAdicionar = {
      Contrato: 'input[id="cdContrato-text"]',
      CNPJ: 'input[id="cnpj-text"]',
      Objeto: 'textarea[name="txObjetoContrato"]',
      CRE: 'input[name="CRE"]',
      ValorContratual: 'input[placeholder="Valor"]',
      MatriculaContraparte: 'input[name="matriculaContraparte"]'  
    }

    switch(campos) {
      case 'CRE': {
        cy.get(camposAdicionar[campos]).type(valor);
        cy.wait(1000);
        cy.get('.MuiAutocomplete-option').then(($option) => {
          // Verificar se o elemento está visível
          if ($option.length > 0) {
            // Clicar na opção de autocomplete apenas se estiver visível
            cy.get('.MuiAutocomplete-option').eq(0).click();
          } else return true;
        })
      }
      break;
      default:
        cy.get(camposAdicionar[campos]).type(valor);
    }
  }


  verificarCamposVazios_AdicionarNovo(pagina) {
    if(pagina === 'novo contrato'){
      const campos = {
        Contrato: 'input[id="cdContrato-text"]',
        CNPJ: 'input[id="cnpj-text"]',
        Objeto: 'textarea[name="txObjetoContrato"]',
        CRE: 'input[name="CRE"]',
        MatriculaContraparte: 'input[name="matriculaContraparte"]' 
        //nome do campo: seletor
        //10x
      };    
      Object.keys(campos).forEach((campo) =>{
        cy.get(campos[campo]).should("have.value", "");
      })
    }
    else if(pagina ==='Movimentação Mensal')
    {
      const camposMovimentacao = {
        contrato: 'input[id="cdContrato-text"]',
        competenciaInicio: 'input[placeholder="mm/aaaa"]',
        competenciaFim: 'input[placeholder="mm/aaaa"]',
        fornecedor: 'input[id="nmFornecedor-text"]',
        cpf: 'input[id="cpf-text"]',
        colaborador: 'input[id="nmColaborador-text"]'
      }
      Object.keys(camposMovimentacao).forEach((campo) =>{
        if(camposMovimentacao[campo] === camposMovimentacao.competenciaInicio) {
        cy.get(camposMovimentacao[campo]).eq(0).should("have.value", "");
        cy.get(camposMovimentacao[campo]).eq(1).should("have.value", "");
        }
        else
        cy.get(camposMovimentacao[campo]).should("have.value", "");
      })//cy.get(campos[nomedoparametro])
    }
  }
}

export {
  EventosContratos,
  EventosContratosModal,
  EventosContratosAdicionarNovo
}