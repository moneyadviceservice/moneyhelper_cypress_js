describe('MoneyHelper Core', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('MONEYHELPER_BASEURL')
        // const baseUrl = 'https://moneypensions-qa.adobecqms.net/'
        cy.visit(`${baseUrl}/`)
        cy.acceptCookies()
        cy.setBreakPoint('desktop')
    })
    it('is reachable', () => {
        // Confirm title
        cy.elementIndexContainsText('h1.h1-page-title', 0, 'For free guidance you can trust, we can help.')
    })
})
