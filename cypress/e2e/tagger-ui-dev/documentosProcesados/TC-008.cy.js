import DocumentosProcesados from "../../../pages/documentosProcesados";



describe("TC-008 Subdividir en paginas al importar", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })
    it('agregar Documento multipágina, y subdividir', () => {
        cy.visit('/document')
                DocumentosProcesados.agregarDocClick();
               cy.get('.mat-slide-toggle-bar').click();
                       cy.fixture('archivos/AFIP_separar_documentos.pdf', 'base64').then(fileContent => {
                           const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], 'AFIP_separar_documentos.pdf', { type: 'application/pdf' });
               
                       const dataTransfer = new DataTransfer();
                       dataTransfer.items.add(file);
               
                       cy.get('#fileDropRef')
                           .trigger('dragover', { dataTransfer }) 
                               .trigger('drop', { dataTransfer });
                       });
                        
                   DocumentosProcesados.progresoCargaVisible();
                       DocumentosProcesados.msgSubidaOkVisible();
                       DocumentosProcesados.cerrarCuadroClick();
                       DocumentosProcesados.elements.iconosEstadoDoc.docConverting().should('be.visible');
               
                       cy.wait(5000)
                       cy.reload()
                           
                       cy.wait(8000)
                       cy.reload()
                     
                       
                     
    })
    
      
    })
 