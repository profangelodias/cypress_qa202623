/// <reference types="cypress" />

context('Validação de logins inválidos', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Validar usuário bloqueado', () => {
        cy.get('[data-test="username"]').type('locked_out_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('Validar usuário em branco', () => {
        cy.get('[data-test="username"]').clear()
        cy.get('[data-test="password"]').type('senha_qualer')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username is required')
    });

});