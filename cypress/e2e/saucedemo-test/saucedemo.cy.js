/// <reference types="Cypress" />
import { saucedemo_login_page } from "../../pages/saucedemo-login-page"


const login_page = new saucedemo_login_page();

describe('Saucedemo Login Page', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  it('standard_user login', () => {
    login_page.login_user("standard_user","secret_sauce")
    //cy.get('[data-test="username"]').type('standard_user')
    //cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="login-button"]').click()
    })

  it('wrong password login attempt', () => {
  cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauc')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]')
    })

})