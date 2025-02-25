class DocumentosProcesados {
    elements = {
        menuPrincipal: {
            irInicio: () => cy.get('body > app-root > div > app-batch-view > mat-toolbar > button.mat-focus-indicator.mat-tooltip-trigger.mat-stroked-button.mat-button-base'),
            titulo: () => cy.get('.white'),

        },
        
        agregarDocumentos: {
            agregarDoc: () => cy.get('[ng-reflect-message="Añadir Documento"]'),
            cuadroCarga: () => cy.get('#mat-dialog-0'),
            cargarDocDrop : () => cy.get('#fileDropRef'),
            cerrarCuadro: () => cy.get('#mat-dialog-0 > app-batch-uploader-dialog > div.mat-dialog-actions > button'),
            progresoCarga: () => cy.get('.mat-bottom-sheet-container'),
            msgSubidaOk: () => cy.get('#toast-container > .ng-trigger'),
            
        },

        acciones: {
            accionesMenu: () => cy.get('section > .mat-focus-indicator > .mat-button-wrapper'),
            descargarReporte : () => cy.get('.mat-menu-content > [tabindex="0"]'),
            reprocesarSeleccion : () => cy.get('[mattooltip="Reprocesar los documentos seleccionados"]'),
            despacharSeleccion :  ()=> cy.get('[ng-reflect-message="Callback desactivado"]'),
            generarPlantilla: () => cy.get('[mattooltip="Generar plantilla de clasificación para los documentos seleccionados"]'),
        },
        
        fechas: {
            rangoFechas: () => cy.get('.date'),
            fechaInicio: () => cy.get('#mat-date-range-input-0'), 
            fechaFin: () => cy.get('.mat-end-date'),
            datePicker: () => cy.get('.mat-datepicker-toggle-default-icon'), 
        },
        
        filtro: {
            filtro: () => cy.get('#mat-input-0'), 
            filtroLupa: () => cy.get('[aria-label="Buscar"]'),
            filtroCerrar: () => cy.get('[aria-label="Limpiar"]'),
        },
        
        cabeceraTabla: {
            checkAll: () => cy.get('#mat-checkbox-10 > label'),
            idColumn: () => cy.get('.cdk-column-id.mat-column-id'),
            miniaturaColumn: () => cy.get('.mat-column-thumbnail'),
            fechaCreacionColumn: () => cy.get('.mat-column-creation_date'),
            ultimaModifColumn: ()=> cy.get('.mat-column-modification_date'),
            nombreColumn: () => cy.get('.cdk-column-original_name'),
            paginasColumn: ()=> cy.get('.mat-column-pages_number'),
            documentoColumn: () => cy.get('.cdk-column-classification_label'),
            coincidenciaColumn: () => cy.get('.mat-column-classification_confidence'),
            estadoColumn: () => cy.get('.cdk-column-lifecycle'), 
        },
        
        tablaVacia: () => cy.get('.mat-cell'),
        
        menuCabeceraTabla: {
            menuOpciones: () => cy.get('.cdk-column-actions.mat-column-actions.ng-star-inserted > div > button > span.mat-button-wrapper > mat-icon'),
            opMiniatura:() =>  cy.get('#mat-option-45 > .mat-option-text'),
            OpFecha:() =>  cy.get('#mat-option-60 > .mat-pseudo-checkbox'),
            opUltima:() => cy.get('#mat-option-2 > .mat-pseudo-checkbox'),
            opNombre:() => cy.get('#mat-option-76 > .mat-pseudo-checkbox'),
            opNumero:() =>  cy.get('#mat-option-21 > .mat-pseudo-checkbox'),
            opPlantilla:() =>  cy.get('#mat-option-92 > .mat-pseudo-checkbox'),
            opCoincidencia: () => cy.get('#mat-option-37 > .mat-pseudo-checkbox'),
            
        },
        //DOCUMENTOS EN TABLA, ELEMENTOS 
        elDocEnTabla: {
            checkRow: () => cy.get('#mat-checkbox-2'),
            idCopy: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-cell.cdk-cell.text-center.cdk-column-id.mat-column-id.ng-star-inserted > button'),
            miniaturaDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-tooltip-trigger.mat-cell.cdk-cell.cdk-column-thumbnail.mat-column-thumbnail.ng-star-inserted > img'),
            fechaDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-tooltip-trigger.mat-cell.cdk-cell.cdk-column-creation_date.mat-column-creation_date.ng-star-inserted > span'),
            ultimaModifDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-tooltip-trigger.mat-cell.cdk-cell.cdk-column-modification_date.mat-column-modification_date.ng-star-inserted'),
            nombreDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-tooltip-trigger.mat-cell.cdk-cell.ellipsis.cdk-column-original_name.mat-column-original_name.ng-star-inserted > span'),
            paginasDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-tooltip-trigger.mat-cell.cdk-cell.cdk-column-pages_number.mat-column-pages_number.ng-star-inserted > span'),
            documentoDoc: () => cy.get('.mat-row > .cdk-column-classification_label'),
            coincidenciaDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-cell.cdk-cell.cdk-column-classification_confidence.mat-column-classification_confidence.ng-star-inserted'),
            estadoDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-cell.cdk-cell.text-center.cdk-column-lifecycle.mat-column-lifecycle.ng-star-inserted > app-lifecycle-icon > div > mat-icon:nth-child(6)'),
            iconoDescargaDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-cell.cdk-cell.cdk-column-actions.mat-column-actions.ng-star-inserted > button:nth-child(1)'),
            iconoModificarDoc: () => cy.get('.cdk-column-actions button.mat-tooltip-trigger.eye-button'),
            iconoMenuOpcionesDoc: () => cy.get('#content > div > div.table-responsive > table > tbody > tr > td.mat-cell.cdk-cell.cdk-column-actions.mat-column-actions.ng-star-inserted > button.mat-focus-indicator.mat-menu-trigger.mat-icon-button.mat-button-base'),
            
        },
        
        iconosEstadoDoc: {
            docPending: () => cy.get('[ng-reflect-message="Procesando - (pending"]'),
            docConverting: () => cy.get('[ng-reflect-message="Procesando - (converting)"]'),
            docConverted: () => cy.get('[ng-reflect-message="Procesado - (converted)"]'),
            docSubmitted: () => cy.get('[ng-reflect-message="Procesando - (submitted)"]'),
            docQueued: () => cy.get('[ng-reflect-message="Procesando - (queued)"]'),
            docCompleted: () => cy.get('[ng-reflect-message="Procesando - (completed)"]'),
            docError: () => cy.get('[ng-reflect-message="Procesando - (error)"]'),
            docInvalidated: () => cy.get('[ng-reflect-message="Procesando - (invalidated)"]'),
            docPosponed: () => cy.get('[ng-reflect-message="Procesando - (posponed)"]'),

        },
        
        menuOpcionesDocumento: {
            verPlantilla: () => cy.get('[ng-reflect-message="Ver plantilla]'),
            editarPlantilla: () => cy.get('[ng-reflect-message="Editar plantilla]'),
            reprocesarDoc: () => cy.get('[ng-reflect-message="El documento ya esta listo" ]'),
            despacharDoc: () => cy.get('[ng-reflect-message="Callback desactivado"]'),
            importarPlantilla: () => cy.get('[ng-reflect-message="Importar plantilla"]'),
            invalidarDoc: () => cy.get('[ng-reflect-message="Invalidar documento"]'),
            clasificarDoc: () => cy.get('[ng-reflect-message="Clasificar documento manualmen"]'),
            borrarDoc: () => cy.get('[ng-reflect-message="Borrar documento"]'),
            
        },
 


        panelClasificarDoc: {
            tituloPanel: () => cy.get('#mat-dialog-title-0'),
            opcionesTipoDocumento: () => cy.get('#mat-select-value-5 > span'),
            opcionFactura: () => cy.get('.mat-option-text'),
            clasificarBtn: () => cy.get('#mat-dialog-0 > app-manual-classify > div > div > div.mat-dialog-actions > button'),
            validadorToast: () => cy.get('#toast-container > div > div')
        },

    }
    
    // menú principal
    irInicioClick = () => this.elements.menuPrincipal.irInicio().click();
    tituloVisible = () => this.elements.menuPrincipal.titulo().should('be.visible');
    //agregar documentos
    agregarDocVisible = () => this.elements.agregarDocumentos.agregarDoc().should('be.visible');
    agregarDocClick = () => this.elements.agregarDocumentos.agregarDoc().click();
    cuadroCargaVisible = () => this.elements.agregarDocumentos.cuadroCarga().should('be.visible');
    
    progresoCargaVisible = () => this.elements.agregarDocumentos.progresoCarga().should('be.visible');
    msgSubidaOkVisible = () => this.elements.agregarDocumentos.msgSubidaOk().should('be.visible')
    

    cerrarCuadroClick = () => this.elements.agregarDocumentos.cerrarCuadro().click();

    //ACCIONES
    accionesMenuVisible = () => this.elements.acciones.accionesMenu().should('be.visible');
    accionesMenuClick = () => this.elements.acciones.accionesMenu().click();

    descargarReporteVisible = () => this.elements.acciones.descargarReporte().should('be.visible'); 
    reprocesarSeleccionVisible = () => this.elements.acciones.reprocesarSeleccion().should('be.visible');
    despacharSeleccionVisible = () => this.elements.acciones.despacharSeleccion().should('be.visible');
    generarPlantillaVisible = () => this.elements.acciones.generarPlantilla().should('be.visible');


    // fecha
    rangoFechasVisible = () => this.elements.fechas.rangoFechas().should('be.visible');
    fechaInicioVisible = () => this.elements.fechas.fechaInicio().should('be.visible');
    fechaFinVisible = () => this.elements.fechas.fechaFin().should('be.visible');
    datePickerVisible = () => this.elements.fechas.datePicker().should('be.visible');
    //filtro
    filtroVisible = () => this.elements.filtro.filtro().should('be.visible');
    filtroTexto = () => this.elements.filtro.filtro().clear().type('Prueba');
    filtroLupaVisible = () => this.elements.filtro.filtroLupa().should('be.visible');
    filtroLupaClick = () => this.elements.filtro.filtroLupa().click();
    filtroCerrarVisible = () => this.elements.filtro.filtroCerrar().should('be.visible');
    filtroCerrarClick = () => this.elements.filtro.filtroCerrar().click();
    //cabeceras de la tabla (Los Click alteran el orden en la que se muestran los documentos, ascendente o descendente)
    idColumnVisible = () => this.elements.cabeceraTabla.idColumn().should('be.visible');
    miniaturaColumnVisible = () => this.elements.cabeceraTabla.miniaturaColumn().should('be.visible');
    
    fechaCreacionColumnVisible = () => this.elements.cabeceraTabla.fechaCreacionColumn().should('be.visible');
    fechaCreacionColumnClick = () => this.elements.cabeceraTabla.fechaCreacionColumn().click();

    ultimaModifColumnVisible = () => this.elements.cabeceraTabla.ultimaModifColumn().should('be.visible');
    ultimaModifColumnClick = () => this.elements.cabeceraTabla.ultimaModifColumn().click();

    nombreColumnVisible = () => this.elements.cabeceraTabla.nombreColumn().should('be.visible');
    nombreColumnClick = () => this.elements.cabeceraTabla.nombreColumn().click();
    
    paginasColumnVisible = () => this.elements.cabeceraTabla.paginasColumn().should('be.visible');
    paginasColumnClick = () => this.elements.cabeceraTabla.paginasColumn().click();
    
    documentoColumnVisible = () => this.elements.cabeceraTabla.documentoColumn().should('be.visible');
    documentoColumnClick = () => this.elements.cabeceraTabla.documentoColumn().click();
    
    coincidenciaColumnVisible = () => this.elements.cabeceraTabla.coincidenciaColumn().should('be.visible');
    coincidenciaColumnClick = () => this.elements.cabeceraTabla.coincidenciaColumn().click();

    
    estadoColumnVisible = () => this.elements.cabeceraTabla.estadoColumn().should('be.visible');
    estadoColumnClick = () => this.elements.cabeceraTabla.estadoColumn().click();
    
    //tabla
    tablaVaciaMensaje = () => this.elements.tablaVacia().should('have.text', 'No hay datos para mostrar');
    
    //menu de opciones
    menuOpcionesVisible = () => this.elements.menuCabeceraTabla.menuOpciones().should('be.visible')
    menuOpcionesClick = () => this.elements.menuCabeceraTabla.menuOpciones().click();
    opMiniaturaClick= () => this.elements.menuCabeceraTabla.opMiniatura().click();
    OpFechaClick= () => this.elements.menuCabeceraTabla.OpFecha().click();
    opUltimaClick= () => this.elements.menuCabeceraTabla.opUltima().click();
    opNombreClick = () =>this.elements.menuCabeceraTabla.opNombre().click();
    opNumeroClick = () => this.elements.menuCabeceraTabla.opNumero().click();
    opPlantillaClick= () => this.elements.menuCabeceraTabla.opPlantilla().click();
    opCoincidenciaClick = () => this.elements.menuCabeceraTabla.opCoincidencia().click();
    

    //Visibilidad de los elementos cargados en la tabla.
    checkRowVisible = () => this.elements.elDocEnTabla.checkRow().should('be.visible');
    idCopyVisible = () => this.elements.elDocEnTabla.idCopy().should('be.visible');
    miniaturaDocVisible = () => this.elements.elDocEnTabla.miniaturaDoc().should('be.visible'); 
    fechaDocVisible = () => this.elements.elDocEnTabla.fechaDoc().should('be.visible');
    ultimaModifDocVisible = () => this.elements.elDocEnTabla.ultimaModifDoc().should('be.visible');
    nombreDocVisible = () => this.elements.elDocEnTabla.nombreDoc().should('be.visible');
    paginasDocVisible = () => this.elements.elDocEnTabla.paginasDoc().should('be.visible');
    documentoDocVisible = () => this.elements.elDocEnTabla.documentoDoc().should('be.visible');
    coincidenciaDocVisible = () => this.elements.elDocEnTabla.coincidenciaDoc().should('be.visible');
    estadoDocVisible = () => this.elements.elDocEnTabla.estadoDoc().should('be.visible');

    validarIdDoc = ()=> cy.get('#content > div > div.table-responsive > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.text-center.cdk-column-id.mat-column-id.ng-star-inserted > button')

    //invalidar documento
    invalidarDocumento = () => {
        cy.get('#content > div > div.table-responsive > table > tbody > tr').eq(0).should('be.visible');
        cy.get(':nth-child(1) > .cdk-column-actions > .mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
        this.elements.menuOpcionesDocumento.invalidarDoc().click();
        cy.get('#toast-container > .ng-trigger').should('have.text', ' Se completo la operación ');
        cy.reload();
        cy.get(':nth-child(1) > .cdk-column-lifecycle > app-lifecycle-icon > div.ng-star-inserted > [ng-reflect-svg-icon="invalidated_document"] > #Capa_1').should('be.visible');
    }

    borrarDocumento = () => {
        cy.get('#content > div > div.table-responsive > table > tbody > tr').eq(0).should('be.visible');
        cy.wait(2000);
         cy.get(':nth-child(1) > .cdk-column-actions > .mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
        this.elements.menuOpcionesDocumento.borrarDoc().click();
        cy.get('#toast-container > .ng-trigger').should('have.text', ' Se completo la operación ');

    }

    esperarIconoConverted =()=> {
        cy.wait(5000); // Espera antes de verificar
        cy.reload(); // Recarga la página

        cy.get('body').then(($body) => {
            if ($body.find(this.elements.iconosEstadoDoc.docConverted().selector).length > 0) {
                cy.log('✅ Documento convertido correctamente.');
            } else {
                cy.log('🔄 Reintentando...');
                // Reintentar hasta que cambie
            }
        });
    }

}

export default new DocumentosProcesados();