import PageConfiguracion from '../../../pages/seccion_configuracion/pageConfiguracion.js';
describe("Validación Pantalla de configuración- Concialiación", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        PageConfiguracion.sections.inicio.ingresarBtnConfig().click();
        PageConfiguracion.sections.sliderOpciones.conciliacionSection().click();
       
       
    })

    it('Al ingresar estan todos los elementos del encabezado', () => {
        cy.visit('/home');
        PageConfiguracion.sections.inicio.ingresarBtnConfig().click();
       
    });

})