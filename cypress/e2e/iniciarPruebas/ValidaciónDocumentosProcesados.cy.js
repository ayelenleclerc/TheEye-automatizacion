import DocumentosProcesados from "../../pages/documentosProcesados";
import homeTagger from "../../pages/homeTagger";

describe("Validación Documentos Procesados", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
       
    })

    it("Validación de elementos menú principal", () => {
       
        cy.visit('/document')
        
        //volver al inicio y titulo
        DocumentosProcesados.irInicioClick();
        homeTagger.docuProcesClick();
        DocumentosProcesados.tituloVisible();
        //agregar documentos
        DocumentosProcesados.agregarDocVisible();
        DocumentosProcesados.agregarDocClick();
        DocumentosProcesados.cuadroCargaVisible();
        DocumentosProcesados.cerrarCuadroClick();
        //menu acciones
        DocumentosProcesados.accionesMenuVisible();
        DocumentosProcesados.accionesMenuClick();
        //opciones de Acciones
        DocumentosProcesados.descargarReporteVisible();
        DocumentosProcesados.reprocesarSeleccionVisible();
        DocumentosProcesados.despacharSeleccionVisible();
        DocumentosProcesados.generarPlantillaVisible();

       
    })

    it("Validación de elementos tabla dinámica", () => {
        cy.visit('/document')
       
        //cabeceras de la tabla
        DocumentosProcesados.idColumnVisible();
        DocumentosProcesados.miniaturaColumnVisible();
        DocumentosProcesados.fechaCreacionColumnVisible();
        //menu de opciones para habilitar la opcion en la tabla
        DocumentosProcesados.menuOpcionesClick(); 
        DocumentosProcesados.opUltimaClick();
        //cabeceras de la tabla
        DocumentosProcesados.ultimaModifColumnVisible();
        DocumentosProcesados.nombreColumnVisible();
        //menu de opciones para habilitar la opcion en la tabla
         DocumentosProcesados.menuOpcionesClick(); 
        DocumentosProcesados.opNumeroClick();
        //cabeceras de la tabla
        DocumentosProcesados.paginasColumnVisible();
        DocumentosProcesados.documentoColumnVisible();
        //menu de opciones para habilitar la opcion en la tabla
         DocumentosProcesados.menuOpcionesClick(); 
        DocumentosProcesados.opCoincidenciaClick();
        //cabeceras de la tabla
        DocumentosProcesados.coincidenciaColumnVisible();
        DocumentosProcesados.estadoColumnVisible();
        //tabla
        DocumentosProcesados.tablaVaciaMensaje(); 
        //menu de opciones para habilitar la opcion en la tabla
        DocumentosProcesados.menuOpcionesVisible(); 
        DocumentosProcesados.menuOpcionesClick();         
        DocumentosProcesados.opMiniaturaClick();
        DocumentosProcesados.menuOpcionesClick(); 
        DocumentosProcesados.OpFechaClick();
        DocumentosProcesados.menuOpcionesClick(); 
        DocumentosProcesados.opNombreClick();
        DocumentosProcesados.menuOpcionesClick(); 
        DocumentosProcesados.opPlantillaClick();
    })

it("Validación de elementos de fecha y filtro de búsqueda", () => {
        cy.visit('/document')
        //fechas 
        DocumentosProcesados.rangoFechasVisible();
        DocumentosProcesados.fechaInicioVisible();
        DocumentosProcesados.fechaFinVisible();
        DocumentosProcesados.datePickerVisible();
        //filtro
        DocumentosProcesados.filtroVisible();
        DocumentosProcesados.filtroTexto();
        // DocumentosProcesados.filtroLupaVisible();
        DocumentosProcesados.filtroLupaClick();
        DocumentosProcesados.filtroTexto();
        DocumentosProcesados.filtroCerrarVisible();
        DocumentosProcesados.filtroCerrarClick();
        
    })


   
})