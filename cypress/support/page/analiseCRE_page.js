import ElementosContratos from "../elements/contrato-elements";
import InputID from "./input_page";
import {
  EventosContratos,
  EventosContratosModal,
  EventosContratosAdicionarNovo
} from "../page/contratos_page";
import { MovimentacaoMensal } from "./movimentacaoMensal_page";
import { ValidacaoAcesso, InputActions } from "./validacaoAcesso_page";

const eventosContratos = new EventosContratos();
const elementosContratos = new ElementosContratos();
const inputCRE = new InputID();

class analiseCRE extends ValidacaoAcesso {

  acessarModulo(modulo) {
    super.acessarModulo(modulo);
  }

  redirecionandoPagina(pagina) {
    super.redirecionandoPagina(pagina);
  }

  PreencherInputCRE(valor, campo) {
    if(campo === "CRE") { 
      inputCRE.inputLabel(campo).eq(0).type(valor);
    }
    else {
      inputCRE.inputLabel(campo).type(valor);
      cy.wait(1000);
    }
  }

  resultadoFiltroCRE(tipoFiltro, valorFiltro) {
    const filtrosCRE = { 
      generico: () => {
        let validar = false;
        const valor = valorFiltro.toString();
        cy.wait(1000);
        cy.get('table').get('tr').not(':first').then(($linhas) => { //ver essa linha e a de baixo com o find 
          cy.wait(1000);
          $linhas.each((index, linha) => {
            cy.wrap(linha).find('td').contains(valor).should('exist').then(($td) => { //coloquei o eq e o index como 1
              if($td.text().includes(valor)){
                console.log($td.text());
                validar = true;
                expect(validar).to.be.true;
              }
              console.log(validar);
              expect(validar).to.be.true;
            });
          });
        });
      },
      filtroMouseOver: () => {
        cy.get('table').find('tr').then(($linha) => {
          for(let i = 1; i <= 15; i++){
            console.log($linha);
            cy.wait(2000);
            cy.get('tr').eq(i).find('td').eq(9).then(($el) => {
            //cy.get("tr").find('td').eq(7).then(($el) => {
              cy.wait(500);
              $el.trigger('mouseover');
              console.log(i);
              cy.get($el).invoke('attr', 'title').should('contain', valorFiltro);
            });
          }
        });
      },

      filtroMouseOverBloqueioPagamento: () => {
        cy.get('table').find('tr').then(($linha) => {
          const valoresFiltros = ["Todos os documentos liberados, após análise", "Pendência de Análise"];
          for(let i = 1; i <= 15; i++){
            console.log($linha);
            cy.wait(2000);
            cy.get('tr').eq(i).find('td').eq(9).then(($el) => {
            //cy.get("tr").find('td').eq(7).then(($el) => {
              cy.wait(500);
              $el.trigger('mouseover');
              console.log(i);
              for (let j = 0; j < valoresFiltros.length; j++) {
                cy.get($el).invoke('attr', 'title').then((title) => {
                  if (title.includes(valoresFiltros[j])) {
                    expect(title).to.contain(valoresFiltros[j]);
                    return;
                  }
                });
              }
            });
          }
        });
      }

    }

    switch (tipoFiltro) {
      case "Contrato":
        filtrosCRE.generico();
      break;
      case "Fornecedor":
        filtrosCRE.generico();
      break;
      case "CRE":
        filtrosCRE.generico();
      case "Bloqueio CRE":  
        filtrosCRE.filtroMouseOver();
      break;
      case "Bloqueio Pagamento": 
        filtrosCRE.filtroMouseOverBloqueioPagamento();
      break;
      default:
        throw new Error("Filtro não encontrado");
    }
  }

  verificarCamposVaziosCRE = (tela) => {
    const camposTelas = {
      contrato: () => {
        cy.get(`input[id="CdContrato-text"]`).should("have.text", "");
        cy.get(`input[id="CdDocto-text"]`).should("have.text", "");
        cy.get(`input[id="NmFornecedor-text"]`).should("have.text", "");
        cy.get(`input[id="NmContraparte-text"]`).should("have.text", "");
        },
      analiseCRE: () => {
        cy.wait(2000);
        cy.get('input[id="Contrato-text"]').should('have.value', '');
        cy.get(`input[id="NmFornecedor-text"]`).should('have.value', '');
        cy.get('#CRE-text').should('have.value', '');
      }
    }
    switch (tela) {
      case "contrato":
        camposTelas.contrato();
      break;
      case "Analise CRE": {
        camposTelas.analiseCRE();
        console.log('entrou no case');
      }
      break;
      default:
        throw new Error("Tela não encontrada");
    }
  }

  clickFiltroCRE(botao, filtro) {
    const inputsClick = {
    bloqueioCRE: () => inputCRE.inputLabel(filtro).find('span').contains(botao).click(),
    bloqueioPagamento: () => inputCRE.inputLabel(filtro).find('span').contains(botao).click()

    }

    switch(filtro)
    {
      case "Bloqueio CRE": 
        inputsClick.bloqueioCRE();
      break;
      case "Bloqueio Pagamento":
        inputsClick.bloqueioPagamento();
      break;
      default:
        throw new Error("Filtro de botão não implementado");
    }
  }
  clickAcoesContrato(botao, contrato) { //Corrigir esse método
    const acoes = {
      consultar: () => {
        cy.get('table').find('tr').contains(contrato).parent().find('a').click();
      }
    } 
    
    switch (botao) {
      case "Consultar": 
        acoes.consultar()
      break;
      default:
        throw new Error("Ação não implementada");
    }
  }

  verificarFlagEncerradosNA(tipoFlag) {
    const flags = {
      flagEncerrado: () => {
        cy.get('[id="Encerrado-labelCheckbox"]').find('span').should('have.attr', 'aria-disabled', 'true');
      },
      flagNA: () => {
        inputCRE.inputLabel('CRE').find('input[value="N/A"]').should('have.value', 'N/A');
      }
    }
    switch (tipoFlag) {
      case 'Encerrado':
        flags.flagEncerrado();
      break;
      case 'N/A': 
        flags.flagNA();
      break;
      default: throw new Error("Flag não encontrada");
    }
  }
}

export { analiseCRE }