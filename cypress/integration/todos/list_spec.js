describe("Todo list", () => {
  it("display todo list", () => {
    cy.visit("/");

    cy.get("h1").contains("my todos", { matchCase: false });

    cy.get("li").contains("learn react", { matchCase: false });
  });
});
