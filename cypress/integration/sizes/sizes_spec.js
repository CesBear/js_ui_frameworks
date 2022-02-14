describe(`Sizes Component`,()=> {

    before(()=>{
        cy.visit('/');
    });

    it(`Should have main components`, ()=> {
        //Title Size component
        cy.get('h4').should('have.text', 'Sizes:');

        //Should have 7 sizes
        cy.get("div[class='filters-available-size']").should('have.length', 7);

        //Verify Sizes text
        cy.get('div[class="filters-available-size"]')
        .should('have.text', 'XSSMMLLXLXXL');

        //Sizes subtext
        cy.get('small').should('contains.text','Leave a star on Github if this repository was useful :)');
    });

});
