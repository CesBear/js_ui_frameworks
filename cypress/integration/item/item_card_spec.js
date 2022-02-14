describe(`Item Card Component`,()=> {

    before(()=>{
        cy.visit('/');
    });

    it(`Card web components`,()=> {
        //Should contain 17 images
        cy.get('img').should('have.length', 16);

        //Should have freeShipping text
        cy.get("div").should('contain.text','Free shipping');

        //Should display Add to cart button
        cy.get('div').should('contain.text', 'Add to cart');

        //Should display price
        cy.get('div').should('have.class', 'val')
        .and('contains.text', '$10.90');

        //Should display promo
        cy.get('div').should('have.class', 'installment')
        .and('contains.text', 'or 9 x$1.21');
    });

});
