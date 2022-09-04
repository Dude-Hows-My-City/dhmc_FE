describe("Comparison", () => {


  beforeEach(() => {
    cy.intercept('GET','https://dude-hows-my-city-be.herokuapp.com/api/v1/cities', { fixture: 'cities' })
    cy.intercept('GET','https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/1', { fixture: 'city' })
    cy.visit('http://localhost:3000')
  });

  it("Should allow a user to check 2 cities", () => {
    cy.get('[data-cy="checkbox"]').first().click()
    cy.get('[data-cy="checkbox"]').last().click()
  });

  it("Should allow a user to remove checked cities", () => {
    cy.get('[data-cy="checkbox"]').first().click()
    cy.get('[data-cy="checkbox"]').last().click()
    cy.get('[data-cy="delete-button"]').first().click()
    cy.get('[data-cy="delete-button"]').last().click()
  });

  it("Should allow a user to compare 2 cities by navigating to comparison page", () => {
    cy.get('[data-cy="checkbox"]').first().click()
    cy.get('[data-cy="checkbox"]').last().click()
    cy.get('[data-cy="compare-button"]').click()
    .url().should('include', '/comparison')
  });

  it('Should render all relevant components to the comparison page', () => {
    cy.get('[data-cy="checkbox"]').first().click()
    cy.get('[data-cy="checkbox"]').last().click()
    cy.get('[data-cy="compare-button"]').click()
    cy.get('[data-cy="header"]')
      .get('[data-cy="city-info-container"]').should('have.length', 2)
      .get('[data-cy="city-info-name-wrapper"]').should('have.length', 2)
      .get('[data-cy="city-info-name"]').should('have.length', 2)
      .get('[data-cy="city-info-image"]').should('have.length', 2)
      .get('[data-cy="quality-scores"]').should('have.length', 2)
      .get('[data-cy="progress-bars"]').should('have.length', 2)
      .get(':nth-child(1) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(2) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(3) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(4) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(5) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(6) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(7) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(8) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(9) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(10) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(11) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(12) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(13) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(14) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(15) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(16) > [data-cy="progess-bar"]').should('have.length', 2)
      .get(':nth-child(17) > [data-cy="progess-bar"]').should('have.length', 2)
      .get('[data-cy="housing-header"]').should('have.length', 2)
      .get('[data-cy="apartments-container"]').should('have.length', 2)
      .get('[data-cy="apt-small"]').should('have.length', 2)
      .get('[data-cy="apt-small-num"]').should('have.length', 2)
      .get('[data-cy="apt-medium"]').should('have.length', 2)
      .get('[data-cy="apt-medium-head"]').should('have.length', 2)
      .get('[data-cy="apt-medium-num"]').should('have.length', 2)
      .get('[data-cy="apt-large"]').should('have.length', 2)
      .get('[data-cy="apt-large-head"]').should('have.length', 2)
      .get('[data-cy="apt-large-num"]').should('have.length', 2)
  })
})
