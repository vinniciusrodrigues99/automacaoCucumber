/// <reference types="cypress"/>

import { input } from '../../..'
import { InputID } from '../../..';
import 'cypress-mailhog';

const baseUrl = Cypress.env('BASE_URL') // busca a BASE_URL - variavel inicial

Cypress.Commands.add('buscando Id', (campo) => {
    const inputPage = new input(); // declara classe de controle de input

    cy.visit(baseUrl)

    inputPage.idInput(campo) // busca o id de input q tenha escrito matricula
}),
{
    "mailHogUrl": "http://localhost:8090" 
}