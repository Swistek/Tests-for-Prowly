///<reference types="cypress"/>


describe("Searching for the word Prowly on google.com with filtering by date", () => {
    it("Should open google home page", () => {
        cy.visit("/")
        cy.url().should('include', 'google.com/')
    })

    it('Should wait for 5 seconds', () => {
        cy.wait(5000)
    })

    it('Should check for correct element on the page: Headline Google is visible on the website', () => {
        cy.get('.lnXdpd').should('be.visible')
    })

    it("In search, enter the keyword Prowly along with filter the results by date. ", () => {
        cy.get("#APjFqb").type('Prowly before:2020').type('{enter}')
    })


})