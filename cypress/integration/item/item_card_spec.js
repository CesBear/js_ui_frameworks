
describe(`Item Card Component`,()=> {
    before(()=>{
        cy.visit("/")
    });

    it(`Card web components`,()=> {
        //Should contin 17 Items
        cy.get("img").should('have.length', 16);

    });
});