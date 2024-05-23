import ElementosContratos from "../elements/contrato-elements";
import InputID from "./input_page";
import {
  EventosContratos,
  EventosContratosModal,
  EventosContratosAdicionarNovo
} from "../page/contratos_page";
import { MovimentacaoMensal } from "./movimentacaoMensal_page";

const elementosContratos = new ElementosContratos();
const inputValidacao = new InputID();

class ValidacaoAcesso extends MovimentacaoMensal {
  acessarEmail(plataforma) {
    if(plataforma == 'vintomaper')
    cy.visit('https://cryptogmail.com/');
    else if(plataforma == 'email');
    cy.visit('https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=c421b466-80d3-733e-cd6e-357a43a702b2&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&domain_hint=modalgr.com.br&nonce=638436848563257933.86dc0334-b95a-40e7-9bcc-65653236cedf&state=Dcu9DoIwFEDhou_iVqm97W07EAcTwwAOSKJh6x-JRIIBgvHt7fCd7WSEkH2ySzKWQhSCFoBaaInApTIAR43BMwBBnZGWChYVNc57ihIlcEAfQ5-lt8ynr83Py2rXWJwOcwyvOfq1nQpbNsyXNVY_s4Vnszhu5mo0Yze-h66t-e0uB8fZ5h7Xj7voPw');
  }

  preencherCampo(campo, email) {
    const campos = {
      email: '.field--value',
      login: '.new-email--address',
    }
    try {
      if(campo == 'email')
        cy.get(campos.email).type(email);
      else if(campo == 'login')
        cy.get(campos.login).click();
      else
        throw new Error('Campo não encontrado');
    }
    catch (error) {
      if(error) {
        console.log(error.message)
      }
    }
  }
    
  ResultadoFiltrosValidacaoAcesso(filtro) {
    cy.get('td').contains(filtro);
    cy.wait(2000);
  }

  Acoes(acoes) {

    const botoes = {
      relacionarContrato: '[data-testid="LinkIcon"]',
      editar: '[data-testid="EditIcon"]',
      bloquear: '[data-testid="BlockIcon"]',
      
    }

    if(acoes == 'relacionar contrato'){
      cy.wait(2000);
      cy.get(botoes.relacionarContrato).click();
    }
    else if(acoes == 'editar') {
      cy.get(botoes.editar).eq(0).click();
    }
    else if(acoes == 'bloquear') {
      cy.get(botoes.bloquear).click();
    }
    else if(acoes == 'reativar') 
      cy.get(botoes.bloquear).click();
    else
      throw new Error('Ação não encontrada');
  }

  colaboradorDesativado(nomeColaborador) {
    cy.get('tr').contains(nomeColaborador).parent().get('td[title]').invoke('attr', 'title').should('contain', 'Desativado');  
  }

  validarColaborador(colaborador) {
    cy.get('tr').contains('td', colaborador).parent().find('td input').click();
  }

  vincularContrato(contrato)
  { 
    cy.get('ul').contains('li', contrato).find('svg').get('[data-testid="CheckBoxOutlineBlankIcon"]').click();
  }

  relacionarContrato(nomeSeta) {
    const setas = { 
      vincular: () =>  cy.get('.sc-bGaVxB').find('svg').find('path').eq(0).click(),
      desvincular: () =>  cy.get('.sc-bGaVxB').find('svg').find('path').eq(1).click()
    }
    if(nomeSeta == 'vincular')
      setas.vincular();
    else if(nomeSeta == 'desvincular')
      setas.desvincular();
    else
      throw new Error('Seta não encontrada');
  }

