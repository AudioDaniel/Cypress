/// <reference types="Cypress" />
describe('Saucedemo Login Page', () => {

  it('standard_user login', () => {
    cy.visit('https://www.saucedemo.com', { timeout: 300000})
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    })
})