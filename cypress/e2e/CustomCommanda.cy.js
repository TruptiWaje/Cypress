// In command.js can write custom commands

//example
//clink on link using label
//now in case on ecommerce sit we need to find the locater for each product to click so using custom command we only pss label
describe('Custom commands', ()=>{

    it('handling links', ()=>{
        cy.visit('https://demo.nopcommerce.com')
        cy.ClickLink('Apple MacBook Pro 13-inch') //ClickLink is a custom command
        cy.get("h1").should('have.text','Apple MacBook Pro 13-inch')

    })

    it('overwriting existing command', ()=>{
        // in-built contains command is case sensitive command now we are going to overwrite and make it canse incensetive

        cy.visit('https://demo.nopcommerce.com')
        cy.ClickLink('APPLE MacBook Pro 13-inch') //ClickLink is a custom command
        cy.get("h1").should('have.text','Apple MacBook Pro 13-inch')


    })

    it.only('Login command', ()=>{
        cy.visit('https://demo.nopcommerce.com')
        //Login
        cy.ClickLink("Log in");
        cy.loginapp('testing@gmail.com', 'test123')

    })
})