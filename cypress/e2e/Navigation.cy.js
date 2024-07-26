// go() command is used to navigate through different pages
// reload() command is also used
describe('Navigation', ()=>{

it('Navigate to page', ()=>{

cy.visit('https://demo.opencart.com')
cy.wait(8000)
cy.title().should('eq','Your store') //home page
cy.get('li:nth-child(7) a:nth-child(1)').click() //Cameras page
cy.get("div[id='content']'").should('have.text','Cameras')

// to goback to home page
cy.go('back')
cy.title().should('eq','Your store') //home page

cy.go('forward')
cy.get("div[id='content']'").should('have.text','Cameras')

cy.go(-1) // go back to home page

cy.go(1) // go to cameras page

cy.reload() // do reload the page manually, by default it reloads on forward and back

})

})