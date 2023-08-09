/// <reference types="Cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.xpath(`//input[@id="searchbox_input"]`).should(
    "have.attr",
    "placeholder",
  );
});