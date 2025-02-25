import DocumentosProcesados from "../../../pages/documentosProcesados";
import procesamientoManual from "../../../pages/procesamientoManual.js";
import ProcesamientoManual from '../../../pages/procesamientoManual.js';



describe("TC-005 Validación y Procesamiento manual", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
    })
    it('Agregar documento con datos faltantes', () => {
        cy.visit('/document')
         DocumentosProcesados.agregarDocClick();
        
                cy.fixture('archivos/factura_dato_faltante.pdf', 'base64').then(fileContent => {
                    const file = new File([Cypress.Blob.base64StringToBlob(fileContent)], 'factura_dato_faltante.pdf', { type: 'application/pdf' });
        
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

    it('validación elementos, existen todos los elementos de las tablas', () => {
        cy.visit('/document')

        ProcesamientoManual.ingresar();
        ProcesamientoManual.validarMenuBar();
        ProcesamientoManual.validarFiltroyTag();
        ProcesamientoManual.validarTablaDatos(); 
        ProcesamientoManual.validarTablaItems();
        ProcesamientoManual.validarTablaPercepciones(); 
    })

    it('validación error cuando hay datos faltantes, muestra el error', () => {
        cy.visit('/document')

        ProcesamientoManual.ingresar();
        procesamientoManual.borrarDatoParaError();
        ProcesamientoManual.ingresar();
        ProcesamientoManual.errorFaltaRequerido();

       
    })

 
    it('Validacion de comportamiento cuando se agrega el dato incorrecto', () =>{
         cy.visit('/document')

        ProcesamientoManual.ingresar();
        ProcesamientoManual.errorFaltaRequerido();
       ProcesamientoManual.completarDatoIncorrecto();
    });

     it('Validacion de comportamiento cuando se agrega el dato faltante', () =>{
         cy.visit('/document')

        ProcesamientoManual.ingresar();
        ProcesamientoManual.completarDatoFaltante();
     });
    
})
