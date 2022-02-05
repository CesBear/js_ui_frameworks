describe(`Sizes Component`,()=> {
    before(()=>{
        cy.visit("/")
    });

    it(`Should have main components`, ()=> {
        //Title Size component
        cy.get("h4").should("have.text", "Sizes:");

        //Should have 7 sizes
        cy.get('div[class="filters-available-size"]').should('have.length', 7);

        const sizes = ["XS","S","M","L","XL","XXL"]

        //Verify Sizes text
        cy.get('div[class="filters-available-size"]').each((el) => {
             el.text() === sizes[el];
        });
    });
});