describe("check Ui element", ()=>{

    it("checking radio button", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('be.not.checked')
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('be.not.checked')
    })

    it("checking check box", ()=>{
        cy.visit("https://testautomationpractice.blogspot.com/")
       /* cy.get("#sunday").should('be.visible')
        cy.get("#sunday").check().should("be.checked")
        cy.get("#sunday").uncheck().should("be.not.checked")*/
        //select all checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
        //select first or last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')
    })

})