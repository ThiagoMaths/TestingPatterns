import MainPage from "../../support/page-objects/MainPage";
import LoginPage from "../../support/page-objects/LoginPage";
import RegisterPage from "../../support/page-objects/RegisterPage";

describe('Criacao de registro', () => {
    beforeEach(() => {
        cy.ebacStoreVersion();
    })

    it('Deve acessar o site e criar uma conta ', () => {
        MainPage.profile();
        LoginPage.signUp();
        RegisterPage.registro();
        MainPage.confirmRegister();
    });
})
