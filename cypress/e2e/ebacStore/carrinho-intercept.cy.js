describe('Testes de API do carrinho com Intercept', () => {

    beforeEach(() => {

        cy.setCookie('ebacStoreVersion', 'v2')
        cy.visit('/produtos')
   });

    it('Deve adicionar um item ao carrinho e validar a resposta da API', () => {

        cy.intercept('GET', '/public/**').as('getProducts');
        cy.intercept('GET', '/public/getProductDetails/**').as('getProductDetails');
        cy.intercept('PUT', '/public/updateCart/**').as('updateCart');

        cy.get('[data-testid="see-all-popular"]').click();
        cy.wait('@getProducts').its('response.statusCode').should('eq', 304);


        cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"] > .r-cqee49').click();
        cy.wait('@getProductDetails').its('response.statusCode').should('be.oneOf', [200, 304]);

        cy.get('[data-testid="addToCart"]').click();
        cy.wait('@updateCart').its('response.statusCode').should('eq', 200);

    });

    it('Deve remover um item do carrinho e validar a resposta', () => {
        cy.intercept('GET', '/public/**').as('getProducts');
        cy.intercept('PUT', '/public/updateCart/**' ).as('updateCart');

        cy.get('[style="background-color: rgb(242, 242, 242);"] > :nth-child(1) > :nth-child(1) > :nth-child(1) > .r-1d5kdc7 > :nth-child(1) > :nth-child(1) > .r-13awgt0 > :nth-child(1) > .r-mh9cjk > .r-18u37iz > :nth-child(2) > .r-lrvibr').click();
        cy.wait('@getProducts').its('response.statusCode').should('be.oneOf', [200, 304]);


        cy.get('[data-testid="remove"]').click();
        cy.wait('@updateCart').its('response.statusCode').should('eq', 200);

    });

    it.only('Deve atualizar a quantidade de um item no carrinho e validar a resposta', () => {
        cy.intercept('GET', '/public/**').as('getProducts');
        cy.intercept('GET', '/public/getProductDetails/**').as('getProductDetails');
        cy.intercept('PUT', '/public/updateCart/**').as('updateCart');

        cy.get('[data-testid="see-all-popular"]').click();
        cy.wait('@getProducts').its('response.statusCode').should('be.oneOf', [200, 304]);


        cy.get(':nth-child(3) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"] > .r-cqee49').click();
        cy.wait('@getProductDetails').its('response.statusCode').should('be.oneOf', [200, 304]);

        cy.get('[data-testid="addToCart"]').click();
        cy.wait('@updateCart').its('response.statusCode').should('eq', 200);

        cy.get('[data-testid="addItem"] > .css-146c3p1').click();
        cy.wait('@updateCart').its('response.statusCode').should('eq', 200);



    });
});