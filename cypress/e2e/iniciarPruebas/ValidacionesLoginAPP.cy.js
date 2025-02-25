import LoginPage from "../../pages/LoginPageAPP";


describe("Validación, Login y logout App TheEye", () => {
     let datos_login;
    beforeEach(() => {
        cy.visit("https://app.theeye.io/login");
        cy.fixture("/datos.json").then((datos) => {
            datos_login = datos;
        });
    })

    it("Validación de elementos", () => {
        LoginPage.logo()
        LoginPage.title()
        LoginPage.subTitle()
        LoginPage.loginButtonEnabled()
        LoginPage.loginButtonVisible()
        LoginPage.googleLoginButtonVisible()
        LoginPage.googleLoginButtonEnabled()
        LoginPage.microsoftLoginButtonVisible()
        LoginPage.microsoftLoginButtonEnabled()
        LoginPage.forgotPasswordLinkVisible()
        LoginPage.registerTextVisible()
        LoginPage.registerLinkVisible()
    
    })

    // it("Validación de Login", () => {
    //     LoginPage.typeUsername(datos_login.user);
    //     LoginPage.typePassword(datos_login.pass);
    //     LoginPage.clickLoginButton();
    // })



     it(' Validacion de elementos, Login y Logout', ()=> {
         LoginPage.typeUsername(datos_login.user);
         LoginPage.typePassword(datos_login.pass);
         LoginPage.clickLoginButton();
         LoginPage.clickProfile ();
         LoginPage.profileUsernameVisible(datos_login.username);
         LoginPage.profileUserVisible(datos_login.nameUser);
         LoginPage.profileEmailVisible(datos_login.email);
         LoginPage.clickLogout();
     });
})