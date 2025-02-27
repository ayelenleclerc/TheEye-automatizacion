import PageConfiguracion from '../../../pages/seccion_configuracion/pageConfiguracion.js';
describe("Validación Pantalla de configuración", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
       
    })

    it('Al ingresar estan todos los elementos del encabezado', () => {
        cy.visit('/home');
        PageConfiguracion.sections.inicio.ingresarBtnConfig().click();
        PageConfiguracion.sections.inicio.title().contains('Configuración');
        PageConfiguracion.sections.inicio.dialogContent().should('exist');
        PageConfiguracion.sections.inicio.elementGroup().should('exist');
        PageConfiguracion.sections.inicio.dialogActions().should('exist');
    });

    it('Al ingresar estan todos los elementos de configuración', () => {
        cy.visit('/home');
        PageConfiguracion.sections.inicio.ingresarBtnConfig().click();
        PageConfiguracion.sections.sliderOpciones.dispatcherSection().contains('Dispatcher');
        PageConfiguracion.sections.sliderOpciones.extraccionSection().contains('Extracción');
        PageConfiguracion.sections.sliderOpciones.resumenSection().contains('Resumen');
        PageConfiguracion.sections.sliderOpciones.conciliacionSection().contains('Conciliación');
        PageConfiguracion.sections.sliderOpciones.archivosDeConfiguracionSection().contains('Archivos de Configuración');
    });

    it('Al ingresar estan todos los elementos del footer', () => {
        cy.visit('/home');
        PageConfiguracion.sections.inicio.ingresarBtnConfig().click();
        PageConfiguracion.sections.footerActions.dialogActions().should('exist').and('be.visible');   
        PageConfiguracion.sections.footerActions.saveBtn().contains('Guardar');
        PageConfiguracion.sections.footerActions.cancelBtn().contains('Cancelar');      
    })  

})