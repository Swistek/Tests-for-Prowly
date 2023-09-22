///<reference types="cypress"/>

describe("Find a LinkedIn related to the keyword Prowly in Google.", () => {
    it("Should open google home page", () => {
        cy.visit("/")
        cy.url().should('include', 'google.com/')
    })
    it("It should find prowly in a search engine", () => {
        cy.get("#APjFqb").type('Prowly').type('{enter}')
    })

    it("Select LinkedIn from the list of filters and click this button", () => {
        cy.contains("LinkedIn").click()
    })


    
})



