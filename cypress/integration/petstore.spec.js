describe('Petstore Testing', () => {
    it('Visits PetStore', () => {
        cy.visit('http://petstore.default.svc.cluster.local/')
        cy.get('.title').should('contain.text', "Swagger Petstore - OpenAPI 3.0")
    })
})