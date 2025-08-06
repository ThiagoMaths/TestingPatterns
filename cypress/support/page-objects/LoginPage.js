class LoginPage {

    get singUpButton() {
        return '[data-testid="signUp"] > .css-146c3p1';
    }

    signUp() {
        cy.get(this.singUpButton).click();
        return this
    }

}


export default new LoginPage;