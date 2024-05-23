class Autenticacao {
    token() {
        const APIUrl = Cypress.env('API')
        const API = APIUrl;
        let usuario;

            cy.fixture('acesso/acessos').then(acessos => { // buca a fixture e passa para API
                usuario = acessos  
                cy.request('POST', `${API}/v1/Funcionario/AuthenticateFuncionario`, usuario.autenticacao).then((response) => {
                    const token = response.body.TOKEN.Token     
                    return token
                })
            })
    }
}

export default { Autenticacao }