import { describe, it, cy } from "local-cypress";

describe("Check all page snapshot", () => {
  it("Homepage", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Move Fast, Break Things");
  });

  it("Blog", () => {
    cy.visit("/blog");
    cy.get("h1").should("contain", "Blog");
    cy.get("p").should(
      "contain",
      "Thoughts, career hacks, software-engineering, and front-end development."
    );
  });

  it("Snippet", () => {
    cy.visit("/");
    cy.get("h1").should("contain", "Code Snippets");
    cy.get("p").should(
      "contain",
      "This is my own personal code library, where I store code snippet regarding various tech stack and tools, e.g: React, Next, Strapi, API , etc. You can use it freely!"
    );
  });

  it("Inquiry", () => {
    cy.visit("/inquiry");
    cy.get("h1").should("contain", " Available for freelance projects");
  });

  it("Freelance", () => {
    cy.visit("/freelance");
    cy.get("h1").should(
      "contain",
      "I solve incredibly challenging software and design problems, here are just a few examples."
    );
  });
});
