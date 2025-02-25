class HomeTagger {
    elements = {
       
        admin: () => cy.get('.mat-menu-content > :nth-child(2) > span'),
        lotesBtn: () => cy.get('[data-test="Lotes"]'),
        docuProces: () => cy.get('[data-test="documentosProcesados"]'),
        emailProces: () => cy.get('[style="left: calc(66.6667% + 10px); width: calc(33.3333% - 10px); top: 0px; height: calc(330px);"] > .mat-grid-tile-content > :nth-child(1) > .mat-elevation-z8 > .mat-focus-indicator > .mat-button-wrapper > .bigButton'),
        subirDocs: () => cy.get('[data-test="subirDocumentos"]'),
        plantillas: () => cy.get('[data-test="plantillas"]'),
        esquemas: () => cy.get('[data-test="esquemas"]'),
        metricas: () => cy.get('[style="left: 0px; width: calc(33.3333% - 10px); top: calc(690px); height: calc(330px);"] > .mat-grid-tile-content > :nth-child(1) > .mat-elevation-z8 > .mat-focus-indicator > .mat-button-wrapper > .bigButton'),
        configuracion: () => cy.get('[style="left: calc(33.3333% + 5px); width: calc(33.3333% - 10px); top: calc(690px); height: calc(330px);"] > .mat-grid-tile-content > :nth-child(1) > .mat-elevation-z8 > .mat-focus-indicator > .mat-button-wrapper > .bigButton'),
        btnDescriptions: () => cy.get('.descriptionText')
    }
 
    adminVisible = () =>  this.elements.admin().should('be.visible')
    lotesBtnVisible = () => this.elements.lotesBtn().should('be.visible')
    docuProcesVisible = () => this.elements.docuProces().should('be.visible')
    docuProcesClick = () => this.elements.docuProces().click()

    emailProcesVisible = ()=> this.elements.emailProces().should('be.visible')
    subirDocsVisible = ()=> this.elements.subirDocs().should('be.visible')
    plantillasVisibles = () => this.elements.plantillas().should('be.visible')
    esquemasVisibles = () => this.elements.esquemas().should('be.visible')
    metricasVisibles = () => this.elements.metricas().should('be.visible')
    configuracionVisibles = () => this.elements.configuracion().should('be.visible')
    btnDescriptionsVisibles = () => this.elements.btnDescriptions().should('be.visible')

    btnDescriptionsInfo = () => {
        
        let btnText = ["Lotes", "Documentos Procesados", "EMails Procesados", "Subir Documentos", "Plantillas", "Esquemas", "Metricas de uso", "Configuración"];

        btnText.forEach(element => {
            if (this.elements.btnDescriptions().eq){
                cy.log(element)
                 }
            })

    }
    
            
        
    
}

export default new HomeTagger();