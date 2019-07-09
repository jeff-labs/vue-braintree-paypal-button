// https://docs.cypress.io/api/introduction/api.html

describe('Test paypal button', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.get('.braintree-paypal-button').children().should('have.length', 0);
    cy.get('input').type('sandbox_85mbycg5_f47gdh83pzbn5nbc');
    cy.wait(2000);
    cy.get('.braintree-paypal-button').children().should('have.length', 1);
  });
});
