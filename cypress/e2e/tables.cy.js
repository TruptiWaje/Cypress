describe('Tables', ()=>{
// beforeeach is hook used when want to execute certain steps comman;y for each test case
    beforeEach('Login', ()=>{

        cy.visit('https://demo.opencart.com/admin/index.php');
        //cy.get("#input-username").type("demo");
        //cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

       // cy.get(".btn-close").click();   
        //custome -> customer
        cy.get("#menu-customer>a").click();  //customers main menu
        cy.get("#menu-customer>ul>li:first-child").click(); //submenu

        })    
    it.skip('Count number of rows and cloumns', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10') //length to check length of rows , 10 is aspected rows
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7')
    })

    it.skip('check cell data in specific row & column',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains('kk@yahoo.com')
    })

    it.skip("how to read all data and column from first page in first go",()=>{
        // each block will iterate through each and every row and column and read it
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")// captures all row
            .each(($row, index, $rows)=>{  // $rows - represent row. index-> will hold index, row-> point to current row

                cy.wrap($row).within(()=>{
    // wrap will get first row, within will navigate throgh all column i.e td
                    cy.get("td").each(($col, index, $cols )=>{ //repeat all columns
                        cy.log($col.text())
                    })
                }) 
            })

    })

    it('how to read data from table avaialable on different page i.e pagination',()=>{
        //get total number of pages first, identify how many records each page have
        //navigate thorugh each page parallely read the data till the last page
        // to get total pages need to use javascript function to get starting and ending indes because the values are dynamic
        // indexof method will be used to capture index
        let totalpages;
        cy.get('.col-sm-6.text-end').then((e)=>{ // then to extract part of text from the complete text
           let mytext =  e.text(); //Showing 1 to 10 of 5582 (559 Pages)
           totalpages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf("Pages")-1) // index keeps on changing according to value
            cy.log("Total number of pages=============>"+totalpages)
            
        
            //get data from the table by clicking on page number by writing loop statement
            //let totalpages =5
            for(let p=1;p<=totalpages;p++)
                {
                    if(totalpages>1) // to check that there should be more than 1 page
                        {
                            cy.log("activepage is ===>",+p);
                            // get whole pagination locator so that I can pass each page into it
                            cy.get("ul[class='pagination']>li:nth-child("+p+")").click(); // in xpath we can pass the parameter in the format mentioned for p
                            cy.wait(3000);

                            // now read the data

                            cy.get("table[class='table table-bordered table-hover']>tbody>tr")  
                            .each(  ($row, index, $rows)=>{    
                                cy.wrap($row).within(()=>{
                                    cy.get("td:nth-child(1)").then((e)=>{ //repeat all columns
                                        cy.log(e.text()) // first column
                                    cy.get("td:nth-child(2)").then((e)=>{ //repeat all columns
                                            cy.log(e.text()) // second column
                                    cy.get("td:nth-child(3)").then((e)=>{ //repeat all columns
                                        cy.log(e.text()) // Email
                                })
                            })
                        })
                        
                
                    })
                })
                }   
            } 
        })
    })
})