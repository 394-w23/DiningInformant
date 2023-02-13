describe('Test App', () => {

    

    it('all four dining cards show', () => {
        cy.visit('/')
        cy.get('h2').should('contain', 'Sargent');
        cy.get('h2').should('contain', 'Plex West');
        cy.get('h2').should('contain', 'Elder');
        cy.get('h2').should('contain', 'Allison');

    });


    

});