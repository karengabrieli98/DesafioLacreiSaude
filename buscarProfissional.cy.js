/// <reference types="Cypress"/>

describe('Teste E2E -  REALIZANDO A BUSCA PRO PROFISSIONAIS', () => {
    it('Fluxo buscar profissionais ', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('form').find('#email').type("gabrielaanjo0011@gmail.com")
        cy.get('#password').type('Karen_26')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get('h1').should('contain','Boas-vindas à Lacrei Saúde!')
        cy.get('#search').type('medico trans')
        cy.get('.search-button-box > .sc-43e2db29-0 > .sc-43e2db29-1').click()
    });
});