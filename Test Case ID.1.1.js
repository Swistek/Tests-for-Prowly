///<reference types="cypress"/>

describe("Find a graphic related to the keyword Prowly in Google.", () => {
    it("Should open google home page", () => {
        cy.visit("/")
        cy.url().should('include', 'google.com/')
    })

    it("It should find prowly in a search engine", () => {
        cy.get("#APjFqb").type('Prowly').type('{enter}')
    })

    it('Should wait for 5 seconds', () => {
        cy.wait(5000)
    })

    it("Select the Images filter from the list of filters", () => {
        cy.contains("Images").click()
    })


})