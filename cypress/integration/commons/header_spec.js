describe(`Heade Component`,()=> {

    before(()=>{
        cy.visit('/')
    });

    it(`Test Header Components availability and behavior`, ()=> {
        //Should display Github icon
        cy.get('a').should('have.class','github-corner')
        .and('be.visible');

        //Should Cart Icon
        cy.get('div').should('have.class','float-cart')
        .and("be.visible")
        .children()
        .should('have.class', 'bag--float-cart-closed');

        //Cart icon starting with 0
        cy.get('span').should('have.class','bag__quantity')
        .children()
        .should('have.class', 'bag__quantity')
        .and('contains.text', '0');
    });

});
