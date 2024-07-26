import 'cypress-iframe'
describe("Handling Iframe",()=>{

    it.skip('iframe - Approach1',()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        // we dont have direct command to enter in the iframe
        const iframe=cy.get("#mce_0_ifr") // store the iframe in varaiable and //mention id of the frame
        .its('0.contentDocument.body') // its to enter into another block of iframe i.e document and 0 as only one block is present
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type("Welcome {ctrl+a}"); // currently not working as having only read access // ctrl+a to select the text to mark it as bold
        cy.get("[aria-label='Bold']").click()
    })
    //create custom command to use it every test. Go to support -> commands.js
    it.skip('Approach2 - Custom command', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {ctrl+a}') // getIframe is the custom command
        cy.get("[aria-label='Bold']").click()
    })

    it('Approach3 - by using cypress iframe-plugin', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded('#mce_0_ifr'); //load the frame
        cy.iframe('#mce_0_ifr').clear().type('Welcome'); // to interact with frame
    })
})