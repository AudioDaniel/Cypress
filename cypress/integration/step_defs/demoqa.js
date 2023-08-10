import { When, Then } from "@badeball/cypress-cucumber-preprocessor";


When("I visit demoqa.com", () => {
  cy.visit("https://demoqa.com/");
  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   return false;
  // });
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

Then("I click forms", () => {
  cy.get(':nth-child(2) > :nth-child(1) > .card-up').click()
})

Then("I click practice forms", () => {
  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   // returning false here prevents Cypress from
  //   // failing the test
  //   return false
  // })
  cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
  })
  Then("I input data onto the form", () => {
  const name = "Jose"
  const last_name = "Pérez"
  const mail = "userjoseperez@mail.com"
  const number = "603999222"
  const birth = "1996-8-7"
  cy.get('h5').should('be.visible')
  cy.get('#firstName').type(name)
  cy.get('#lastName').type(last_name)
  cy.get('#userEmail').type(mail)
  cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
  cy.get('#userNumber').type(number)
  cy.get('#dateOfBirthInput').click()
  for (let i = 0; i < 10; i++) {
    cy.get('#dateOfBirthInput').type('{backspace}')
  }
  cy.get('#dateOfBirthInput').type('0')
  cy.get('#dateOfBirthInput').type('{leftArrow}')
  cy.get('#dateOfBirthInput').type('{backspace}')
  cy.get('#dateOfBirthInput').type(birth)
  cy.get('#dateOfBirthInput').type('{rightArrow}')
  cy.get('#dateOfBirthInput').type('{backspace}')
  cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
  cy.get('#react-select-3-option-2').click()
  cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
  cy.get('#react-select-4-option-0').click()
  cy.get('#submit').click({force: true})

  // TODO Rellenar campo de fecha usando clicks
  // TODO Quitar locators de aquí, meterlos en un json o en otra clase
  // TODO Meter report html
  })