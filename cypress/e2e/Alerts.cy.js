//cypress handle alert automatically
// but we want do validation for that  time we have to trigger some event that will validate message on the alert or need to click on any button like OK CANCEl etc..
// refer even document of cypress for reference mainly catalog of event
// 4 types of alerts are javascripts alert[Alert, confirm alert, prompt alert, authenticated alert]
describe('Alerts', () => {

    it('JS Alert',()=>{

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsAlert()']").click();

            cy.on('window:alert', (t)=>{
                expect(t).to.contains('I am a JS Alert')
            })
            //alert window gets closed automatically

            cy.get("#result").should('have.text','You successfully clicked an alert')
    
})
//confirm alert is closed by using OK button by the cypress, but if we want to click on another button we need to add event
//only is used to execute only that specific it function    
it('Confirm alert',()=>{

            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click();

            cy.on('window:confirm', (t) =>{
                expect(t).to.contains('I am a JS Confirm')
            })
              //cypress close the window automatically by clicking on OK button
            cy.get("#result").should('have.text','You clicked: Ok')

    })
// code to close the alert by clciking on cancel button


it('Confirm alert',()=>{

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click();

    cy.on('window:confirm', (t) =>{  // in 't' the message of the alert is stored
        expect(t).to.contains('I am a JS Confirm');
    })
    cy.on('window:confirm', ()=> false); //cypress close the alert window usinf cancel button
            
      //cypress close the window automatically by clicking on OK button
    cy.get("#result").should('have.text','You clicked: Cancel')


})

// javascript prompt alert

it('Prompt Alert', ()=>{
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        // Before opening the alert box need to trigger event as we want to enter text in the textbox
        cy.window().then((win)=>{ // method which is created before opening window so that we get ctrl on the alert 
            // window is captured in variable in 'win' and passing it in arrow function
            cy.stub(win,'prompt').returns('welcome') // pass the window in stub and the type of window i.e prompt and welcome is a text past in the textfield

        })
    //Now we click on the button for alert
        cy.get("button[onclick='jsPrompt()']").click();
//cypress will cose the alert by default clicking on OK button
       // cy.on('window:prompt', ()=> false); not working this line

        cy.get("#result").should('have.text','You entered: welcome')


})
// Authenticated alert
//approach 1
it('Authenticated Alert', ()=>{
    cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                              { username: "admin",
                                                                password: "admin"
                                                              }
    });
// the alert to verify user asking ti login to enter into the application
cy.get("div[class='example'] p").should('have.contain',"Congratulations")


})
it.only('Authenticated Alert', ()=>{
    //approach 2
cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
})

})

// css selector can also be chain for example below div is a tag we can write selector as class name of div suppose is example so selector willbe .example > a
// we can add it.skip if we dont want to execute that function