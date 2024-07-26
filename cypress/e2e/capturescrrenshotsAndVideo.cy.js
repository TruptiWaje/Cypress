// cypress automatically capture screenshots for failures when we are using CI tools or when test is runned in command prompt, now we are executing through cypress app
describe('Screenshot and Video capture', ()=>{
    it('Capture screenshots',()=>{

        cy.visit('https://demo.opencart.com')
     /*   cy.screenshot("homepage") //screenshot of whole screen

        cy.get("img[title = 'Your Store']").screenshot("logo") // screenshot of specific element
*/
        //automatically capturing screenshoe and video, but cannot intensionally take the video on failure - only excuted through CLI(command prompt, CI tool)
        cy.get('li:nth-child(7) a:nth-child(1)').click()
        cy.get("div[id='content']").should('have.text','Tablets')

        // run test case through terminal as npx cypress run --spec cypress/e2e/capturescrrenshotsAndVideo.cy.js copy relative path of file
        // for recording video --record flag is set for project for that projectID numst be set in cypress.config;js
    })


})