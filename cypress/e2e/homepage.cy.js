/* eslint-disable no-undef */
describe("Homepage", () => {


  beforeEach(() => {
    cy.intercept('GET','https://dude-hows-my-city-be.herokuapp.com/api/v1/cities', { fixture: 'cities' })
    cy.visit('http://localhost:3000/')
  })

  it("Should render all relevant elements to the page", () => {
   cy.get('[data-cy="header"]')
    .get('[data-cy="search-bar"]')
    .get('[data-cy="city-card"]').should('have.length', 3)
    .get('[data-cy="favorite-button"]').should('have.length', 3)
    .get('[data-cy="city-image"]').should('have.length', 3)
    .get('[data-cy="city-name"]').should('have.length', 3)
  });

  it("passes", () => {
    it("Should confirm that true is equal to true", () => {
      expect(true).to.equal(true);
    });
  });
});
