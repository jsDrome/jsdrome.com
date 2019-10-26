/* eslint-disable no-magic-numbers */
/* eslint-disable no-undef */
import { STAGE_URL, URL, DESCRIPTION } from '../../src/variables';
import links from '../../src/client/list';

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

describe('My First Test', function () {
  it('Visits the Home page', function () {
    const post = links[0].links[0];
    cy.visit(STAGE_URL);
    cy.title().should('eq', post.title + ' | ' + DESCRIPTION);
    cy.get('meta[name="description"]').should("have.attr", "content", post.description);
    cy.get('meta[property="og:description"]').should("have.attr", "content", post.ogDescription);
    cy.get('meta[property="og:title"]').should("have.attr", "content", post.ogTitle);
    cy.get('meta[property="og:url"]').should("have.attr", "content", URL + '/');
    cy.get('meta[property="og:image"]').should("have.attr", "content", post.ogImage);
  })
});

describe('My Second Test', function () {
  it('Visits the Post page', function () {
    const post = links[1].links[0];
    cy.visit(URL + post.route);
    cy.title().should('eq', post.title + ' | ' + DESCRIPTION);
    cy.get('meta[name="description"]').should("have.attr", "content", post.description);
    cy.get('meta[property="og:description"]').should("have.attr", "content", post.ogDescription);
    cy.get('meta[property="og:title"]').should("have.attr", "content", post.ogTitle);
    cy.get('meta[property="og:url"]').should("have.attr", "content", URL + post.route);
    cy.get('meta[property="og:image"]').should("have.attr", "content", post.ogImage);
  })
});