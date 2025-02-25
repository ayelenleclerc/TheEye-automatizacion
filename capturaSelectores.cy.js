
describe("Validación Documentos Procesados", () => {
    beforeEach(() => {
        cy.Login_tagger_Session();
        
       
    })

it('Captura de selectores', () => {
  cy.visit('/document'); 

  cy.wait(2000); 

  cy.document().then((doc) => {
    let selectors = [];

    doc.querySelectorAll('*').forEach((el) => {
      let selectorData = {
        tag: el.tagName.toLowerCase(),
        id: el.id || null,
        class: el.className,
        ng_reflect_message: el.getAttribute('ng-reflect-message'),
        src: el.getAttribute('src') || null,
        attributes: {},
        textContent: el.textContent.trim() || null, // Captura el contenido textual (incluyendo para span)
        isHidden: isElementHidden(el) // Verifica si el elemento está oculto

       
      };

      // // Captura el atributo data-test si existe
      // if (el.hasAttribute('data-test')) {
      //   selectorData['data-test'] = el.getAttribute('data-test');
      // }

       // Recorre todos los atributos del elemento
    Array.from(el.attributes).forEach((attr) => {
      selectorData.attributes[attr.name] = attr.value;
      
      // Solo agrega los elementos span con contenido
    if (el.tagName.toLowerCase() === 'span' && el.textContent.trim() !== '') {
    selectors.push(selectorData);
  } else if (el.tagName.toLowerCase() !== 'span') {
    selectors.push(selectorData);
  }
  });
      
      selectors.push(selectorData);
    });
    function isElementHidden(el) {
    const style = window.getComputedStyle(el);
    return (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0');
    }
    // Guardar en JSON en fixtures
    cy.writeFile('cypress/fixtures/selectors2.json', JSON.stringify(selectors, null, 2));
  });
});




})
