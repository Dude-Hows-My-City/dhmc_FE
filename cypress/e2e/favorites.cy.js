describe("Favorites", () => {
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
    cy.intercept(
      "POST",
      "https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites", {
        statusCode: 204
      });

    cy.intercept(
      "GET",
      "https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites/1",
      { fixture: "favorites" }
    );

    cy.intercept(
      "DELETE",
      "https://dude-hows-my-city-be.herokuapp.com/api/v1/favorites", {
        statusCode: 204
      });

    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("test101");
    cy.get('[data-cy="login-button"]').click();
  });

    it('Should allow a user to favorite cities', () => {
      cy.get('[data-cy="favorite-button"]').first().click()
      cy.get('[data-cy="favorite-button"]').last().click()
      cy.get('[data-cy="favorites-link"]').click()
      .url().should("include", "/favorites");
    })

    it('Should allow a user to delete cities', () => {
      cy.get('[data-cy="favorite-button"]').first().click()
      cy.get('[data-cy="favorite-button"]').last().click()
      cy.get('[data-cy="favorites-link"]').click()
      .url().should("include", "/favorites");
      cy.get('[data-cy="delete-button"]').first().click()
      cy.get('[data-cy="delete-button"]').last().click()
      cy.get('[data-cy="city-card"]').should('not.exist');
    })

});