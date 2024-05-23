import ElementosContratos from "../elements/contrato-elements";
import InputID from "./input_page";
import {
  EventosContratos,
  EventosContratosModal,
  EventosContratosAdicionarNovo
} from "../page/contratos_page";

const elementosContratos = new ElementosContratos();
const inputContratos = new InputID();
let scan;

beforeEach(() => {
  cy.fixture("acessos").then(
    (x) => {
      scan = x;
    }
  )});

  class MovimentacaoMensal extends EventosContratos {
    acessarModulo(modulo) {
      super.acessarModulo(modulo);
    }
  
    resultadoFiltro(filtro) {
      cy.wait(3000);
      scan.CPFS.forEach((x) => {
        const filtros = {
          CPF: x,
          Contrato: '4600018705',
          Colaborador: 'MARCELO AUGUSTO MARQUES',
          Status: 'Todos',
          Tipos: ['Cadastradas', 'Não Cadastradas', 'Todas'],
          DiretoriaExecutiva: ['DIRETORIA EXECUTIVA PRODUCAO SIDERURGIA', 'DIRETORIA INVESTIMENTOS MINERACAO', 'DIRETORIA SUPERINTENDENCIA MINERACAO', 'DIRETORIA EXECUTIVA DE FINANÇAS', 'DIRETORIA ADMINISTRATIVA FINANCEIRA'],
          Diretoria: ['DIRETORIA DE PRODUTIVIDADE E GERAÇÃO DE RISCOS','DIRETORIA DE SUPRIMENTOS'],
          GerenciaGeral: ['GERENCIA GERAL DE METALURGIA DO ACO'],
          gerencia: ['GERENCIA DE ACIARIA', 'GERENCIA DE TECNOLOGIA EQUIP E PROCESSOS'],
          competencia: ['11/2023', '12/2023'],
          competenciaMovNaoCadastrada: "Movimentações não cadastradas"
        };
        this.propriedadeTipos = filtros.Tipos;
        this.propriedades = filtros;
  
        switch(filtro) {
          case filtros.CPF: 
            cy.get('td').contains(filtros.Contrato);
          break;
          case filtros.Colaborador:
            filtros.Contrato = '4600018705'
            cy.contains('td', filtros.Contrato);
          break;
          case filtros.Status:
            this.validacaoResultadoFiltroStatus(filtro);
            break;
          case filtros.Tipos[0]: 
            this.validacaoResultadoFiltroMovimentacoes(filtro);
          break;
          case filtros.Tipos[1]: 
            this.validacaoResultadoFiltroMovimentacoes(filtro);
          break;
          case filtros.Tipos[2]:
            this.validacaoResultadoFiltroMovimentacoes(filtro);
          break;
          case filtros.DiretoriaExecutiva[0]:
            this.validacaoResultadoFiltroDiretoriaExecutiva(filtro);
          break;
          case filtros.DiretoriaExecutiva[1]:
            this.validacaoResultadoFiltroDiretoriaExecutiva(filtro);
          break;
          case filtros.DiretoriaExecutiva[2]:
            this.validacaoResultadoFiltroDiretoriaExecutiva(filtro);
          break;
          case filtros.DiretoriaExecutiva[3]:
            this.validacaoResultadoFiltroDiretoriaExecutiva(filtro);
          break;
          case filtros.DiretoriaExecutiva[4]:
            this.validacaoResultadoFiltroDiretoriaExecutiva(filtro);
          break;
          case filtros.Diretoria[0]:
            this.validacaoResultadoFiltroDiretoria(filtro);
          break;
          case filtros.Diretoria[1]:
            this.validacaoResultadoFiltroDiretoria(filtro);
          break;
          case filtros.GerenciaGeral[0]:
            this.validacaoResultadoFiltroGerenciaGeral(filtro);
          break;
          case filtros.gerencia[0]:
            this.validacaoResultadoFiltroGerenciaGeral(filtro);
          break;
          case filtros.gerencia[1]: 
           this.validacaoResultadoFiltroGerenciaGeral(filtro);
          break;
          case 'competência':
            console.log('bateu aqui');
            this.validacaoResultadoFiltroCompetencia(filtros.competencia[0], filtros.competencia[1]);
          break;
          case filtros.competenciaMovNaoCadastrada:
            this.validacaoResultadoFiltroMovNaoCadastrada(filtro);
          break;
          default:
          super.resultadoFiltro(filtro);
        }
      })
    }
  
    filtroDropdown(valor, campo) {
      this.propriedadeCampo = campo; //exportando a propriedade desse método. 
      switch(campo) {
        case 'Status':
          this.filtroDropdownStatus(valor);
        break;
        case 'Tipos Movimentações':
          this.filtroDropdownTiposMovimentacoes(valor);
        break;
        case "Diretoria Executiva":
          this.filtroDropdownDiretoriaExecutiva(valor);
        break;
        case "Diretoria":
          this.filtroDropdownDiretoria(valor);
        break;
        case 'Gerência Geral' || 'Gerência':
          this.filtroDropdownGerenciaGeral(valor, campo);
        break;
        case 'Nacionalidade':
          this.filtroDropdownNacionalidade(valor);
        break;
        case 'Status do colaborador':
          this.filtroDropdownModal(valor, campo);
        break;
        default:
          this.filtroDropDownGenerico(valor, campo);
        break;
      }
    }
    
    filtroDropdownModal(valor, campo) {
      switch(campo) {
        case 'Status do colaborador': {
          inputContratos.inputLabel('Status').click();
          cy.wait(1000);
          cy.get('.MuiSelect-select').then(($option) => {
            if($option.length > 0) {
              cy.get('li').contains(valor).click();
            }
            else {
              throw new Error(`Valor inesperado para a variável: ${valor}`);
            }
          });
        }
        break;
        default:
          throw new Error('Você passou um campo inválido');
      }
    }
    filtroDropDownGenerico(valor, campo){
      inputContratos.inputLabel(campo).click();
      cy.wait(1000);
      cy.get('.MuiSelect-select').then(($option) => {
        if($option.length > 0) {
          cy.get('li').contains(valor).click();
        }
        else {
          throw new Error(`Valor inesperado para a variável: ${valor}`);
        }
      });
    }
    filtroDropdownNacionalidade(valor){
      inputContratos.inputLabel('Nacionalidade').click();
      cy.wait(1000);
      cy.get('.MuiSelect-select').then(($option) => {
        if ($option.length > 0) {
          // Clicar na opção de autocomplete apenas se estiver visível
          switch(valor){
            case 'Brasileiro':
              cy.get('li').contains(valor).click();
            break;
            case 'Estrangeiro':
              cy.get('li').contains(valor).click();
            break;
            default:
              throw new Error(`Valor inesperado para a variável: ${valor}`);
          }
        }
      })
    }
    
    filtroDropdownStatus(valor){
      inputContratos.inputLabel('Status Mob.').click();
      cy.wait(1000);
      cy.get('.MuiSelect-select').then(($option) => {
        if ($option.length > 0) {
          // Clicar na opção de autocomplete apenas se estiver visível
          switch(valor){
            case 'Sem Mobilização':
              cy.get('li').contains(valor).click();
              break;
            case 'Com Mobilização':
              cy.get('li').contains(valor).click();
              break;
            case 'Compartilhado':
              cy.get('li').contains(valor).click();
              break;
            case 'Todos':
              cy.get('li').contains(valor).click();
              break;
              default:
                throw new Error(`Valor inesperado para a variável: ${valor}`);
          }
        }
      })
    }
  
    filtroDropdownTiposMovimentacoes(valor){
  
      inputContratos.inputLabel('Tipos Movimentações.').click();
      cy.wait(1000);
      cy.get('.MuiSelect-select').then(($option) => {
        if ($option.length > 0) {
          // Clicar na opção de autocomplete apenas se estiver visível
          switch(valor){
            case 'Cadastradas':
              cy.get('li').contains(valor).click();
            break;
            case 'Não Cadastradas':
              cy.get('li').contains(valor).click();
            break;
            case 'Todas':
              cy.get('li').contains(valor).click();
            break;
            default:
              throw new Error(`Valor inesperado para a variável: ${valor}`);
          }
        }
      })
    }
  
    filtroDropdownDiretoriaExecutiva(valor){
      inputContratos.inputLabel('Diretoria Executiva').wait(2000).type('a').wait(2000);
      cy.get('ul').eq(1).then(($option) => {
      if ($option.length > 0) {
        // Clicar na opção de autocomplete apenas se estiver visível
        switch(valor){
          case 'DIRETORIA EXECUTIVA PRODUCAO SIDERURGIA':
            cy.get('li').contains('11000015 - DIRETORIA EXECUTIVA COMERCIAL SIDERURGIA').click();
          break;
          case "DIRETORIA INVESTIMENTOS MINERACAO":
            cy.get('li').contains('11005195 - DIRETORIA INVESTIMENTOS MINERACAO').click();
          break;
          case 'DIRETORIA SUPERINTENDENCIA MINERACAO':
            cy.get('li').contains('11003664 - DIRETORIA SUPERINTENDENCIA MINERACAO').click();
          break;
          case 'DIRETORIA EXECUTIVA DE FINANÇAS':
            cy.get('li').contains('11004096 - DIRETORIA EXECUTIVA DE FINANCAS').click();
          break;
          case 'DIRETORIA ADMINISTRATIVA FINANCEIRA':
          cy.get('li').contains('11005279 - DIRETORIA ADMINISTRATIVA FINANCEIRA').click();
          break;
          default:
            throw new Error(`Valor inesperado para a variável: ${valor}`);
        }
      }
    })
    }
  
    filtroDropdownDiretoria(valor){
      inputContratos.inputLabel('Diretoria').eq(1).wait(2000).type('a').wait(2000);
        cy.get('ul').eq(1).then(($option) => {
        if ($option.length > 0) {
          // Clicar na opção de autocomplete apenas se estiver visível
          switch(valor){
            case 'DIRETORIA DE PRODUTIVIDADE E GERAÇÃO DE RISCOS':
              cy.get('li').contains('11006367 - DIRETORIA DE PRODUTIVIDADE E GER RISCOS').click();
            break;
            case "DIRETORIA DE SUPRIMENTOS":
              cy.get('li').contains('11000040 - DIRETORIA DE SUPRIMENTOS').click();
            break;
            default:
              throw new Error(`Valor inesperado para a variável: ${valor}`);
          }
        }
      })
    }
  
    filtroDropdownGerenciaGeral(valor, campo){
      //const campo = this.propriedadeCampo;
      if(campo === 'Gerência Geral'){
        inputContratos.inputLabel(campo).wait(2000).type('a').wait(2000);
        cy.get('ul').eq(1).then(($option) => {
        if ($option.length > 0) {
          // Clicar na opção de autocomplete apenas se estiver visível
          switch(valor){
            case 'GERENCIA GERAL DE METALURGIA DO ACO':
              cy.get('li').contains('11000082 - GERENCIA GERAL DE METALURGIA DO ACO').click();
            break;
            case "DIRETORIA DE SUPRIMENTOS":
              cy.get('li').contains('11000040 - DIRETORIA DE SUPRIMENTOS').click();
            break;
            default:
              throw new Error(`Valor inesperado para a variável: ${valor}`);
            }
          }
        })
      }
      else if(campo === 'Gerência'){
        inputContratos.inputLabel(campo).eq(1).wait(2000).type('a').wait(4000);
        cy.get('ul').then(($option) => {
        if ($option.length > 0) {
          // Clicar na opção de autocomplete apenas se estiver visível
          switch(valor){
            case 'GERENCIA DE ACIARIA':
              cy.get('li').contains('11000048 - GERENCIA DE ACIARIA').click();
            break;
            case "GERENCIA DE TECNOLOGIA EQUIP E PROCESSOS":
              cy.get('li').contains('11000118 - GERENCIA DE TECNOLOGIA EQUIP E PROCESSOS').click();
            break;
            default:
              throw new Error(`Valor inesperado para a variável: ${valor}`);
            }
          }
        })
      }
    } 
    validacaoResultadoFiltroStatus(filtro){
      const resultadoFiltros = {
        Status: ['Com Mobilização', 'Sem Mobilização'],
      }
  
      const objetoStatus = this.propriedades;
  
      if(filtro === objetoStatus.Status){
        cy.contains('td', resultadoFiltros.Status[0]);
        cy.contains('td', resultadoFiltros.Status[1]);
      }
    }
  
    validacaoResultadoFiltroMovNaoCadastrada(filtro) {
      const objetoMovNaoCadastrada = this.propriedades.competenciaMovNaoCadastrada 
      if(filtro === objetoMovNaoCadastrada) {
        cy.get('td').should('not.exist');
      }
    }

    validacaoResultadoFiltroMovimentacoes(filtro) {
      const tipoMov = {
        Cadastrado: ["Com Mobilização", "Sem Mobilização"],
        Não_Cadastrados: ["- - - -"],
        Todas: ["Com Mobilização", "Sem Mobilização", "- - - -"]
      }
      const objetoFiltros = this.propriedadeTipos;
  
      if(filtro === objetoFiltros[0]) {
          cy.contains('td', tipoMov.Cadastrado[0]);
          //cy.contains('td', tipoMov.Cadastrado[1]);
          // elementosContratos.checkboxValidacaoContraparte().should('have.attr', 'checked');
          // elementosContratos.checkboxValidacaoAnalista().should('have.attr', 'checked');
      }
      else {
          // Adicione mais verificações conforme necessário para Cadastradas
        if(filtro === objetoFiltros[1])
          cy.contains('td', tipoMov.Não_Cadastrados[0]);
          // Adicione mais verificações conforme necessário para Não cadastradas
        else{
          cy.contains('td', tipoMov.Todas[0]);
          //cy.contains('td', tipoMov.Todas[1]);
          cy.contains('td', tipoMov.Todas[2]);
        }
      }
    }
    
    validacaoResultadoFiltroDiretoriaExecutiva(filtro){
      const tipoFiltro = {
        DiretoriaExecutiva: ['10418', '1045793533PREAL'],
        DiretoriaInvestimentosMineracao: ['00817'],
        DiretoriaSuperintendenciaMineracao: ['4600014327SC17', '4600016500'],
        DiretoriaExecutivaFinancas: ['4600022276'],
        DiretoriaAdministrativaFinanceira: ['S16051320']
      }
      const objetoFiltrosDiretoria = this.propriedades.DiretoriaExecutiva;
  
      if(filtro === objetoFiltrosDiretoria[0]) {
          cy.contains('td', tipoFiltro.DiretoriaExecutiva[0]);
          //cy.contains('td', tipoFiltro.DiretoriaExecutiva[1]);
      }
      else if(filtro === objetoFiltrosDiretoria[1]){
      cy.contains('td', tipoFiltro.DiretoriaInvestimentosMineracao[0]);
      }
          // Adicione mais verificações conforme necessário para Não cadastradas
      else if(filtro === objetoFiltrosDiretoria[2]) {
        cy.contains('td', tipoFiltro.DiretoriaSuperintendenciaMineracao[0]);
        cy.contains('td', tipoFiltro.DiretoriaSuperintendenciaMineracao[1]);
      }
      else if(filtro === objetoFiltrosDiretoria[3]){
        cy.contains('td', tipoFiltro.DiretoriaExecutivaFinancas[0]);
      }
      else if(filtro === objetoFiltrosDiretoria[4]){
        cy.contains('td', tipoFiltro.DiretoriaAdministrativaFinanceira[0]);
      }
    }
  
    validacaoResultadoFiltroDiretoria(filtro){
      
      const tipoFiltro = {
        diretoriaProdutividadeGeracaoRiscos: ['S14040656'],
        diretoriaSuprimentos: ['S16236991'],
      }
  
      const objetoFiltrosDiretoria = this.propriedades.Diretoria;
  
      if(filtro === objetoFiltrosDiretoria[0]) {
          cy.contains('td', tipoFiltro.diretoriaProdutividadeGeracaoRiscos[0]);
      }
      else if(filtro === objetoFiltrosDiretoria[1]){
      cy.contains('td', tipoFiltro.diretoriaSuprimentos[0]);
      }
    }
  
    validacaoResultadoFiltroGerenciaGeral(filtro){
      const tipoFiltro = {
        gerenciaGeralMetalurgiaAco: '4502904269',
        gerencia: ['S12801822SC16', 'S14943770SC01']
      }
  
      const objetoFiltrosGerenciaGeral = this.propriedades.GerenciaGeral;
      const objetoFiltrosGerencia = this.propriedades.gerencia;
      
      if(filtro === objetoFiltrosGerenciaGeral[0]){
        cy.contains('td', tipoFiltro.gerenciaGeralMetalurgiaAco)
      }
      else if(filtro === objetoFiltrosGerencia[0]){
        cy.contains('td', tipoFiltro.gerencia[0]);
      }
      else if(filtro === objetoFiltrosGerencia[1]){
        cy.contains('td', tipoFiltro.gerencia[1]);
      }
    }
  
    validacaoResultadoFiltroCompetencia(filtro, filtro2){
      const saidaFiltro = {
        contratosCompetência11até12: ['4503348839', '4503135897', '4503427450', '4503135897']
      }
      const valoresCompetencia = this.propriedades.competencia; //Encapsulando e guardando o parâmetro. 
      
      if(filtro === valoresCompetencia[0] && filtro2 === valoresCompetencia[1]){
        console.log('veio aqui tb');
        cy.contains('td', saidaFiltro.contratosCompetência11até12[0]);
        cy.contains('td', saidaFiltro.contratosCompetência11até12[1]);
        cy.contains('td', saidaFiltro.contratosCompetência11até12[2]);
        cy.contains('td', saidaFiltro.contratosCompetência11até12[3]);
      }
      else throw new Error("Competência inválida");
    }
  
    filtroCompetencia(valor1, campo1, valor2, campo2) {
      super.preencherInput(valor1, campo1);
      super.preencherInput(valor2, campo2);
    }
  
    verificarCamposVaziosMovimentacao(movimentacaoMensal) {
      const extendeContrato = new EventosContratosAdicionarNovo();
      extendeContrato.verificarCamposVazios_AdicionarNovo(movimentacaoMensal);
    }
  
    validarRodapeMovimentacao(int) {
      cy.get(elementosContratos.botao()).contains(int).should("have.text", int);
    }
    
    download(nmArquivo) {
      switch(nmArquivo){
        case 'template':
          super.clickBotao("Download Template");
          cy.readFile('cypress/downloads/template-fornecedor.xls').should('exist');
        break;
        case 'PDF':
          super.clickBotao('Download do PDF');
          cy.readFile('cypress/downloads/202401-Competencia-atual.pdf').should('exist');
        break;
        case 'Excel':
          super.clickBotao('Download do Excel');
          cy.readFile('cypress/downloads/caso30download.xls').should('exist');
        break;
        default: 
          throw new Error('Arquivo não encontrado');
      }
      // if ( nmArquivo=== 'template') {
      //   super.clickBotao("Download Template")
      //   cy.readFile('cypress/downloads/template-fornecedor.xls').should('exist');
      // }
      // else if (nmArquivo === 'PDF'){
      //   super.clickBotao('Download do PDF');
      //   cy.readFile('cypress/downloads/202401-Competencia-atual.pdf').should('exist');
      // }
    }
    opcaoMobilizacao(opcao){
      switch (opcao) {
        case 'Sem Mobilização':
          cy.get('input[id="Sem Mobilização-checkbox"]').click();
        break;
        case 'Com Mobilização':
          cy.get('input[id="Com Mobilização-checkbox"]').click();
        break;
        case 'Somente Compartilhado':
          cy.get('input[id="id="Somente Compartilhado-checkbox""]').click();
        break;
      }
    }
    verificarEstadoBotao(botao){
      const botoes = {
        replicar: 'button[id="Replicar Para Atual-button-default"]',
        upload: 'button[id="Upload-button-default"]'
      }
      switch (botao){
        case 'Replicar para atual':
          cy.get(botoes.replicar).invoke('attr', 'disabled').then((estado)=>{
          if(estado) {
            return true;
          }
          else
            throw new Error("O botão deveria estar desabilitado");
        });
        break;
        case 'Upload':
          cy.get(botoes.upload).invoke('attr', 'disabled').then((estado)=>{
            if(estado) {
              return true;
            }
            else
              throw new Error("O botão deveria estar desabilitado");
          });
        break;
        case 'Validar':
          cy.get(botoes.replicar).then(($estado)=>{
            if($estado.should('have.attr', 'disabled')) {
              return true;
            }
            else
              throw new Error("O botão deveria estar desabilitado");
          });
        break;
      }
    }
  
    verificarEfetivo(mensagem) {
      if(mensagem == 'há lançamentos de efetivos'){
        cy.get("table").find("tbody tr").should('have.length.gte', 1);
      }
      else if(mensagem === 'Não possui dados nesta competencia'){
        cy.get('td').contains(mensagem);
      }
      else
        super.mensagemSistema(mensagem);
    }

    clicaNoContratoComCompetencia(contrato, competencia) {
      cy.get('table').find('tr').contains(competencia).parent('tr').contains(contrato).should("include.text", contrato).click(); //include ao invés de have.text porque tinha um espaço no td da table que invalidava o teste. 
    }

    validandoContratoCompartilhado(contrato) {
      cy.get('input[id="Número do Contrato-text"]').should('have.value', contrato);
    }

    colapseAnterior(pagina){
      switch(pagina){
        case "Pesquisar":
          super.visualizarTabela();
        break;
      }
    }

    editarEfetivo(){
      cy.get('table').find('tr').contains('VINNICIUS').parent('tr').within(() => {
        cy.get('[data-testid="EditIcon"]').click();
      });
    }

    anexarMovimentacao(tipoUpload) {
      const botoesDeUpload = {
        botaoAnexarEfetivosDuplicados: () => cy.get('[type="file"]').selectFile("cypress/arquivosParaTestarUpload/testeDeUploadEfetivos.xls", { force: true }),
        botaoAnexarEfetivosComSucesso: () => cy.get('[type="file"]').selectFile("cypress/arquivosParaTestarUpload/caso26UploadSucesso.xls", { force: true }),
      }
      if(tipoUpload === 'movimentação mensal duplicada')
        botoesDeUpload.botaoAnexarEfetivosDuplicados();
      else if(tipoUpload === 'movimentação mensal correta')
        botoesDeUpload.botaoAnexarEfetivosComSucesso();
      else
        throw new Error('Tipo de upload inválido');
    }


    mensagemErroEfetivoDuplicado(mensagem) {
      const mensagens = {
        alertaDeErroRelatorio: () => cy.get('h2').contains('Relatório Alertas / Erros')
      }
      switch (mensagem){
        case 'alerta de erro': 
          cy.wait(4000);
          mensagens.alertaDeErroRelatorio().should('have.text', 'Relatório Alertas / Erros');
        break;
        default: throw new Error('A mensagem de erro não foi encontrada');
      }
    }

  botaoRemoverEfetivo(nomeBotao, nomeEfetivo) {
    cy.get('table').find('tr').contains(nomeEfetivo).parent('tr').within(() => {
      switch(nomeBotao){
        case "Remover":
          cy.get('[data-testid="DeleteIcon"]').click();
        break;
        default: throw new Error('Botão não encontrado');
      }
    });
  }
  

  verificarValorCampo(campo, valor){
    switch(campo){
      case 'Total Efetivo':
        this.valorCampoTotalEfetivo();
      break;
      case 'Mês atual':
        this.valorCampoMesAtual();
      break;
      default: throw new Error('Campo não encontrado');
    }
  }


  valorCampoTotalEfetivo(){
    cy.get('#qtAtivo-text').invoke('val').then((val1) => {
      let valor1 = parseFloat(val1);
    
      cy.get('#qtDemitido-text').invoke('val').then((val2) => {
        let valor2 = parseFloat(val2);
    
        let valor = valor1 + valor2;
        cy.get('input[id="qtTotalEfetivo-text"]').invoke('val').then((val) => {
          expect(parseFloat(val)).to.be.equal(valor);
        }) 
      });
    });
  }
  valorCampoMesAtual(){
    cy.get('#qtAtivo-text').invoke('val').then((val1) => {
      let valor = parseFloat(val1);
      cy.get('#qtNeAtual-text').invoke('val').then((val2) => {
       expect(parseFloat(val2)).to.be.equal(valor); 
      })
    });
  }


} 

  export { MovimentacaoMensal };