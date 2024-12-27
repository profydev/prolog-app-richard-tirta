import capitalize from "lodash/capitalize";
import mockProjects from "../fixtures/projects.json";

describe("Project List Loading", () => {
  it("displays loading spinner", () => {
    cy.intercept("GET", "https://prolog-api.profy.dev/project", (req) => {
      req.reply({
        delay: 2000, // simulate a 2-second delay
        fixture: "projects.json",
      });
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    it("displays loading spinner", () => {
      // check that the loading spinner is present in the DOM
      cy.get("#loading-spinner").should("exist");
    });

    // wait for request to resolve
    cy.wait("@getProjects");

    cy.get("#loading-spinner").should("not.exist");
  });
});

describe("Project List", () => {
  beforeEach(() => {
    // setup request mock
    cy.intercept("GET", "https://prolog-api.profy.dev/project", {
      fixture: "projects.json",
    }).as("getProjects");

    // open projects page
    cy.visit("http://localhost:3000/dashboard");

    // wait for request to resolve
    cy.wait("@getProjects");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("renders the projects", () => {
      const languageNames = ["React", "Node.js", "Python"];
      const statusNames = ["Critical", "Warning", "Stable"];

      // get all project cards
      cy.get("main")
        .find("ul#project-list")
        .find("li")
        .each(($el, index) => {
          // check that project data is rendered
          cy.wrap($el).contains(mockProjects[index].name);
          cy.wrap($el).contains(languageNames[index]);
          cy.wrap($el).contains(mockProjects[index].numIssues);
          cy.wrap($el).contains(mockProjects[index].numEvents24h);
          cy.wrap($el).contains(capitalize(statusNames[index]));
          cy.wrap($el)
            .find("a")
            .should("have.attr", "href", "/dashboard/issues");
        });
    });
  });
});
