class Conciliacion{
  conciliacion= {
        title: () => cy.get('[data-test="conciliacion-title"]'),
        table: () => cy.get('[data-test="conciliacion-table"]'),
         headerTable: {
            headerRow: () => cy.get('[data-test="conciliacion-header-row"]'),
            thSourceSchema: () => cy.get('[data-test="conciliacion-th-source-schema"]'),
            thTargetSchema: () => cy.get('[data-test="conciliacion-th-target-schema"]'),
            thUseCustomMapping: () => cy.get('[data-test="conciliacion-th-use-custom-mapping"]'),
            thCustomMapping: () => cy.get('[data-test="conciliacion-th-custom-mapping"]'),
            thAutoMapping: () => cy.get('[data-test="conciliacion-th-auto-mapping"]'),
            thAutoMappingIcon: () => cy.get('[data-test="conciliacion-auto-mapping-icon"]'),
            thMondeyTolerance: () => cy.get('[data-test="conciliacion-th-money-tolerance"]'),
            thMondeyToleranceIcon: () => cy.get('[data-test="conciliacion-money-tolerance-icon"]'),
            thActions: () => cy.get('[data-test="conciliacion-th-actions"]'),
        },
        rowFooterTable: {
            footerRow: () => cy.get('[data-test="conciliacion-footer-row"]'),
                
            tdSourceSchema: () => cy.get('[data-test="conciliacion-td-footer-source-schema"]'),
            tdSourceSchemaField: () => cy.get('[data-test="conciliacion-add-source-schema-field"]'),
            thSourceSchemaSelect: () => cy.get('[data-test="conciliacion-add-source-schema-select"]'),
            thSourceSchemaOption: () => cy.get('[data-test="conciliacion-add-source-schema-option-{{schema.id}}"]'),
                
            thTargetSchema: () => cy.get('[data-test="conciliacion-td-footer-target-schema"]'),
            thTargetSchemaField: () => cy.get('[data-test="conciliacion-add-target-schema-field"]'),
            thTargetSchemaSelect: () => cy.get('[data-test="conciliacion-add-target-schema-select"]'),
            thTargetSchemaOption: () => cy.get('[data-test="conciliacion-add-target-schema-option-{{schema.id}}"]'),

            thUseCustomMapping: () => cy.get('[data-test="conciliacion-td-footer-use-custom-mapping"]'),
            thUseCustomMappingField: () => cy.get('[data-test="conciliacion-add-use-custom-mapping-field"]'),
            thUseCustomMappingSelect: () => cy.get('[data-test="conciliacion-add-use-custom-mapping-select"]'),
            thUseCustomMappingOptionYes: () => cy.get('[data-test="conciliacion-add-use-custom-mapping-option-true"]'),
            thUseCustomMappingOptionNo: () => cy.get('[data-test="conciliacion-add-use-custom-mapping-option-false"]'),
                
            thCustomMapping: () => cy.get('[data-test="conciliacion-td-footer-custom-mapping"]'),
            thCustomMappingAddBtn: () => cy.get('[data-test="conciliacion-add-custom-mapping-button"]'),
            thCustomMappingAddIcon: () => cy.get('[data-test="conciliacion-add-custom-mapping-icon"]'),
            modal: {
                camporOptionDialog: () => cy.get('#mat-mdc-dialog-10'),
                campoTitle: () => cy.get('#mat-mdc-dialog-title-10'),
                opcion: {
                    percepciones: () => cy.get('#mat-mdc-chip-168'),
                    cae: () => cy.get('#mat-mdc-chip-169'),
                    codigoDocumento: () => cy.get('#mat-mdc-chip-170'),
                    cuitJuridica: () => cy.get('#mat-mdc-chip-171'),
                    cuitProveedor: () => cy.get('#mat-mdc-chip-172'),
                    domicilioJuridica: () => cy.get('#mat-mdc-chip-173'),
                    domicilioProveedor: () => cy.get('#mat-mdc-chip-174'),
                    fechaCae: () => cy.get('#mat-mdc-chip-175'),
                    fechaEmision: () => cy.get('#mat-mdc-chip-176'),
                    importeExento: () => cy.get('#mat-mdc-chip-177'),
                    importeNetoGravado: () => cy.get('#mat-mdc-chip-178'),
                    importeNoGravado: () => cy.get('#mat-mdc-chip-179'),
                    importeOtrosTributos: () => cy.get('#mat-mdc-chip-180'),
                    importeTotal: () => cy.get('#mat-mdc-chip-181'),
                    items: () => cy.get('#mat-mdc-chip-182'),
                    iva10_5: () => cy.get('#mat-mdc-chip-183'),
                    iva21: () => cy.get('#mat-mdc-chip-184'),
                    iva27: () => cy.get('#mat-mdc-chip-185'),
                    letraDocumento: () => cy.get('#mat-mdc-chip-186'),
                    moneda: () => cy.get('#mat-mdc-chip-187'),
                    numeroComprobante: () => cy.get('#mat-mdc-chip-188'),
                    numeroFactura: () => cy.get('#mat-mdc-chip-189'),
                    ordenCompra: () => cy.get('#mat-mdc-chip-190'),
                    puntoVenta: () => cy.get('#mat-mdc-chip-191'),
                    razonSocialJuridica: () => cy.get('#mat-mdc-chip-192'),
                    razonSocialProveedor: () => cy.get('#mat-mdc-chip-193'),
                    tipoCambio: () => cy.get('#mat-mdc-chip-194'),
                    tipoDocumento: () => cy.get('#mat-mdc-chip-195'),

                },
                cerrarModal: () => cy.get('#mat-mdc-dialog-10 > div > div > app-fields-dialog > mat-dialog-actions > button'),
            },
            thMondeyTolerance: () => cy.get('[data-test="conciliacion-th-money-tolerance"]'),
            thMondeyToleranceIcon: () => cy.get('[data-test="conciliacion-money-tolerance-icon"]'),
            
                
            thAutoMapping: () => cy.get('[data-test="conciliacion-td-footer-auto-mapping"]'),
            thAutoMappingField: () => cy.get('[data-test="conciliacion-add-auto-mapping-field"]'),
            thAutoMappingSelect: () => cy.get('[data-test="conciliacion-add-auto-mapping-select"]'),
            thAutoMappingOptionNo: () => cy.get('[data-test="conciliacion-add-auto-mapping-option-false"]'),
            thAutoMappingOptionYes: () => cy.get('[data-test="conciliacion-add-auto-mapping-option-true"]'),

            thMoneyTolerance: () => cy.get('[data-test="conciliacion-td-footer-money-tolerance"]'),
            thMoneyToleranceField: () => cy.get('[data-test="conciliacion-add-money-tolerance-field"]'),
            thMoneyToleranceInput: () => cy.get('[data-test="conciliacion-add-money-tolerance-input"]'),
            thMoneyToleranceCounter: () => cy.get('#spin'),
            
            thActions: () => cy.get('[data-test="conciliacion-td-footer-actions"]'),
            thActionsAddBtn: () => cy.get('[data-test="conciliacion-add-button"]'),
            thActionsAddIcon: () => cy.get('[data-test="conciliacion-add-icon"]'),
            thActionsEditIcon: () => cy.get('[data-test="conciliacion-edit-icon"]'),
            thActionsRemoveIcon: () => cy.get('[data-test="conciliacion-remove-button"]'),
        }
    }

}

export default new Conciliacion();