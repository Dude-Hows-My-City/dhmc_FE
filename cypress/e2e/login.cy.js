//The login test may be redundant as every other suit will need to go through it

describe("Login", () => {
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
  });

  it("Should render all relevant components to the login page", () => {
    cy.get('[data-cy="header"]')
      .get('[data-cy="username-input"]')
      .get('[data-cy="login-button"]')
      .get('[data-cy="username-label"]');
  });

  it("Should allow a user to login", () => {
    cy.get('[data-cy="username-input"]')
      .type("test")
      .get('[data-cy="login-button"]')
      .click()
      .get('[data-cy="search-bar"]')
      .get('[data-cy="city-card"]')
      .should("have.length", 3)
      // .get('[data-cy="favorite-button"]').should('have.length', 3)
      .get('[data-cy="city-image"]')
      .should("have.length", 3)
      .get('[data-cy="city-name"]')
      .should("have.length", 3)
      .get('[data-cy="checkbox"]')
      .should("have.length", 3);
  });
});
