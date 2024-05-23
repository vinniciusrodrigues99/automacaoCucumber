class InputID {
    idInput(Campo) {
        let idElemento;
        const campos = {
            "nome do campo": '#nomenclatura do campo',
        }
        if (campos[Campo] != undefined) { // caso campo exista ele retorna o id 
            return idElemento = cy.get(campos[Campo])
        }
        
    } 
    inputLabel(label) {
        return cy.get('div[class*="sc-egiyK"]')
                 .get(`label:contains('${label}') + div`)
    }
}

export default InputID; 