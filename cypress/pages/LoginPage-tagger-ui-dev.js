class LoginPageTagger{

    elements = {
        logo: () => cy.get('img'),
        title: () => cy.get('p'),
        usernameInput: () => cy.get('#mat-input-0'),
        passwordInput: () => cy.get('#mat-input-1'),
        loginButton: () => cy.get('.mat-button-wrapper'),
        profileButton: () => cy.get(':nth-child(2) > .mat-focus-indicator'),
        profileUsername: () => cy.get('.username > span'),
        qatest: () => cy.get('.mat-menu-content > :nth-child(1) > span'),
        logoutLink: () => cy.get(':nth-child(3) > span')

    }

    logoVisible = () => {
        this.elements.logo().should('be.visible');
    }

    titleVisible = () => { 
        this.elements.title().should('have.text', 'Adding value to human talent by automating repetitive tasks.');
    }
     
    usernameInputVisible = () => {
        this.elements.usernameInput().should('be.visible');
    }
    usernameInput = (user) => {
        this.elements.usernameInput().type(user);
    }

    passwordInputVisible = () => {
        this.elements.passwordInput().should('be.visible');
    }
    passwordInput = (pass) => {
        this.elements.passwordInput().type(pass);
    }

    loginButtonVisible = () => {
        this.elements.loginButton().should('be.visible');
    }

    loginButtonClicked = () => {
        this.elements.loginButton().click();
    }
    profileButtonVisible = () => {
        this.elements.profileButton().should('be.visible');
   
    }

    profileButtonClicked = () => {
        this.elements.profileButton().click();
    }

    profileUsernameVisible = (nameUser) => {
        this.elements.profileUsername().should('have.text',nameUser);
    }
    qatestVisible = () => {
        this.elements.qatest().should('have.text', 'qatest');
    }

    logoutLinkVisible = () => {
        this.elements.logoutLink().should('be.visible');
       
    }

    logoutLinkClicked = () => {
        this.elements.logoutLink().click();
    }
}

export default new LoginPageTagger();
