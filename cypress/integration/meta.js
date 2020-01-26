import { STAGE_URL} from '../../src/variables';

beforeEach(() => {
  if (window.navigator && navigator.serviceWorker) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => {
        registrations.forEach((registration) => {
          registration.unregister();
        });
      });
  }
})

describe('Cypress tests', function () {
  it('Checks title', function () {
    cy.visit(STAGE_URL);
    cy.title().should('eq', 'jsDrome | Mentor driven open source transformation');
  });
  it('Checks payment', function () {
    cy.visit(STAGE_URL);
    cy.wait(2000);
    cy.get('#paytm-payment-btn').click();
    cy.contains('jsDrome Order');
    cy.get('.backbtn button').click();
  });
});