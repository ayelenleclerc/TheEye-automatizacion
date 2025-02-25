
import LoginPageTagger from "../../pages/LoginPage-tagger-ui-dev";

describe("Validación, Login y logout tagger-ui-dev", () => {
     let datos_login;
    beforeEach(() => {
        cy.visit("/login");
        cy.fixture("/datos.json").then((datos) => {
            datos_login = datos;
        });
    })

    it("Validacion de elementos login page", () => {
        LoginPageTagger.logoVisible();
        LoginPageTagger.titleVisible();
        LoginPageTagger.usernameInputVisible();
        LoginPageTagger.passwordInputVisible();
        LoginPageTagger.loginButtonVisible();
        LoginPageTagger.loginButtonClicked();
        
    })

    it("Validacion de Login en tagger-ui-dev", () => {
        LoginPageTagger.usernameInput(datos_login.user);
        LoginPageTagger.passwordInput(datos_login.pass);
        LoginPageTagger.loginButtonClicked();
    })

    it("Login, Validacion de elementos y  logout en tagger-ui-dev", () => {
        LoginPageTagger.usernameInput(datos_login.user);
        LoginPageTagger.passwordInput(datos_login.pass);
        LoginPageTagger.loginButtonClicked();
        LoginPageTagger.profileButtonVisible();
        LoginPageTagger.profileUsernameVisible(datos_login.nameUser);
        LoginPageTagger.profileButtonClicked();
        LoginPageTagger.qatestVisible();
        LoginPageTagger.logoutLinkVisible();
        LoginPageTagger.logoutLinkClicked();
    })
})