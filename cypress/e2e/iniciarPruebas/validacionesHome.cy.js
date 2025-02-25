import HomeTagger from '../../pages/homeTagger.js';
import LoginPageTagger from '../../pages/LoginPage-tagger-ui-dev.js';

describe('Validación de elementos presentes en el home', () => {
    let datos_login;
    before(() => {
         cy.fixture("/datos.json").then((datos) => {
            datos_login = datos;
        });
    })
    beforeEach(() => {
        cy.visit('/')
         cy.Login_tagger();
        
    })

    it('Validación de elementos presentes en el home', () => {

        LoginPageTagger.logoVisible();
        LoginPageTagger.profileUsernameVisible(datos_login.nameUser);
        LoginPageTagger.profileButtonClicked();
        LoginPageTagger.qatestVisible();
        HomeTagger.adminVisible();
        LoginPageTagger.logoutLinkVisible();
        HomeTagger.btnDescriptionsInfo();
        LoginPageTagger.logoutLinkClicked();

    })


})