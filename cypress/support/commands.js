import LoginPageTagger from "../pages/LoginPage-tagger-ui-dev";

Cypress.Commands.add('Login_tagger', () => {
    
    
    LoginPageTagger.usernameInput("ayelenleclerc@gmail.com");
    LoginPageTagger.passwordInput("Ayelen102030!!");
    LoginPageTagger.loginButtonClicked();
})
 
Cypress.Commands.add('Logout_tagger', () => {

        LoginPageTagger.profileButtonClicked();
        LoginPageTagger.logoutLinkClicked();
})

Cypress.Commands.add('Login_tagger_Session', () => {
    
        cy.session('Login_tagger_Session', () => {
                cy.visit("https://tagger-ui-exp.theeye.io/login");
                cy.Login_tagger();
                cy.url().should('contain', '/home')


        })
})
