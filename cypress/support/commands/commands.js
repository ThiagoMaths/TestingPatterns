import {faker} from "@faker-js/faker/locale/pt_BR";
import MainPage from "../page-objects/MainPage";
import LoginPage from "../page-objects/LoginPage";
import RegisterPage from "../page-objects/RegisterPage";
import CheckoutPage from "../page-objects/CheckoutPage";


Cypress.Commands.add('ebacStoreVersion', ({version = 'v2'} = {}) => {
    cy.setCookie('ebacStoreVersion', version, {domain: 'lojaebac.ebaconline.art.br'})
    cy.visit('/');
})

Cypress.Commands.add('gerarDadosRegistro', () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const phoneNumber = faker.phone.number();
    const email = faker.internet.email({firstName, lastName});
    const password = faker.internet.password();
    const confirmPassword = password;

    return {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        confirmPassword

    }
})

Cypress.Commands.add('checkoutAppAction', () => {
    cy.ebacStoreVersion();

    MainPage.profile();
    LoginPage.signUp();
    RegisterPage.registro();
    MainPage.product();
    MainPage.addProductToCart();
    CheckoutPage.selectAddressOrContinueToPayment();
})


