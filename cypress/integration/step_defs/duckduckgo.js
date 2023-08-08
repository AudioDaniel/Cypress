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

When("I visit demoqa.com", () => {
  cy.visit("https://demoqa.com/");
});

When("I click Elements", () =>{
  cy.get(':nth-child(1) > :nth-child(1) > .card-up').click();
})

When("I click Check Box section", () =>{
  cy.get(':nth-child(1) > .element-list > .menu-list > #item-1').click();
})

Then("I click the checkbox", () =>{
  cy.get('label').click()
})

Then("A text should appear", () => {
  cy.get('#result').contains("You have selected")
})