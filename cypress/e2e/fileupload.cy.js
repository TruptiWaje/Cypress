import 'cypress-file-upload';
describe("File operations", ()=>{

    it('Upload single file', ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        //whatever file we need to upload keep it in fixtures folder
        cy.get('#file-upload').attachFile('Screenshot from 2024-05-16 19-26-48.png');
        cy.get('#file-submit').click();
        cy.wait(8000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')
    })

    it("Rename file time of uploading", ()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        //whatever file we need to upload keep it in fixtures folder
        cy.get('#file-upload').attachFile({filePath:'Screenshot from 2024-05-16 19-26-48', fileName:'Logo.png'});
        cy.get('#file-submit').click();
        cy.wait(8000)
        cy.get("div[class='example']>h3").should('have.text','File Uploaded!')

    })
    
    it('Upload file using drag and drop', ()=>{
        
        cy.visit('https://the-internet.herokuapp.com/upload')
        //Need to pass some extra parameter as we are drag and drop 
        cy.get('#drag-drop-upload').attachFile('Screenshot from 2024-05-16 19-26-48.png', {subjectType:'drag-n-drop'});
        cy.wait(5000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('Screenshot from 2024-05-16 19-26-48.png')


    })
    it.only('Upload multiple files', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('#filesToUpload').attachFile(['Screenshot from 2024-06-12 22-09-08','Screenshot from 2024-05-16 19-26-48'])
        cy.get('.demo-wrapper').should('contains.text','Screenshot from 2024-06-12 22-09-08')

    })
    
    it.only('File upload - shadow dom',()=>{

        cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm')
        cy.get('.smart-browse-input',{includeShadowDom:true}).attachFile("Screenshot from 2024-05-16 19-26-48.png")
        cy.wait(5000)
        cy.get('.smart-item-name',{includeShadowDom:true}).contains('Screenshot from 2024-05-16 19-26-48.png')
    })


})