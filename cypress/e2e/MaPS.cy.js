describe('MaPS Corporate', () => {
    beforeEach(() => {
        const baseUrl = Cypress.env('MAPS_BASEURL')
        // const baseUrl = 'https://maps.org.uk'
        cy.visit(`${baseUrl}/`)
        cy.get('a[data-button-type="accept-all"]').click()
        cy.setBreakPoint('desktop')
    })

    it('is reachable', () => {
        // Confirm title
        cy.elementIndexContainsText('h1.cmp-hero-image__lead-heading-text', 0, 'Our vision: everyone making the most of their money and pensions')
        // Confirm image
        cy.confirmImageSrc('div.cmp-hero-image__header-img > img', '/content/dam/maps-corporate/en/maps-home.png.pic.1440.480.low.jpg')
    })
})
