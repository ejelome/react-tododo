describe("Todo list", () =>
  it("display todo list", () =>
    cy
      .visit("/")
      .get("h1")
      .contains(/my todos/i)));
