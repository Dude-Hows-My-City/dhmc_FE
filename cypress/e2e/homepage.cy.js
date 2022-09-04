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
    .get('[data-cy="checkbox"]').should('have.length', 3)
  });

  it('Should render searched cities dynamically', () => {
    cy.get('[data-cy="search-bar"]').type('Albuquerque')
    .get('[data-cy="city-card"]').should('have.length', 1)
    .get('[data-cy="city-name"]').should('have.length', 1).contains('Albuquerque')
    .get('[data-cy="city-image"]').should('have.length', 1)
  })

  // it("Should take user to CityInfo page on city click", () => {
  //   cy.intercept('GET','https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/1', { fixture: 'city' })
  //   cy.get('[data-cy="city-image"]').first().click()
  //   .url().should('include', '/info/Aarhus')
  // });

});
