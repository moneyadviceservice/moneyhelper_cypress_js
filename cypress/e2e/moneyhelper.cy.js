describe('MoneyHelper Core', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('MONEYHELPER_BASEURL')
        cy.visit(`${baseUrl}/`)
        cy.acceptCookies()
        cy.setBreakPoint('desktop')
    })
})
