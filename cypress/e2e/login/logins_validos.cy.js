/// <reference types="cypress" />

context('Validação de logins válidos', () => {
    it('Validar login padrão', () => {
        cy.visit('/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="title"]').should('have.text', 'Products')
    });
});