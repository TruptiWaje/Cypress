import 'cypress-iframe'
import '@4tw/cypress-drag-drop'
describe('Mouse operations', ()=>{

    it.skip('MouseOver',()=>{
        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.not.visible')
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible').click()


    })

    it.skip('right click', ()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')

        /*Approch 1
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get(".context-menu-icon-copy > span").should('be.visible') */

        //Approch 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
        cy.get(".context-menu-icon-copy > span").should('be.visible')


    })
    it.skip('Double click', ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick")
        //approach 1 not working
        cy.frameLoaded('#iframeResult') //load the frame
        cy.wait(4000)
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
       cy.iframe('#iframeResule').find('#field2').should('have.value', "Hello world!");

        // approach 2
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResule').find('#field2').should('have.value', "Hello world!");


    })

    it.skip('drag and drop', ()=>{
        // need to install grag and drop package from google
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000)
        cy.get('#box6').drag('#box106',{force:true});
        cy.wait(2000)

    })

    it('scroll the page', ()=>{

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html', { failOnStatusCode: false })
        cy.wait(50000)// having captcha verification which need to be done manually then after it works
        cy.get("img[alt='Flag of India']").scrollIntoView({duration:2000})
        cy.get("img[alt='Flag of India']").should('be.visible')

        cy.get('#footer')


    })



})