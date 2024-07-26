describe('Dropdown UI testing', ()=>{
   /* it('dropdown with select', ()=>{

        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#country').select('canada').should('have.value','canada')
    })
    it('dropdown with dynamic value OR without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').should('be.visible')
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Japan').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Japan')

    })
    // on search every time show same result, and on selction it is redirected to respective page
    it('Autosuggest dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")
        cy.get('#searchInput').type('Delhi')
        // we should find total number of options avaialable we can also count and then select 1 option
        cy.get('.suggestion-title').contains('Delhi University').click() // here the locator is getting allmoptions word matching the type data
        cy.get('.mw-page-title-main').should('have.text','Delhi University')

    })*/
    it('dynamic dropdown', ()=>{

        cy.visit('www.google.com')
        cy.get("textarea[name='q']").type('cypress automation')
        cy.wait(4000)
        //refer "each" document of cypress, each will help us to go through option in the array
        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span').each(($el, index, $list)=>{
            if($el.text()=='cypress automation tool'){
                cy.wrap($el).click()
            }
            
        })
        
        cy.get("textarea[name='q']").should('have.value','cypress automation tool')
    })



})
