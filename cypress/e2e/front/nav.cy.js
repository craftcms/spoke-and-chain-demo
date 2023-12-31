const smallScreenSizes = ['iphone-6', [640, 480], [768, 576]];
const bigScreenSizes = [[1024, 768], [1280, 1024], [1536, 1228]];

describe('Navigation', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    smallScreenSizes.forEach((size) => {
        it(`should not be visible on ${size} screen`, function () {
            cy.setViewportSize(size)

            cy.get('nav.main').should('not.be.visible')
        })
        it(`should show open toggle and hide close toggle when nav is closed on ${size} screen`, function () {
            cy.setViewportSize(size)

            cy.get('.toggle-nav .toggle-open').should('be.visible')
            cy.get('.toggle-nav .toggle-close').should('not.be.visible')
        })
        it(`should hide open toggle and show close toggle when nav is open on ${size} screen`, function () {
            cy.setViewportSize(size)

            cy.get('.toggle-nav').click()

            cy.get('.toggle-open').should('not.be.visible')
            cy.get('.toggle-close').should('be.visible')
        })
    })
    bigScreenSizes.forEach((size) => {
        it(`should be visible on ${size} screen`, function () {
            cy.setViewportSize(size)

            cy.get('nav.main').should('be.visible')
        })
    })
})
