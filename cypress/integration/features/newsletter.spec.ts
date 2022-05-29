import { describe, it, cy, beforeEach } from "local-cypress";

describe("Newsletter works as expected", () => {
  beforeEach(() => {
    cy.visit("/blog");
  });

  it("User able to type their email", () => {
    cy.get("#email-input").should("be.visible").type("melvin123@gmail.com");
  });
});
