function testFooter() {
  it("renders footer", () => {
    cy.get("footer").should("exist");
  });

  it("links are working", () => {
    // check that each link leads to the correct page
    cy.get("nav")
      .contains("Docs")
      .should("have.attr", "href")
      .and("match", /#/);

    cy.get("nav").contains("API").should("have.attr", "href").and("match", /#/);

    cy.get("nav")
      .contains("Help")
      .should("have.attr", "href")
      .and("match", /#/);

    cy.get("nav")
      .contains("Community")
      .should("have.attr", "href")
      .and("match", /#/);
  });

  it("renders logo", () => {
    cy.get("footer")
      .find("img[alt='logo']")
      .should("have.attr", "src")
      .and("match", /\/icons\/logo-small\.svg$/);
  });
}

describe("Footer", () => {
  const pages = [
    "http://localhost:3000/dashboard",
    "http://localhost:3000/dashboard/issues",
    "http://localhost:3000/dashboard/alerts",
    "http://localhost:3000/dashboard/users",
    "http://localhost:3000/dashboard/settings",
  ];
  pages.forEach((page) => {
    context(`Testing footer on ${page}`, () => {
      beforeEach(() => {
        cy.visit(page);
      });

      context("desktop resolution", () => {
        beforeEach(() => {
          cy.viewport(1025, 900);
        });

        testFooter();
      });

      context("mobile resolution", () => {
        beforeEach(() => {
          cy.viewport("iphone-8");
        });

        testFooter();
      });
    });
  });
});
