import LoginPageTagger from "../../pages/LoginPage-tagger-ui-dev";

describe("Inicio de sesion", () => {
     let datos_login;
    beforeEach(() => {
        cy.visit("/login");
        cy.fixture("/datos.json").then((datos) => {
            datos_login = datos;
        });
    })
    it("Login tagger-ui-dev", () => {
        LoginPageTagger.usernameInput(datos_login.user);
        LoginPageTagger.passwordInput(datos_login.pass);
        LoginPageTagger.loginButtonClicked();
    })
})