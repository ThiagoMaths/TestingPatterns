class MainPage {

    get buttonProfile() {
        return '[href="/Tab/Account"] > .r-g6644c';
    }

    get editProfile() {
        return '.r-14lw9ot > :nth-child(1) > .css-146c3p1'
    }

    get selectProduct() {
        return ':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]'
    }

    get seeAllProducts() {
        return '[data-testid="see-all-new"]'
    }

    get addToCart() {
        return '[data-testid="addToCart"]'
    }

    profile() {
        cy.get(this.buttonProfile).click();
        return this
    }

    confirmRegister() {
        this.profile()
        cy.get(this.editProfile).should('exist')
    }

    product(){
        cy.get(this.seeAllProducts).click();
        cy.get(this.selectProduct).click();
    }

    addProductToCart() {
        cy.get(this.addToCart).click();
    }



}

export default new MainPage;
