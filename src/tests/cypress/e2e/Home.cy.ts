describe('Home', () => {
  it('should be able to slide between cube images', () => {
    cy.visit('/')

    cy.get('.c-esLwgR-kchaXv-direction-right > svg').click()

    cy.get('li:nth-child(3)').click()

    cy.wait(1000)

    cy.get('.c-esLwgR-kCSDKs-direction-left > svg').click()

    cy.get('li:nth-child(1)').click()
  })
})

export {}
