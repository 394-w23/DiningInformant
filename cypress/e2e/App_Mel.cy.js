describe('Test App', () => {

    
    it('when I update the waiting time for a certain dining hall, I should be able to see the average wait time', () => {
       
        cy.visit('/');
        cy.get('#waittime').should('contain', '5');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=dining-hall-dropdown]").click();
        cy.get("[data-cy=click-on-sargent]").click();
        cy.get("[data-cy=wait-time-typing]").type("3");
        cy.get("[data-cy=halfratingread]").click();
        cy.get('[data-cy=submit-button]').click();
        cy.visit('/');
        cy.get('#waittime').should('not.contain', '5');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=dining-hall-dropdown]").click();
        cy.get("[data-cy=click-on-sargent]").click();
        cy.get("[data-cy=wait-time-typing]").type("7");
        cy.get("[data-cy=halfratingread]").click();
        cy.get('[data-cy=submit-button]').click();
        cy.get('#waittime').should('contain', '5');
   
});

    it('all four dining cards show', () => {
        cy.visit('/')
        cy.get('h2').should('contain', 'Sargent');
        cy.get('h2').should('contain', 'Plex West');
        cy.get('h2').should('contain', 'Elder');
        cy.get('h2').should('contain', 'Allison');
    });    

    //     it('all four dining cards show', () => {
    //     cy.visit('/');
    //     cy.get('[data-cy=menu-Allison]').should('contain','Sargent');
    //     cy.get('[data-cy=menu-Sargent]').should('contain','Plex West');
    //     cy.get("[data-cy=menu-Plex-West]").should('contain','Elder');
    //     cy.get('[data-cy=menu-Elder]').should('contain','Allison');
    // });

    // can only enter numbers for wait time field
    it('wait time field takes numbers', () => {
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=dining-hall-dropdown]").click();
        cy.get("[data-cy=click-on-allison]").click();
        cy.get("[data-cy=wait-time-typing]").type("3");
        cy.get("[data-cy=halfratingread]").click();
        cy.get('[data-cy=submit-button]').click();
    });
    it('wait time field takes does not take letters', () => {
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=dining-hall-dropdown]").click();
        cy.get("[data-cy=click-on-allison]").click();
        cy.get("[data-cy=wait-time-typing").type("h");
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=wait-time-typing").type("3h");
        cy.get('[data-cy=submit-button]').should('be.disabled');
    });
     it('wait time field takes does not take letters', () => {
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=dining-hall-dropdown]").click();
        cy.get("[data-cy=click-on-allison]").click();
        cy.get("[data-cy=wait-time-typing").type("h");
        cy.get('[data-cy=submit-button]').should('be.disabled');
        cy.get("[data-cy=wait-time-typing").type("3h");
        cy.get('[data-cy=submit-button]').should('be.disabled');
    });

    
    

});