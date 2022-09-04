describe("City Info", () => {


  beforeEach(() => {
    cy.intercept('GET','https://dude-hows-my-city-be.herokuapp.com/api/v1/cities', { fixture: 'cities' })
    cy.intercept('GET','https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/1', { fixture: 'city' })
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="city-name"]').first().click()
  });

  it("Should render all relevant elements to the page", () => {
   cy.get('[data-cy="header"]')
      .get('[data-cy="city-info-container"]')
      .get('[data-cy="city-info-name-wrapper"]')
      .get('[data-cy="city-info-name"]')
      .get('[data-cy="city-info-image"]')
      .get('[data-cy="quality-scores"]')
      .get('[data-cy="progress-bars"]')
      .get(':nth-child(1) > [data-cy="progess-bar"]')
      .get(':nth-child(2) > [data-cy="progess-bar"]')
      .get(':nth-child(3) > [data-cy="progess-bar"]')
      .get(':nth-child(4) > [data-cy="progess-bar"]')
      .get(':nth-child(5) > [data-cy="progess-bar"]')
      .get(':nth-child(6) > [data-cy="progess-bar"]')
      .get(':nth-child(7) > [data-cy="progess-bar"]')
      .get(':nth-child(8) > [data-cy="progess-bar"]')
      .get(':nth-child(9) > [data-cy="progess-bar"]')
      .get(':nth-child(10) > [data-cy="progess-bar"]')
      .get(':nth-child(11) > [data-cy="progess-bar"]')
      .get(':nth-child(12) > [data-cy="progess-bar"]')
      .get(':nth-child(13) > [data-cy="progess-bar"]')
      .get(':nth-child(14) > [data-cy="progess-bar"]')
      .get(':nth-child(15) > [data-cy="progess-bar"]')
      .get(':nth-child(16) > [data-cy="progess-bar"]')
      .get(':nth-child(17) > [data-cy="progess-bar"]')
      .get('[data-cy="housing-header"]')
      .get('[data-cy="apartments-container"]')
      .get('[data-cy="apt-small"]')
      .get('[data-cy="apt-small-num"]')
      .get('[data-cy="apt-medium"]')
      .get('[data-cy="apt-medium-head"]')
      .get('[data-cy="apt-medium-num"]')
      .get('[data-cy="apt-large"]')
      .get('[data-cy="apt-large-head"]')
      .get('[data-cy="apt-large-num"]')
  });

});