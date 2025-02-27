import PageConfiguracion from '../../../pages/seccion_configuracion/pageConfiguracion.js';
describe("Validación Pantalla de configuración- Resumen", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
       
    })

    it('Al ingresar estan todos los elementos del encabezado', () => {
        cy.visit('/home');
        PageConfiguracion.sections.inicio.ingresarBtnConfig().click();
       
    });

})