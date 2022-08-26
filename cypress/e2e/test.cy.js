/* eslint-disable no-undef */
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  it("passes", () => {
    it("Should confirm that true is equal to true", () => {
      expect(true).to.equal(true);
    });
  });
});
