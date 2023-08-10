import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

before(function(){
  cy.fixture('demoqa-locators').then(({

      form_page,
  }) => {
      formPage = form_page
  })

})


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
  cy.get(formPage.firstname_input).type(name)
  cy.get(formPage.lastname_input).type(last_name)
  cy.get(formPage.email_input).type(mail)
  cy.get(formPage.gender_male_check).click()
  cy.get(formPage.phone_input).type(number)
  cy.get(formPage.birthdate_input).click()
  for (let i = 0; i < 10; i++) {
    cy.get(formPage.birthdate_input).type('{backspace}')
  }
  cy.get(formPage.birthdate_input).type('0')
  cy.get(formPage.birthdate_input).type('{leftArrow}')
  cy.get(formPage.birthdate_input).type('{backspace}')
  cy.get(formPage.birthdate_input).type(birth)
  cy.get(formPage.birthdate_input).type('{rightArrow}')
  cy.get(formPage.birthdate_input).type('{backspace}')
  cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
  cy.get('#react-select-3-option-2').click()
  cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
  cy.get('#react-select-4-option-0').click()
  cy.get('#submit').click({force: true})

  // TODO Meter report html
  })

  Then("I input data onto the form by clicking", () => {

    const name = "Jose"
    const last_name = "Pérez"
    const mail = "userjoseperez@mail.com"
    const number = "603999222"  
  
    cy.get('h5').should('be.visible')
    cy.get(formPage.firstname_input).type(name)
    cy.get(formPage.lastname_input).type(last_name)
    cy.get(formPage.email_input).type(mail)
    cy.get(formPage.gender_male_check).click()
    cy.get(formPage.phone_input).type(number)
    cy.get(formPage.birthdate_input).click()
    cy.get(formPage.month_selector).select('July')
    cy.get(formPage.year_selector).select('1993')
    cy.get(formPage.day20).click()
    cy.get('#state > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
    cy.get('#react-select-3-option-2').click()
    cy.get('#city > .css-yk16xz-control > .css-1hwfws3 > .css-1wa3eu0-placeholder').click()
    cy.get('#react-select-4-option-0').click()
    cy.get('#submit').click({force: true})
  
  })