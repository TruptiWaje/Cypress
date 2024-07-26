// Fixtures are basically a files that have some data that can be used in test
// contains test data files
// can have different type of file format like json, text, javascript, csv and used as test data
describe("My suite", ()=>{

//direct access
it.skip('FixuresDemoTest', ()=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
// to get data from fixture need to mention cy.fixture
cy.fixture('orangehrm').then((data)=>{

    cy.get("input[placeholder='Username']").type(data.username)
    cy.get("input[placeholder='Password']").type(data.password)
    cy.get("button[type='submit']").click()
    cy.wait(2000)
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',data.expected)
    

})


})

//Access through hook - for multiple it blocks
// if same data is require in multiple it block we need to write the block of code everytime so in that case we can use hook
// in hook we are executing fixture 
let userdata;
before(()=>{
    cy.fixture('orangehrm').then((data)=>{
        userdata=data; // globally save data in global variable so can be access in each it block
    
    })
})


it('FixturesDemo Test', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    cy.get("input[placeholder='Username']").type(userdata.username)
    cy.get("input[placeholder='Password']").type(userdata.password)
    cy.get("button[type='submit']").click()
    cy.wait(2000)
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text',userdata.expected)
    

})


})