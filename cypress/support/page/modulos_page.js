import ElementosContratos from "../elements/contrato-elements";
const elementosContratos = new ElementosContratos();
import InputID from "./input_page";
const inputContratos = new InputID();
let scan;

beforeEach(() => {
  cy.fixture("acessos").then(
    (x) => {
      scan = x;
    }
  )});

class EventosContratos {
  //Criar um objeto com todos os valores de campos disponíveis na página
  clickBotao(tipoBotao) {
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
        cy.get('svg').eq(1).find('path').click({force: true});
        cy.get('svg').eq(1).find('path').click({force: true});
      break;
      default:
        cy.get(elementosContratos.botao()).contains(tipoBotao).click();
      break;
    }
    //Criando uma exceção para remover um email de documento trabalhista
  }

  preencherInput(valor, campo) {
    cy.wait(1000);
    inputContratos.inputLabel(campo).type(valor);
    cy.wait(1000);
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
        inputContratos.inputLabel(campo).click();
        inputContratos.inputLabel(campo).type(valor).type("{enter}");
      }
      break;
    }
  }

  acessarModulo(itens = 1) {
    cy.wait(4000);
    cy.get("ul");
    elementosContratos.itemListaContrato(itens).click();
  }

  acessarSeção() {
    cy.get("ul");
    elementosContratos.itemListaContrato(0).click();
  }

  validarRodape(string, int) {
    var int = parseInt(string) + 1;
    cy.get(elementosContratos.botao())
      .eq(int)
      .contains(string)
      .should("have.text", string);
  }
  
  verificarCampoVazio = () => {
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
    cy.wait(3000);
    elementosContratos.tabela().eq(1).should("have.text", string).click();
    cy.wait(2000);
    cy.get('span').contains('Alerta').then(($element)=>{
      if ($element.is(':visible')){
        cy.get('#Fechar-button-default').click();
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
    elementosContratos.botaoExcluir().should("be.visible").eq(0).click();
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
    cy.get("span").contains(string);
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
            } else return true;
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

class MovimentacaoMensal extends EventosContratos {
  acessarModulo() {
    super.acessarModulo(2);
  }

  resultadoFiltro(filtro) {
 
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
        competencia: ['11/2023', '12/2023']
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
        default:
        super.resultadoFiltro(filtro);
      }
    })
  }

  filtroDropdown(valor, campo) {
    this.propriedadeCampo = campo; //exportando a propriedade desse método. 
    if(campo ==='Status'){
      this.filtroDropdownStatus(valor);
    }
    else if (campo ==='Tipos Movimentações') {
      this.filtroDropdownTiposMovimentacoes(valor);
    }
    else if(campo ==="Diretoria Executiva"){
      this.filtroDropdownDiretoriaExecutiva(valor);
    }
    else if(campo ==="Diretoria"){
      this.filtroDropdownDiretoria(valor);
    }
    else if(campo ==='Gerência Geral' || campo === 'Gerência'){
      this.filtroDropdownGerenciaGeral(valor, campo);
    }
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


  validacaoResultadoFiltroMovimentacoes(filtro) {
    const tipoMov = {
      Cadastrado: ["Com Mobilização", "Sem Mobilização"],
      Não_Cadastrados: ["- - - -"],
      Todas: ["Com Mobilização", "Sem Mobilização", "- - - -"]
    }
    const objetoFiltros = this.propriedadeTipos;

    if(filtro === objetoFiltros[0]) {
        cy.contains('td', tipoMov.Cadastrado[0]);
        cy.contains('td', tipoMov.Cadastrado[1]);
        elementosContratos.checkboxValidacaoContraparte().should('have.attr', 'checked');
        elementosContratos.checkboxValidacaoAnalista().should('have.attr', 'checked');
    }
    else {
        // Adicione mais verificações conforme necessário para Cadastradas
      if(filtro === objetoFiltros[1])
        cy.contains('td', tipoMov.Não_Cadastrados[0]);
        // Adicione mais verificações conforme necessário para Não cadastradas
      else{
        cy.contains('td', tipoMov.Todas[0]);
        cy.contains('td', tipoMov.Todas[1]);
        cy.contains('td', tipoMov.Todas[2]);
      }
    }
  }
  
  validacaoResultadoFiltroDiretoriaExecutiva(filtro){
    const tipoFiltro = {
      DiretoriaExecutiva: ['4503493630', '4503502742'],
      DiretoriaInvestimentosMineracao: ['4502754213SC03'],
      DiretoriaSuperintendenciaMineracao: ['4600014327SC17', '4600016500'],
      DiretoriaExecutivaFinancas: ['4600022276'],
      DiretoriaAdministrativaFinanceira: ['S16051320']
    }
    const objetoFiltrosDiretoria = this.propriedades.DiretoriaExecutiva;

    if(filtro === objetoFiltrosDiretoria[0]) {
        cy.contains('td', tipoFiltro.DiretoriaExecutiva[0]);
        cy.contains('td', tipoFiltro.DiretoriaExecutiva[1]);
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
    if ( nmArquivo=== 'template') {
      super.clickBotao("Download Template")
      cy.readFile('cypress/downloads/template-fornecedor.xls').should('exist');
    }
    else if (nmArquivo === 'PDF'){
      super.clickBotao('Download do PDF');
      cy.readFile('cypress/download/202312-Competencia-atual.pdf').should('exist');
    }
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
      cy.get('table').find('tr').contains(competencia).parent('tr').contains(contrato).should("have.text", contrato).click();
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
  } 

export {
  EventosContratos, 
  EventosContratosModal, 
  EventosContratosAdicionarNovo,
  MovimentacaoMensal
};
