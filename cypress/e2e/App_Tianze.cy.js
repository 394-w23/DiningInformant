describe('Test App', () => {

    it('Can only click stars for rating field', () => {
        cy.viewport(550, 750) // Set viewport to 550px x 750px
        cy.viewport('iphone-6') // Set viewport to 375px x 667px
        cy.visit('/');
        cy.get('[data-cy=share-your-experience]').click();
        cy.get('input[value=4]').click({ force: true });
        //cy.get('[data-cy="Rate-value"]').should('', 4);
    });

    it('The “hour to meal” function gives the correct meal index', () => {
        cy.viewport(550, 750) // Set viewport to 550px x 750px
        cy.viewport('iphone-6') // Set viewport to 375px x 667px
        cy.visit('/');
        const now = new Date(Date.now())
        const hours = now.getHours()
        cy.wrap(hours).then(($time) => {
            if ($time < 11)
                cy.get('[data-cy=featuredlabel]').should("have.text", "Breakfast")
            else if ($time >= 11 && $time < 16)
                cy.get('[data-cy=featuredlabel]').should("have.text", "Lunch")
            else
                cy.get('[data-cy=featuredlabel]').should("have.text", "Dinner")
        })
    });

});