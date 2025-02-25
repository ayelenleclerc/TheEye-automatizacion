import LoginPage from "../../pages/LoginPageAPP";

describe("Inicio de sesion", () => {
     let datos_login;
    beforeEach(() => {
        cy.visit("https://app.theeye.io/login");
        cy.fixture("/datos.json").then((datos) => {
            datos_login = datos;
        });
    })
    it("Login", () => {
        LoginPage.typeUsername(datos_login.user);
        LoginPage.typePassword(datos_login.pass);
        LoginPage.clickLoginButton();
    })
})