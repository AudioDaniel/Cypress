import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import example from '../scripts/example';

const ex = new example

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
});

Then("I should see a search bar", () => {
  cy.get("input").should(
    "have.attr",
    "placeholder",
    "Search the web without being tracked"
  );

Given('the user navigates to the plexus website', () => {
  ex.navigateToPlexus()
})
When("the user navigates in the top menu to the {string} option", (option) => {
  ex.navigateTo(option)
})
Then('the user checks the title and subtitle of the page {string}.', (option) => {
  ex.validateTitleAndSubtitle(option)
})

});