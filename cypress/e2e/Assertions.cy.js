describe("Assertion demo", ()=>{

    it("Implicit assertion", ()=>{
        cy.visit("http://localhost:5173/booking")
        //should
       // cy.url().should('include','localhost:5173')
        //cy.url().should('eq','http://localhost:5173/booking')
        //cy.url().should('contain','booking')

        //can avaoid multiple times can do in one line

        //cy.url().should('include','localhost:5173')
        //.should('eq','http://localhost:5173/booking')
        //.should('contain','booking')

        // instaed of multiple should use and

        cy.url().should('include','localhost:5173')
        .and('eq','http://localhost:5173/booking')
        .and('not.contain','home') //negative asset by using not
        //capture title, assertion on title
        cy.title().should('include','Eye OP')
        //assertion on element
        cy.get('[d="M28.9502 19.3105L28.895 19.2547C27.4587 17.3569 26.6301 15.1242 26.4644 12.7798V12.8356V30.5859C26.4644 31.9255 27.5139 32.9861 28.8397 32.9861C30.1655 32.9861 31.2151 31.9255 31.2151 30.5859V21.4316C30.4417 20.8735 29.6683 20.1478 28.9502 19.3105Z"]').should('be.visible').and('exist')
        cy.get('[d="M46.3977 3.51656C43.9119 1.17219 41.1498 0 38.1116 0C35.681 0 33.4161 0.781458 31.3722 2.17692C28.0577 4.74457 26.3452 8.03786 26.3452 11.8893C26.3452 12.1684 26.3452 12.4475 26.4005 12.7266C26.4557 11.4428 27.5053 10.3822 28.7758 10.3822C30.1016 10.3822 31.1512 11.4428 31.1512 12.7824V21.3785C33.1951 22.9414 35.4047 23.7228 37.6696 23.7228H38.3325C40.1555 23.667 41.9784 23.2205 43.5804 22.3274H43.6357C47.7787 19.8156 49.8779 16.299 49.8779 11.8335C49.9331 8.81932 48.7178 5.97258 46.3977 3.51656ZM45.1272 12.0568C45.1272 12.9499 44.9614 13.843 44.63 14.6244C43.1385 17.527 41.0946 18.9225 38.3878 18.9225H37.8906C36.8962 18.9225 35.9019 18.6992 35.0181 18.1968C32.4217 16.6897 31.1512 14.6803 31.1512 12.001V11.6102C31.1512 10.8846 31.2617 10.2148 31.4826 9.54496C32.9189 6.36331 35.0181 4.80039 38.0563 4.80039C39.4926 4.80039 40.8736 5.19112 42.0337 6.02839C44.0776 7.59131 45.0719 9.3775 45.0719 11.6102V12.0568H45.1272Z"]').should('exist').and('be.visible')
        //to check the number of link avaialable
        //cy.xpath("//a").should('have.length','5') //Nos of links
        //verify that value is correct or not
        //cy.get("input[placeholder='Username']").type('Admin')
        //cy.get("input[placeholder='Username']").shoukd('have.value','Admin')
        cy.get('.css-1i43dhb > :nth-child(2)').click()
        cy.get('.css-1i43dhb > :nth-child(1)').click()
        cy.get('.MuiSelect-select').click()
        cy.get('[data-value="laser_eye_surgery"]').click()
        cy.get('.MuiButton-containedPrimary').click()
        cy.get('.MuiSelect-select').click()
        cy.get('[data-value="malik_patel"]').click()
        cy.get('.MuiButton-containedPrimary').click()
     }) 

     it('Explicit Assertion', ()=>{

        cy.visit("https://dev-ui.mylanguageplug.com/en/home")
        cy.contains('Login').click()
        cy.get('#email').type('anviwaje1312@gmail.com')
        cy.get('#password').type('Anvi@123')
        cy.get('.mui-e30vg4 > .MuiButton-contained').click()

        let exp_name = 'Anvi Waje';
        cy.get("div[class='MuiBox-root mui-17eyn3a'] div[class='MuiBox-root mui-1xoix2e'] h5[class='MuiTypography-root MuiTypography-h5 mui-13q1t36']").then((x)=>{

       // cy.get("document.querySelector(div[class='MuiBox-root mui-17eyn3a'] div[class='MuiBox-root mui-1xoix2e'] h5[class='MuiTypography-root MuiTypography-h5 mui-13q1t36'])").then((x)=>{

            let actname = x.text()
            expect(actname).to.eq(exp_name) //explicit assertion in BDD approach

            assert.equal(actname,exp_name) // TDD approach
        })


     })

    })
