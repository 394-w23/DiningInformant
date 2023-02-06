/* globals cy */

describe('Test App', () => {

    it('shows full menu when full menu button is pressed', () => {
        cy.visit('/');
        cy.get('[data-cy=morebutton]').click();
        cy.get('[data-cy=full-menu-tabs]').should('contain', 'Breakfast');
    });

});