describe("Smoke test", () => {
  it("renders learn react link", () => {
    cy.visit("/")
      .get("li")
      .contains(/learn react/i);
  });
});
