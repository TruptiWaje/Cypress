// use to test multiple data set
describe('MtTestSuit', ()=>{

it('DataDrivenTest', ()=>{
    cy.fixture("orangehrm2").then((data)=>{
//from the fixture we are getting data into variable so now in variable there are 3 parameter values
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')        
            data.forEach((userdata)=>{
            //firstly in userdata will store first input data

            cy.get("input[placeholder='Username']").type(userdata.username)
            cy.get("input[placeholder='Password']").type(userdata.password)
            cy.get("button[type='submit']").click()
            cy.wait(2000)
                if(userdata.username=='Admin' && userdata.password=='admin123')
                    {
            cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
            cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                    }

                    else
                    {
                        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', userdata.expected)
                    }
        
        })

    })
})

})