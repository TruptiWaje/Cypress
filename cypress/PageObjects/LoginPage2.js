//Approach1
class Login
{
    txtusername = "input[placeholder='Username']";
    txtpassword = "input[placeholder='Password']";
    btnsubmit = "button[type='submit']";
    lbl = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

    setUserName(username)
    {

        cy.get(this.txtusername).type(username)
    }

    setPassword(password)
    {
        cy.get(this.txtpassword).type(password)
    }
    
    clickSubmit()
    {
        cy.get(this.btnsubmit).click();

    }
    verifyLogin()
    {
        cy.get(this.lbl).should('have.text','Dashboard')
    }
}

export default Login;