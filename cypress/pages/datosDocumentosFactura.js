class DatosDocumento{

  elements = {
      
        dataPanel: () => cy.get('#data'),
        idDocument: () => cy.get('#mat-dialog-title-0'),
        titulo: () => cy.get('h3'),
        inputFiltro: () => cy.get('#mat-input-1'),
        
    //TABLA de los datos del documento
        nombre: () => cy.get(':nth-child(3) > .mat-table > thead > .mat-header-row > .cdk-column-key'),
        valor: () => cy.get(':nth-child(3) > .mat-table > thead > .mat-header-row > .cdk-column-value'),
        cae: () => cy.get(':nth-child(3) > .mat-table > tbody > :nth-child(1) > .cdk-column-key'),
        codigoDocumento: () => cy.get(':nth-child(2) > .cdk-column-key'), 
        cuitJuridica: () => cy.get(':nth-child(3) > .cdk-column-key'),
        cuitProveedor: () => cy.get(':nth-child(4) > .cdk-column-key'),
        domicilioJuridica: () => cy.get(':nth-child(5) > .cdk-column-key'),
        domicilioProveedor: () => cy.get(':nth-child(6) > .cdk-column-key'),
        fechaCae: () => cy.get(':nth-child(7) > .cdk-column-key'),
        fechaEmision: () => cy.get(':nth-child(8) > .cdk-column-key'),
        importeExento: () => cy.get(':nth-child(9) > .cdk-column-key'),
        importeNetoGravado: () => cy.get(':nth-child(10) > .cdk-column-key'),
        importeNoGravado: () => cy.get(':nth-child(11) > .cdk-column-key'),
        importeOtrosTributos: () => cy.get(':nth-Child(12) > .cdk-column-key'),
        importeTotal: () => cy.get(':nth-child(13) > .cdk-column-key'),
        iva10_5: () => cy.get(':nth-child(14) > .cdk-column-key'),
        iva21: () => cy.get(':nth-child(15) > .cdk-column-key'),
        iva27: () => cy.get(':nth-child(16) > .cdk-column-key'),
        letraDocumento: () => cy.get(':nth-child(17) > .cdk-column-key'),
        moneda: () => cy.get(':nth-child(18) > .cdk-column-key'),
        numeroComprobante: () => cy.get(':nth-child(19) > .cdk-column-key'),
        numeroFactura: () => cy.get(':nth-child(20) > .cdk-column-key'),
        ordenCompra: () => cy.get(':nth-child(21) > .cdk-column-key'),
        puntoVenta: () => cy.get(':nth-child(22) > .cdk-column-key'),
        razonSocialJuridica: () => cy.get(':nth-child(23) > .cdk-column-key'),
        razonSocialProveedor: () => cy.get(':nth-child(24) > .cdk-column-key'),
        tipoCambio: () => cy.get(':nth-child(25) > .cdk-column-key'),
        tipoDocumento: () => cy.get(':nth-child(26) > .cdk-column-key'),
       
        
        //TABLA de los items
        tabla: () => cy.get(':nth-child(4) > .mat-table > thead > .mat-header-row > .cdk-column-key'),
        datos: () => cy.get(':nth-child(4) > .mat-table > thead > .mat-header-row > .cdk-column-value'),
        items: () => cy.get(':nth-child(4) > .mat-table > tbody > .mat-row > .cdk-column-key'),
        procesarManualmenteBtn: () => cy.get('.mat-dialog-actions > .ng-star-inserted > .mat-button-wrapper'),
        cerrarVentana: ()=> cy.get('[mat-dialog-close=""] > .mat-button-wrapper'),
        
      // importeOtrosTributos TABLA
      abrirTributosTabla: () => cy.get(':nth-child(1) > .cdk-column-thumbnail > .thumbnail'),
      verTabla: () => cy.get(':nth-child(12) > .cdk-column-value > .mat-focus-indicator > .mat-button-wrapper'),
      tituloTributosTabla: () => cy.get('#mat-dialog-title-2'),
      verImporteOtrosTributos: () => cy.get('.mat-chip'),
      cerrarTributosTabla: () => cy.get('batch-info-table-view.ng-star-inserted > #actions > .mat-dialog-actions > .mat-focus-indicator > .mat-button-wrapper'),


    }

    verificarDatosDocumento() {
    this.elements.idDocument().contains('Document ID:');
      this.elements.titulo().should('have.text', 'Información Obtenida');
      
  }

  verificarTablaDatos() {
  cy.get('body').then(($body) => {
    // Verifica si la tabla existe antes de validarla
    if ($body.find(':nth-child(4) > .mat-table').length > 0) {
      cy.get(':nth-child(4) > .mat-table > thead > .mat-header-row > .cdk-column-key')
        .should('have.text', 'TABLA');
      cy.get(':nth-child(4) > .mat-table > thead > .mat-header-row > .cdk-column-value')
        .should('have.text', 'DATOS');

      // Verifica si la fila de "items" está presente antes de validarla
      cy.get(':nth-child(4) > .mat-table > tbody > :nth-child(1) > .cdk-column-key')
        .then(($el) => {
          if ($el.length > 0) {
            cy.wrap($el).should('have.text', 'items');
          } else {
            cy.log('Fila de items no encontrada, el test continúa.');
          }
        });

      // Verifica si la fila de "percepciones" está presente antes de validarla
      cy.get(':nth-child(4) > .mat-table > tbody > :nth-child(2) > .cdk-column-key')
        .then(($el) => {
          if ($el.length > 0) {
            cy.wrap($el).should('have.text', 'percepciones');
          } else {
            cy.log('Fila de percepciones no encontrada, el test continúa.');
          }
        });

    } else {
      cy.log('Tabla no encontrada, el test continúa.');
    }
  });
}


  verificarColumnas() {
  const columnas = [
    'cae', 'codigoDocumento', 'cuitJuridica', 'cuitProveedor', 'domicilioJuridica', 'domicilioProveedor',
    'fechaCae', 'fechaEmision', 'importeExento', 'importeNetoGravado', 'importeNoGravado',
    'importeOtrosTributos', 'importeTotal', 'iva10_5', 'iva21', 'iva27',
    'letraDocumento', 'moneda', 'numeroComprobante', 'numeroFactura',
    'ordenCompra', 'puntoVenta', 'razonSocialJuridica', 'razonSocialProveedor',
    'tipoCambio', 'tipoDocumento'
  ];

  //  Verificar nombres de las columnas en la tabla
  columnas.forEach((columna, index) => {
    cy.get(`:nth-child(${index + 1}) > .cdk-column-key`)
      .should('exist')
      .contains( columna);
  });

  // Verificar valores en cada columna
  columnas.forEach((columna, index) => {
    cy.get(`:nth-child(${index + 1}) > .cdk-column-value`).then(($el) => {
      const valor = $el.text().trim(); // Obtiene el texto dentro de la celda
      const resultado = valor ? `Columna ${columna}: ${valor}` : `Columna ${columna}: null`;

      cy.log(resultado); // Muestra en Cypress
      console.log(resultado); // Imprime en consola
    });
  });
}

  cerrarDialogo() {
    this.elements.cerrarVentana().should('have.text', 'Cerrar').click();
  }

  verificarBotonProcesar() {
    this.elements.procesarManualmenteBtn().should('have.text', 'Procesar Manualmente');
  }

  tablaItems() {
         cy.get(':nth-child(1) > .cdk-column-value > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('#mat-dialog-title-2').should('have.id', 'mat-dialog-title-2');
        cy.get('#mat-dialog-title-2').should('have.text', 'Tabla: items');
        cy.get('.mat-header-row > .cdk-column-cantidad').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-codigo').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-decripcion').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-importeUnitario').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-items_importe_total_con_iva').should('be.visible');
        cy.get('#mat-dialog-2 > batch-info-table-view > mat-dialog-content').scrollTo('right');
        cy.get('.mat-header-row > .cdk-column-items_importe_total_sin_iva').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-iva').should('be.visible');
        cy.get('batch-info-table-view.ng-star-inserted > #actions > .mat-dialog-actions > .mat-focus-indicator > .mat-button-wrapper').click();
  }
  tablaPercepciones() {

       cy.get(':nth-child(4) > .mat-table > tbody > :nth-child(2) > .cdk-column-key').should('have.text', 'percepciones');
        cy.get(':nth-child(2) > .cdk-column-value > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('#mat-dialog-title-3').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-percepciones_importe').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-percepciones_porcentaje').should('be.visible');
        cy.get('.mat-header-row > .cdk-column-percepciones_tipo').should('be.visible');
        cy.get('batch-info-table-view.ng-star-inserted > #actions > .mat-dialog-actions > .mat-focus-indicator > .mat-button-wrapper').click();
  }

  
}

export default new DatosDocumento();