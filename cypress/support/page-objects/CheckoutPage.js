class CheckoutPage {

    get addAddress(){
        return '[data-testid="selectAddressOrContinueToPayment"] > .css-146c3p1'
    }

    selectAddressOrContinueToPayment() {
        cy.get(this.addAddress).should('exist');
    }
}

export default new CheckoutPage();
