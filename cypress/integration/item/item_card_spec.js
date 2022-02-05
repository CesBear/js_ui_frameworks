
describe(`Item Card Component`,()=> {
    before(()=>{
        cy.visit("/")
    });

    it(`Card web components`,()=> {
        //Should contain 17 images
        cy.get("img").should('have.length', 16);

        //Should have freeShipping text
        cy.get("div").should("contain.text","Free shipping");

        //Should display Add to cart button
        cy.get('div').should("contain.text", "Add to cart");

    });
});