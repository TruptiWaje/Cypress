// Page object model pattern
// If write test cases without POM
// POM in which separate page element different files and actual test cases will be some other file
// which avoid duplication and updation
// under cypress create PageObjects folder in which we will maintain elements
// create a JS file and create a class and at last export it then only we can import it
// can achive reusability

import Login from "../PageObjects/LoginPage2.js"
describe('POM', ()=>{

//General approach
it.skip('Normal approach', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click();
    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
})
it.skip('POM approach 1', ()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logobj = new Login;
    logobj.setUserName('Admin')
    logobj.setPassword('admin123')
    logobj.clickSubmit();
    logobj.verifyLogin();

})

it.only('POM by using fixtures', ()=>{
// POM by using fixtures and also storing all the path in variable
    cy.fixture('orangehrm').then((data)=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    const logobj = new Login;
    logobj.setUserName(data.username)
    logobj.setPassword(data.password)
    logobj.clickSubmit();
    logobj.verifyLogin();    

})

})

})