/// <reference types="cypress" />

context('Capturar elementos para fazer uma ação', () => {
    it('Capturar os inputs', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        
        //Capturar os inputs e digitar textos.
        cy.get('[data-cy="input-username"]').type('Ash')
        cy.get('[data-cy="input-password"]').type('123')
        cy.get('[data-cy="input-pokeinit"]').type('Pikachu')
        cy.get('[data-cy="botao-login"]').click()
        cy.get('#mensagem-feedback').should('have.text','Login de Ash TREINADOR QUALQUER efetuado com sucesso!')

    });

    it('Capturar com Studio', () => {
        cy.visit('https://angelofdiasg.tech/qaprogramador/ginasiodecapturia/')
        
        cy.get('[data-cy="input-username"]').type('Ash');
        cy.get('[data-cy="input-password"]').type('123456');
        cy.get('[data-cy="input-pokeinit"]').type('Chamander');
        cy.get('[data-cy="botao-login"]').click();
        cy.get('#mensagem-feedback').should('have.text', 'Login de Ash TREINADOR QUALQUER efetuado com sucesso!');
    });
});