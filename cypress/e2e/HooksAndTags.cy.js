// We can mention prerequisite that we want to execute berfore or after every testcase is called hooks
// 4-types of hooks are available before, after, beforeEach and AfterEach
// before and after will be executed only once
//beforeeach and aftereach will be execute multiple times
//Before hook will be exceuted before starting all it block only once
//after hook will be executed after all it block only once
//beforeEach will be executed before starting each it block
//afterEach will be executed after ending each it block
// Tags - mostly used tag skip and only. Skip to skip the it block and only to execute specific it block

describe('Hooks', ()=>{

    before(()=>{
        cy.log('***** Launch app *****')

    })


    after(()=>{
        cy.log('***** Close app *****')

    })

    beforeEach(()=>{
        cy.log('***** Login *****')

    })
    afterEach(()=>{
        cy.log('***** Logout *****')

    })


    it('Search', ()=>{
        cy.log('***** searching *****')
        // before testing functionality we need to launch the application so will write that code in before hook
        // after completion of all eat blog i need to logout it wll go in after hook, write anywhere position does not matter

    })

    it('advance search', ()=>{
        cy.log('***** advance searching *****')

    })
    it('search functionality', ()=>{
        cy.log('***** searching functionality*****')
    })


})