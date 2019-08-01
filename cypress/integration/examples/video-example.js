/// <reference types="Cypress" />

context("Connectors", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });

  it("does what is shown in the example video for the tech test", () => {
    cy.get('[data-test-id="textarea-0"]').type("He liked to chase rabits.");
    cy.get('[data-test-id="submit-0"]').click();
    cy.get('[data-test-id="link-0"]').should(
      "contain",
      "He liked to chase rabits."
    );
    cy.get('[data-test-id="textarea-1"]').type("He lived in the woods.");
    cy.get('[data-test-id="submit-1"]').click();
    cy.get('[data-test-id="link-1"]').should(
      "contain",
      "He lived in the woods."
    );
    cy.get('[data-test-id="textarea-2"]').type(
      "He was best friends with a tiger"
    );
    cy.get('[data-test-id="submit-2"]').click();
    cy.get('[data-test-id="link-2"]').should(
      "contain",
      "He was best friends with a tiger"
    );
    cy.get('[data-test-id="textarea-3"]').type("He liked cooking pancakes.");
    cy.get('[data-test-id="submit-3"]').click();
    cy.get('[data-test-id="link-3"]').should(
      "contain",
      "He liked cooking pancakes."
    );
    cy.get('[data-test-id="link-2"]').click();
    cy.get('[data-test-id="textarea-1"]').type(
      "Sometimes they went out to parties together."
    );
    cy.get('[data-test-id="submit-1"]').click();
    cy.get('[data-test-id="link-1"]').should(
      "contain",
      "Sometimes they went out to parties together."
    );
    cy.get('[data-test-id="textarea-2"]').type(
      "The tiger lived in a cave and ate bunnies for dinner."
    );
    cy.get('[data-test-id="submit-2"]').click();
    cy.get('[data-test-id="link-2"]').should(
      "contain",
      "The tiger lived in a cave and ate bunnies for dinner."
    );
    cy.get('[data-test-id="link-1"]').click();
    cy.get('[data-test-id="textarea-1"]').type(
      "The tiger was very antisocial though so they didn't make many friends."
    );
    cy.get('[data-test-id="submit-1"]').click();
    cy.get('[data-test-id="link-1"]').should(
      "contain",
      "The tiger was very antisocial though so they didn't make many friends."
    );
    cy.get('[data-test-id="textarea-2"]').type(
      "Once the wolf drank too much and was sick in the taxi home"
    );
    cy.get('[data-test-id="submit-2"]').click();
    cy.get('[data-test-id="link-2"]').should(
      "contain",
      "Once the wolf drank too much and was sick in the taxi home"
    );
    cy.get('[data-test-id="textarea-0"]').type(
      "They liked to go to Michellin starred restaurants too"
    );
    cy.get('[data-test-id="submit-0"]').click();
    cy.get('[data-test-id="link-0"]').should(
      "contain",
      "They liked to go to Michellin starred restaurants too"
    );
    cy.get('[data-test-id="link-0"]').click();
    cy.get('[data-test-id="textarea-1"]').type(
      "But really they most loved pizza most."
    );
    cy.get('[data-test-id="submit-1"]').click();
    cy.get('[data-test-id="link-1"]').should(
      "contain",
      "But really they most loved pizza most."
    );
    cy.get('[data-test-id="back"]').click();
    cy.get('[data-test-id="link-0"]').click();
    cy.get('[data-test-id="back"]').click();
    cy.get('[data-test-id="link-2"]').click();
    cy.get('[data-test-id="link-2"]').click();
    cy.get('[data-test-id="back"]').click();
    cy.get('[data-test-id="link-2"]').click();
    cy.get('[data-test-id="textarea-0"]').type(
      "The tiger was also friends with a deer."
    );
    cy.get('[data-test-id="submit-0"]').click();
    cy.get('[data-test-id="link-0"]').should(
      "contain",
      "The tiger was also friends with a deer."
    );
    cy.get('[data-test-id="textarea-3"]').type("The tiger was really mean.");
    cy.get('[data-test-id="submit-3"]').click();
    cy.get('[data-test-id="link-3"]').should(
      "contain",
      "The tiger was really mean."
    );
    cy.get('[data-test-id="link-3"]').click();

    cy.get('[data-test-id="textarea-0"]').type(
      "He kept eating the wolfs dinner."
    );
    cy.get('[data-test-id="submit-0"]').click();
    cy.get('[data-test-id="link-0"]').should(
      "contain",
      "He kept eating the wolfs dinner."
    );
    cy.get('[data-test-id="textarea-1"]').type(
      "Once he played a trick on the wolf"
    );
    cy.get('[data-test-id="submit-1"]').click();
    cy.get('[data-test-id="link-1"]').should(
      "contain",
      "Once he played a trick on the wolf"
    );
    cy.get('[data-test-id="back"]').click();
  });
});