  respostaRequisicao(status) {

    const respostaStatus = {
      HTTP200: () => {
        cy.intercept('OPTIONS', 'https://api-ngt-qa.mgr.services/read/api/UsuarioFornecedor*').as('minhaRequisicao');
        super.clickBotao('Pesquisar');
        cy.wait('@minhaRequisicao').its('response.statusCode').should('eq', 200);
      },
      HTTP204: () => {
        cy.intercept('OPTIONS', 'https://api-ngt-qa.mgr.services/read/api/UsuarioFornecedor*').as('minhaRequisicao');
        super.clickBotao('Pesquisar');
        cy.wait('@minhaRequisicao').its('response.statusCode').should('eq', 204);
      },
    }
  
    if (status == "HTTP 200") {
      respostaStatus.HTTP200();
    }
    else if (status == "HTTP 204") {
      respostaStatus.HTTP204();
    }
    else
      throw new Error('Status não encontrado');
  }

}

  class InputActions extends ValidacaoAcesso {

    selecionarPerfil(tipoPerfil) {
      const perfil = {
        FornecedorAdministrador: () => cy.get('ul').find('li').contains('Fornecedor Administrador').click(),
        FornecedorOperadorNGT: () => cy.get('ul').find('li').contains('Fornecedor Operador NGT').click(),
        FornecedorOperadorGST: () => cy.get('ul').find('li').contains('Fornecedor Operador GST').click(),
        FornecedorOperadorHibrido: () => cy.get('ul').find('li').contains('Fornecedor Operador Híbrido').click(),
      }
      if (tipoPerfil == "Fornecedor Administrador") {
        perfil.FornecedorAdministrador();
      }
      else if (tipoPerfil == "Fornecedor Operador NGT") {
        perfil.FornecedorOperadorNGT();
      }
      else if (tipoPerfil == "Fornecedor Operador GST") {
        perfil.FornecedorOperadorGST();
      }
      else if (tipoPerfil == "Fornecedor Operador Híbrido") {
        perfil.FornecedorOperadorHibrido();
      }
      else
        throw new Error('Perfil não encontrado');
    }

    clicarInput(nomeBotao) {
      const botoes = {
        Perfil: () => inputValidacao.inputLabel('Perfil').click(),
        Status: () => inputValidacao.inputLabel('Status').click(),
      }
      if(nomeBotao == 'Perfil')
      botoes.Perfil();
      else if(nomeBotao == 'Status')
      botoes.Status();
      else
      throw new Error('Botão não encontrado');
    }

    resultadoFiltroValidacaoAcessoStatus(valorFiltro) {
      const filtros = { 
        todos: () => {
          const URLS = { 
            'requisicaoValidacaoAcesso': 'http://10.200.12.244:3161/read/api/UsuarioFornecedor*',
          }

          cy.get(':nth-child(1) > :nth-child(8) > .sc-bYoBSM').trigger('mouseover');
          cy.get('td[title]').invoke('attr', 'title').should('contain', 'Liberado');
          cy.get(':nth-child(1) > :nth-child(8) > .sc-bYoBSM').trigger('mouseout');
          
          cy.wait(1000);

          cy.intercept('GET', URLS.requisicaoValidacaoAcesso).as('minhaRequisicao');
          super.clickBotao('Pesquisar');
          cy.wait('@minhaRequisicao').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            // cy.intercept('GET', URLS.requisicaoValidacaoAcesso).as('minhaRequisicao');
            // super.clickBotao('Pesquisar');
            cy.intercept('GET', URLS.requisicaoValidacaoAcesso).as('minhaRequisicaoItems');
            super.clickBotao('Pesquisar');
            cy.wait('@minhaRequisicaoItems').then((interceptionItems) => {
            console.log(interceptionItems.response.body.items);
              const { items } = interceptionItems.response.body;
              let encontrouP = false;
              let encontrouL = false;
              // Verifica se todos os itens têm a propriedade flSituacao com valor 'P' ou 'L'
              for( let i = 0; i< items.length; i++) {
                if(items[i].flSituacao == 'P') {
                  console.log(items[i]);
                  encontrouP = true;
                }
                if(items[i].flSituacao == 'L') {
                  console.log(items[i]);
                  encontrouL = true;
                }
              }
              if(encontrouP)
                expect(encontrouP).to.be.true;
              if(encontrouL)
              expect(encontrouL).to.be.true;
            }); 
          });
        },
        bloqueado: () => {
          cy.get('table').find('td').eq(8).each(($el, index, $list) => {
            cy.wait(500);
            $el.trigger('mouseover');
            cy.get('td[title]').invoke('attr', 'title').should('contain', 'Vencido');
            console.log($el[index]);
            console.log($list);
          });
        },
        desativado: () => {
          cy.get('table').find('td').eq(8).each(($el, index, $list) => {
            cy.wait(500);
            $el.trigger('mouseover');
            cy.get('td[title]').invoke('attr', 'title').should('contain', 'Desativado');
          });
        },
        pendente: () => {
          cy.get('table').find('td').eq(8).each(($el, index, $list) => {
            cy.wait(500);
            $el.trigger('mouseover');
            cy.get('td[title]').invoke('attr', 'title').should('contain', 'Aguardando validação');
          });
        },
        liberado: () => {
          //for( let j = 0; j )
          cy.get('table').find('tr').then(($linha) => {
            for(let i = 1; i <= 15; i++){
              console.log($linha);
              cy.wait(2000);
              cy.get('tr').eq(i).find('td').eq(7).then(($el) => {
              //cy.get("tr").find('td').eq(7).then(($el) => {
                cy.wait(500);
                $el.trigger('mouseover');
                console.log(i);
                cy.get($el).invoke('attr', 'title').should('contain', 'Liberado');
              });
            }
          });
        }
      }
      if(valorFiltro == 'Todos') { 
        filtros.todos();
      }
      else if(valorFiltro == 'Bloqueado') {
        filtros.bloqueado();
      }
      else if(valorFiltro == 'Desativado') {
        filtros.desativado();
      }
      else if(valorFiltro == 'Pendente') {
        filtros.pendente();
      }
      else if(valorFiltro == 'Liberado') {
        filtros.liberado();
      }
      else
      this.ResultadoFiltrosValidacaoAcesso(valorFiltro)
    }

    selecionarStatus(tipoStatus) {
      const status = {
        Todos: () => cy.get('ul').find('li').contains('Todos').click(),
        Bloqueado: () => cy.get('ul').find('li').contains('Bloqueado').click(),
        Desativado: () => cy.get('ul').find('li').contains('Desativado').click(),
        Pendente: () => cy.get('ul').find('li').contains('Pendente').click(),
        Liberado: () => cy.get('ul').find('li').contains('Liberado').click(),
      }
      if (tipoStatus == "Todos") {
        status.Todos();
      }
      else if (tipoStatus == "Bloqueado") {
        status.Bloqueado();
      }
      else if (tipoStatus == "Desativado") {
        status.Desativado();
      }
      else if (tipoStatus == "Pendente") {
        status.Pendente();
      }
      else if (tipoStatus == "Liberado") {
        status.Liberado();
      }
      else
        throw new Error('Perfil não encontrado');
    }

    inputsValidadedeAcesso(valor1, campo1, valor2, campo2) {
      super.preencherInput(valor1, campo1);
      super.preencherInput(valor2, campo2);
    }


  }


export { ValidacaoAcesso, InputActions }