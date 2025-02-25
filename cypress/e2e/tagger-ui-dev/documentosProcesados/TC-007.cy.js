import DocumentosProcesados from "../../../pages/documentosProcesados";



describe("TC-007 Invalidar y borrar documento", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })
    it('Invalidar Documento', () => {
        cy.visit('/document')

        DocumentosProcesados.invalidarDocumento();
    })
     it('Borrar Documento', () => {
        cy.visit('/document')
         
         DocumentosProcesados.borrarDocumento();
        
    })
})
