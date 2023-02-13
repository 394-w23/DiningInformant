/* globals cy */

describe('Menu Tests', () => {

    it('Share Menu Buttons Exist', () => {
        cy.visit('/');
        cy.get('[data-cy=menu-Allison]').should('contain','Full menu');
        cy.get('[data-cy=menu-Sargent]').should('contain','Full menu');
        cy.get('[data-cy=menu-Plex-West]').should('contain','Full menu');
        cy.get('[data-cy=menu-Elder]').should('contain','Full menu');
    });

    it('Clicking share menu button opens menu modal', () => {
        cy.visit('/');
        cy.get('[data-cy=menu-Allison]').click();
    });

    it('shows form when share your experience button is pressed', () => {
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=dining-hall-question]').should('contain', 'Which dining hall did you go to?');
    });

});