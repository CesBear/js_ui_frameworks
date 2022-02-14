describe(`Cart Component`, ()=> {

    before('Open Main page', ()=> {
        cy.visit('/')
    });

    it('Validate Cart Components and Behavior', ()=> {

        //Click Cart Icon should open Cart
        //Add item to Cart
        // Cart in header should display number increase
        cy.get('span').should('have.class','bag__quantity')
        .children()
        .should('have.class', 'bag__quantity')
        .and('contains.text', '0');
    });

});
