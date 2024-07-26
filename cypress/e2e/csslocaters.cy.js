describe('CSSlocaters',() => {

    it("csslocaters",()=>{
        cy.visit("https://dev-ui.mylanguageplug.com/en/signup")
        cy.get("#email").type("cypress@mailinator.com")
        cy.contains('Continue with email').click()
        cy.contains("Welcome!")

    })

})