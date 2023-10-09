describe('MoneyHelper DTT', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('DTT_BASEURL')
        cy.visit(`${baseUrl}/`)
        cy.acceptCookies()
        cy.setBreakPoint('desktop')
    })

    it('is reachable', () => {
        // Confirm title
        cy.elementIndexContainsText('h1.h1-page-title', 0, 'Welcome to the Money Adviser Network')
        // Confirm image
        cy.confirmImageSrc('img.cmp-image__image', '/content/dam/man/english/young-woman-with-headphones-sitting-in-front-laptop.png.pic.603.302.low.jpg')
    })
})
