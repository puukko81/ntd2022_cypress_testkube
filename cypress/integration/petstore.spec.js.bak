describe('Petstore Testing', () => {
    it('Visits PetStore', () => {
        cy.visit('http://localhost:8888/')
        // cy.visit('https://petstore.testkube.io/') - uncomment if using public petstore
        cy.get('.title').should('contain.text', "Swagger Petstore - OpenAPI 3.0")
    })
})