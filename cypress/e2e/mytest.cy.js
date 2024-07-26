describe('My Test', () => {
  it('test1-verify title-positive', () => {
   
    cy.visit("https://dev-ui.mylanguageplug.com/en/signup")

    cy.title().should('eq','My Language Plug App')

  })

  it('test2-verify title-negative', () => {
   
    cy.visit("https://dev-ui.mylanguageplug.com/en/signup")

    cy.title().should('eq','Welcome to My Language Plug')

  })


})

  