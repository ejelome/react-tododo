describe("Smoke test", () =>
  it("renders learn react link", () =>
    cy
      .visit("/")
      .get("h1")
      .contains(/my todos/i)));
