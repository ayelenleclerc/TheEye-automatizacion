import DocumentosProcesados from "../../../pages/documentosProcesados";
import DatosDocumento from "../../../pages/datosDocumentosFactura";

import 'cypress-file-upload';

describe("TC-002 Subir un comprobante, clasificar y leer Documento", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })

    it('TC-002 Subir documento', () => {

        cy.visit('/document')
        
        DocumentosProcesados.agregarDocClick();
        
        cy.fixture('archivos/factura_Afip_lineas_percepciones.pdf', 'base64').then(fileContent => {
            const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], 'factura_Afip_lineas_percepciones.pdf', { type: 'application/pdf' });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);

        cy.get('#fileDropRef')
            .trigger('dragover', { dataTransfer }) 
                .trigger('drop', { dataTransfer });
        
        DocumentosProcesados.progresoCargaVisible();
        DocumentosProcesados.msgSubidaOkVisible();
        DocumentosProcesados.cerrarCuadroClick();
        DocumentosProcesados.elements.iconosEstadoDoc.docConverting().should('be.visible');

        cy.wait(5000)
        cy.reload()
            
        cy.wait(8000)
        cy.reload()
            DocumentosProcesados.elements.iconosEstadoDoc.docConverted().should('be.visible');
            DocumentosProcesados.elements.elDocEnTabla.documentoDoc().contains(' Factura ');
        });
    })

        

    it('validación de datos del documento, existen todas las columnas', () => {
        cy.visit('/document')

        //
        DocumentosProcesados.elements.elDocEnTabla.documentoDoc().contains(' Factura ').click();

        DatosDocumento.verificarDatosDocumento();
        DatosDocumento.verificarTablaDatos();
        DatosDocumento.verificarColumnas();
        DatosDocumento.verificarBotonProcesar();
        DatosDocumento.cerrarDialogo();

    })

   it('VALIDACION: Al cargar el documento los elementos por defecto son visibles.', () => {

        cy.visit('/document')
        DocumentosProcesados.checkRowVisible ();
        DocumentosProcesados.idCopyVisible ();
         DocumentosProcesados.miniaturaDocVisible ();
        DocumentosProcesados.fechaDocVisible ();
        DocumentosProcesados.nombreDocVisible ();
        DocumentosProcesados.documentoDocVisible ();
        DocumentosProcesados.estadoDocVisible ();

    })
   
})