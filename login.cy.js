/// <reference types="Cypress"/>


describe('Testes funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('form').find('#email').type("gabrielaanjo0011@gmail.com")
        cy.get('#password').type('Karen_26')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get('h1').should('contain','Boas-vindas à Lacrei Saúde!')
    });
    it('Validando login invalido', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('form').find('#email').type("gabrielaanjo00111@gmail.com")
        cy.get('#password').type('Karen_26')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get('.sc-2386aec4-1 > .sc-fc2b211-0').should('contain','E-mail ou senha incorretos. Esqueceu a sua senha? Clique em “Esqueci minha senha” para recuperá-la.')
    });
    it('Validar senha incorreta', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('form').find('#email').type("gabrielaanjo0011@gmail.com")
        cy.get('#password').type('Karen_6')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get('.sc-2386aec4-1 > .sc-fc2b211-0').should('contain','E-mail ou senha incorretos. Esqueceu a sua senha? Clique em “Esqueci minha senha” para recuperá-la.')
    });
    it('Inserçao de caracteres especiais', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('.fJQqeU > .sc-43e2db29-1').click()
        cy.get('#first_name').type('@#$%')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get(':nth-child(1) > .sc-2386aec4-0 > .sc-2386aec4-1 > .sc-fc2b211-0').should('contain', 'Digite um nome válido')
    });
    it('Validação de email unico', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('.fJQqeU > .sc-43e2db29-1').click()
        cy.get('#email').type('gabrielaanjo0011@gmail.com')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get(':nth-child(3) > .sc-2386aec4-0 > .sc-2386aec4-1 > .sc-fc2b211-0').should('contain', 'Os e-mails não correspondem, digite novamente.')
    });
    it('Inserçao de caracteres especiais', () => {
        cy.visit("https://paciente-staging.lacreisaude.com.br/")
        cy.get('.fJQqeU > .sc-43e2db29-1').click()
        cy.get('#first_name').type('É incrível como a tecnologia tem transformado nosso cotidiano, desde a comunicação até o trabalho, facilitando tarefas e tornando tudo mais acessível e eficiente.')
        cy.get('.jFSrTh > .sc-43e2db29-1').click()
        cy.get(':nth-child(1) > .sc-2386aec4-0 > .sc-2386aec4-1 > .sc-fc2b211-0').should('contain', 'O nome não pode ter mais de 150 caracteres.')
    });
});