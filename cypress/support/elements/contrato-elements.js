class ElementosContratos { 
    
    botao = () =>{
        return 'button[class*="MuiButton-textPrimary"]:not([role="tab"])';
    }
    itemListaContrato = (int) =>{
        return cy.get("li").eq(int)
    }
    tabela = () =>{
        return cy.get("table").get("td");
    }
    botaoExcluir = () =>{
        return cy.get('[data-testid="DeleteIcon"]')
    }
    botaoAdicionar = () =>{
        return cy.get('button[id="+-button-default"]');
    }
    botaoRemover = () =>{
        return cy.get('button[id="--button-default"]');
    }
    iconeRemover = () =>{
        return cy.get('svg[data-testid="CancelIcon"]');
    }
    iconeRemoverTeste = (string) => {
        return cy.get('svg[data-testid="' + string + 'Icon"]');
    }
    botaoSalvarModal = (nomeBotao) =>{
        return cy.get('button[id="Salvar e Finalizar-submit-default"]').last().contains(nomeBotao);
    }
    botaoUploadModal = (nomeBotao) =>{
        return cy.get('button[id="Upload-button-default"]').last().contains(nomeBotao).click();
    }
    botaoLimparModal = (nomeBotao) => {
        return cy.get('button[id="Limpar-button-text"]').last().contains(nomeBotao);
    }
    iconePesquisar = () =>{
        //return cy.get('input[id="cnpj-text"]').find('button').find('svg');
        return cy.get('div[class*="sc-egiyK"]')
        .get(`label:contains('CPF/CNPJ/Cód.Fornecedor') + div`).find('button');
    }
    botaoAdicionarNovo = () =>{
        return cy.get('button[id="Adicionar Novo-1"]');
    }
    checkboxValidacaoContraparte = () =>{
        return cy.get('input[id="-checkbox"]').eq(0)
    }
    checkboxValidacaoAnalista = () =>{
        return cy.get('input[id="-checkbox"]').eq(1);
    }
    
}
export default ElementosContratos;