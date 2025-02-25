import DocumentosProcesados from "../../../pages/documentosProcesados";
import ProcesamientoManual from '../../../pages/procesamientoManual.js';



describe("TC-006 multipagina", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })
    it('Agregar documento multipagina', () => {
    cy.visit('/document');
    DocumentosProcesados.agregarDocClick();

    cy.fixture('archivos/factura_multipagina2.pdf', 'base64').then(fileContent => {
        const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], 'factura_multipagina2.pdf', { type: 'application/pdf' });

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

    DocumentosProcesados.esperarIconoConverted();
});


    it('En el proceso manual, se deben ver todas las páginas', () => {
        cy.visit('/document')

        ProcesamientoManual.ingresar();
        ProcesamientoManual.validarMultipágina();
    })
})
