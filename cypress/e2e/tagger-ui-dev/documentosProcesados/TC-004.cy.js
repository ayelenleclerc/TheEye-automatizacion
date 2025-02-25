import DocumentosProcesados from "../../../pages/documentosProcesados";
import DatosDocumento from "../../../pages/datosDocumentosFactura";



describe("TC-004 Data Extraction", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })
    

   it('Validación de datos del documento, existen todas las columnas', () => {
    cy.visit('/document');

    DocumentosProcesados.elements.elDocEnTabla.documentoDoc().contains(' Factura ').click();

    DatosDocumento.verificarDatosDocumento();
    DatosDocumento.verificarTablaDatos();
    DatosDocumento.verificarColumnas();
    DatosDocumento.verificarBotonProcesar();
    DatosDocumento.cerrarDialogo();

    DocumentosProcesados.elements.elDocEnTabla.documentoDoc().contains(' Factura ').click();

    // Verificar si la tabla de items existe antes de validarla
    cy.get('body').then(($body) => {
        if ($body.find(':nth-child(4) > .mat-table > tbody > :nth-child(1) > .cdk-column-key').length > 0) {
            DatosDocumento.tablaItems();
        } else {
            cy.log('Tabla de items no encontrada, el test continúa.');
        }
    });

    // Verificar si la tabla de percepciones existe antes de validarla
    cy.get('body').then(($body) => {
        if ($body.find(':nth-child(4) > .mat-table > tbody > :nth-child(2) > .cdk-column-key').length > 0) {
            DatosDocumento.tablaPercepciones();
        } else {
            cy.log('Tabla de percepciones no encontrada, el test continúa.');
        }
    });

    DatosDocumento.cerrarDialogo();
});

   
})
