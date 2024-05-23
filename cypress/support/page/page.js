import InputID  from './input_page'
const inputIDPage = new InputID() // classe de controle do input

class input {
    inputPreenchimento(textoLabel, textoPreenchimento) {
        let inputElement
        // busca o id do input pela label dele
        if (inputIDPage.idInput(textoLabel) === undefined) { // caso ele não encontre
                inputElement = cy.get('textarea') // busca pelo type textarea
        } else {
            inputElement = inputIDPage.idInput(textoLabel) // busca pelo texto da label 
        }
        cy.wait(500)
        inputElement.clear({ force: true }).type(textoPreenchimento) //
    }
}
export default { input }