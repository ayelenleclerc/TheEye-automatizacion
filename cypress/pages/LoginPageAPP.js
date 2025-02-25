class LoginPageAPP{
    elements = {
        loginPageLogo: () => cy.get('.theeye-logo'),
        loginPageTitle: () => cy.get('.title'),
        loginPageSubTitle: () => cy.get('[data-hook="login-form-container"] > .subtitle'),
        usernameInput: () => cy.get(':nth-child(4) > .col-xs-12 > .form-wrapper > .form-container > form > :nth-child(1) > .form-input'),
        passwordInput: () => cy.get(':nth-child(2) > .form-input'),
        loginButton: () => cy.get('.sign-in'),
        googleLoginButton: () => cy.get('.google'),
        microsoftLoginButton: () => cy.get('.microsoft'),
        forgotPasswordLink: () => cy.get('[data-hook="password-view-toggle"]'),
        registerText: () => cy.get('.register-link'),
        registerLink: () => cy.get('.register-link > a'),
        profile: () => cy.get('.profile'),
        profileUsername: () => cy.get('.username'),
        profileUser: () => cy.get('.profile-data > [data-hook="name"]'),
        profileEmail: () => cy.get('[data-hook="email"]'),
        logoutLink: () => cy.get(':nth-child(2) > .topmenu-icon')
    }

    logo = () => {
        this.elements.loginPageLogo().should('be.visible');
    }
    title = () => {
        this.elements.loginPageTitle().should('have.text', 'We boost human talent by automating repetitive tasks');
    }
    subTitle = () => {
        this.elements.loginPageSubTitle().should('have.text', 'Signin');   
    }


    typeUsername = (username) => {
        this.elements.usernameInput().type(username);
    }

    typePassword = (password) => {
        this.elements.passwordInput().type(password);
    }

    clickLoginButton = () => {
        this.elements.loginButton().click();
    }

    loginButtonEnabled = () => {
        this.elements.loginButton().should('be.enabled');
    }
    loginButtonVisible = () => {
        this.elements.loginButton().should('be.visible');
    }

    googleLoginButtonVisible = () => {
        this.elements.googleLoginButton().should('be.visible');
    }

    googleLoginButtonEnabled = () => {
        this.elements.googleLoginButton().should('be.enabled');
    }
    microsoftLoginButtonVisible = () => {
        this.elements.microsoftLoginButton().should('be.visible');
    }

    microsoftLoginButtonEnabled = () => {
        this.elements.microsoftLoginButton().should('be.enabled');
    }
    forgotPasswordLinkVisible = () => {
        this.elements.forgotPasswordLink().should('be.visible');
        this.elements.forgotPasswordLink().should('have.text', 'Forgot password?');
    }

    clickForgotPasswordLink = () => {
        this.elements.forgotPasswordLink().click();
    }

    registerTextVisible = () => {
        this.elements.registerText().should('be.visible');
        
    }


    
    registerLinkVisible = () => {
        this.elements.registerLink().should('be.visible');
        this.elements.registerLink().should('have.text', 'Register here');
    }

    clickRegisterLink = () => {
        this.elements.registerLink().click();
    }
    clickGoogleLoginButton = () => {
        this.elements.googleLoginButton().click();
    }

    clickMicrosoftLoginButton = () => {
        this.elements.microsoftLoginButton().click();
    }

    clickForgotPassword = () => {
        this.elements.forgotPasswordLink().click();
    }

    clickregisterLink = () => {
        this.elements.registerLink().click();
    }

    profileVisible = () => {
        this.elements.profile().click();
    }

    profileUsernameVisible = (username) => {
        this.elements.profileUsername().should('have.text', username);
    }

    profileUserVisible = (nameUser) => {
        
        this.elements.profileUser().should('have.text', nameUser);
    }

    profileEmailVisible = (email) => {
       
        this.elements.profileEmail().should('have.text', email);
    }

    clickProfile = () => {
        this.elements.profile().click({force:true});
    }

    clickLogout = () => {
        this.elements.logoutLink().click({force:true});
    }
}


export default new LoginPageAPP();