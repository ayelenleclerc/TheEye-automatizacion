import DocumentosProcesados from "../../../pages/documentosProcesados";


import 'cypress-file-upload';

describe("TC-003 Subir un comprobante, clasificar manualmente", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })

    it('TC-003 Subir documento, clasificar manualmente', () => {
        cy.visit('/document')

        DocumentosProcesados.agregarDocClick();

        cy.fixture('archivos/clasificar_a_mano.pdf', 'base64').then(fileContent => {
            const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], 'clasificar_a_mano.pdf', { type: 'application/pdf' });

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
      
        
        DocumentosProcesados.elements.elDocEnTabla.iconoMenuOpcionesDoc().eq(0).click();
        DocumentosProcesados.elements.menuOpcionesDocumento.clasificarDoc().click();
       
        DocumentosProcesados.elements.panelClasificarDoc.tituloPanel().should('have.text', 'Clasificar documento');
        DocumentosProcesados.elements.panelClasificarDoc.opcionesTipoDocumento().click();
        cy.wait(1000);
        DocumentosProcesados.elements.panelClasificarDoc.opcionesTipoDocumento().click();
        DocumentosProcesados.elements.panelClasificarDoc.opcionFactura().click().contains('Factura');
        DocumentosProcesados.elements.panelClasificarDoc.clasificarBtn().contains('Clasificar').click();
        DocumentosProcesados.elements.panelClasificarDoc.validadorToast().contains('Reprocesando documento');
        
        //DocumentosProcesados.elements.docConverted().eq(0).should('be.visible');

    })

})
