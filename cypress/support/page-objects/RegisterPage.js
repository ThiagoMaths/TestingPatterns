class RegisterPage {

    get firstName() {
        return '[data-testid="firstName"]';
    }

    get lastName() {
        return '[data-testid="lastName"]';
    }

    get phoneNumber() {
        return '[data-testid="phone"]';
    }

    get email() {
        return ':nth-child(7) > .css-175oi2r > [data-testid="email"]';
    }

    get password() {
        return ':nth-child(8) > .css-175oi2r > [data-testid="password"]';
    }

    get passwordConfirm() {
        return '[data-testid="repassword"]';
    }

    get buttonCreate() {
        return '[data-testid="create"]'
    }

    registro() {
        cy.gerarDadosRegistro().then(dados => {
            cy.get(this.firstName).type(dados.firstName);
            cy.get(this.lastName).type(dados.lastName);
            cy.get(this.phoneNumber).type(dados.phoneNumber);
            cy.get(this.email).type(dados.email);
            cy.get(this.password).type(dados.password);
            cy.get(this.passwordConfirm).type(dados.confirmPassword);
            cy.get(this.buttonCreate).click();
        })
    }

}

export default new RegisterPage();
