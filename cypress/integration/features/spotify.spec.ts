import { describe, it, cy } from "local-cypress";

describe("Spotify works as expected", () => {
  it("Should not showing any song when nothing is playing", () => {
    cy.intercept("/api/nowPlaying", {
      fixture: "spotify/not-playing.json",
    }).as("spotify");

    cy.visit("/");
    cy.wait(2000);
    cy.wait("@spotify");

    cy.get("[data-cy=spotify]").should("not.exist");
  });

  it("Should show a song when spotify is playing", () => {
    cy.intercept("/api/nowPlaying", {
      fixture: "spotify/playing.json",
    }).as("spotify");

    cy.visit("/");
    cy.wait(2000);
    cy.wait("@spotify");

    cy.get("[data-cy=spotify]").should("exist");
  });
});
