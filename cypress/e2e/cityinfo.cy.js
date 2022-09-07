describe("City Info", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://dude-hows-my-city-be.herokuapp.com/api/v1/cities",
      { fixture: "cities" }
    );
    cy.intercept(
      "GET",
      "https://dude-hows-my-city-be.herokuapp.com/api/v1/cities/1",
      { fixture: "city" }
    );
    cy.intercept(
      "POST",
      "https://dude-hows-my-city-be.herokuapp.com/api/v1/users?username=test",
      { fixture: "user" }
    );
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("test");
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="city-name"]').first().click();
  });

  it("Should render all City Info elements to the page", () => {
    cy.get('[data-cy="header"]')
      .get('[data-cy="city-info-container"]')
      .get('[data-cy="city-info-name-wrapper"]')
      .get('[data-cy="city-info-name"]')
      .get('[data-cy="city-info-image"]');
  });

  it("Should render all Quality elements to the page", () => {
    cy.get('[data-cy="quality-scores"]')
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
      .get(':nth-child(17) > [data-cy="progess-bar"]');
  });

  it("Should render all Housing elements to the page", () => {
    cy.get('[data-cy="housing-header"]')
      .get('[data-cy="apartments-container"]')
      .get('[data-cy="apt-small"]')
      .get('[data-cy="apt-small-num"]')
      .get('[data-cy="apt-medium"]')
      .get('[data-cy="apt-medium-head"]')
      .get('[data-cy="apt-medium-num"]')
      .get('[data-cy="apt-large"]')
      .get('[data-cy="apt-large-head"]')
      .get('[data-cy="apt-large-num"]');
  });

  it("Should render all Salary elements to the page", () => {
    cy.get('[data-cy="salary-header"]')
      .get('[data-cy="salary-dropdown"]')
      .get('[data-cy="job-title"]')
      .get('[data-cy="pay-header"]');
    // .get("select")
    // .select("chef")
    // .get('[data-cy="search-button"]')
    // .click()
    // .get('[data-cy="median-pay"]');
  });

  it("Should render all Culture elements to the page", () => {
    cy.get('[data-cy="culture-header"]')
      .get('[data-cy="culture-icon"]')
      .should("have.length", 9)
      .get('[data-cy="venue-value"]')
      .should("have.length", 9);
  });
});
