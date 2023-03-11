/* globals cy */

describe('Test App', () => {
  it('launches', () => {
    cy.visit('/');
  });

  it('opens with share your experience', () => {
    cy.visit('/');
    cy.get('[data-cy=share-your-experience]').should('contain', 'Share your experience');
  });

  it('opens menu', () => {
    cy.visit('/');
    cy.get('[data-cy=menu-Sargent').click();
    cy.get('[data-cy=modal]').should('contain', 'Vegan Potato Breakfast Skillet');
  });

  it('shows form when share your experience button is pressed', () => {
    cy.visit('/');
    cy.get('[data-cy=share-your-experience]').click();
    cy.get('[data-cy=dining-hall-dropdown]').click();
    cy.get('[data-cy=click-on-allison]').click();
    cy.get('[data-cy=wait-time-typing').type('3');
    cy.get('[data-cy=halfratingread]') // select the Mui Rating component // select the rating elements inside the component
      .click();
    cy.get('[data-cy=submit-button]').click();
  });
});
