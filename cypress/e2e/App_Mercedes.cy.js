/* globals cy */

describe('Test App', () => {

    it('launches', () => {
        cy.visit('/');
    });

    it('opens with share your experience', () => {
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').should('contain', 'Share your experience');
    });

    it('shows form when share your experience button is pressed', () => {
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=dining-hall-question]').should('contain', 'Which dining hall did you go to?');
    });

    it('rating shows default value of 3', () => {
        cy.visit('/');
        cy.get('.MuiRating-root').each((rating) => {
            cy.wrap(rating).should('have.attr', 'aria-valuenow', '3');
        });
    });

});