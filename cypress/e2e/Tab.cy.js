// if the target not mentioned, link will open on same tab
//if the target is mentioned with the link, then the link gets open in new tab
describe('Handle tabs', ()=>{

    it.skip('Tab - Approach 1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').invoke('removeAttr','target').click()// removeAttr - remove the attribute from the element
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // will open window in same tab
        cy.wait(5000)
        //operations
        cy.go('back') // go back to parent tab

    })

    it("Tab- Aprroach 2", ()=>{

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example>a').then((e)=>{ // getting element and storing the calue in e
          let url =  e.prop('href'); // return href value
            cy.visit(url)
            cy.url().should('include','https://the-internet.herokuapp.com/windows/new') // will open window in same tab
        cy.wait(5000)
        //operations
        cy.go('back') // go back to parent tab
        // approach 2 limitation that target URL should be same as visiting URL
        })



    })
})