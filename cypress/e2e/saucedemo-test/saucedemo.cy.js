/// <reference types="Cypress" />
import { saucedemo_login_page } from "../../pages/saucedemo-login-page"
import { saucedemo_shopping_page } from "../../pages/saucedemo-shopping-page";


const login_page = new saucedemo_login_page();
const shopping_page = new saucedemo_shopping_page;

let viewport_env = Cypress.env('VIEWPORT')
// let viewport_env = 'macbook-16'

describe('Saucedemo Login Page', () => {

  beforeEach(() => {
    cy.viewport(viewport_env)
    cy.visit('https://www.saucedemo.com')
  })

  it('standard_user login', () => {
    login_page.login_user("standard_user","secret_sauce")
    cy.xpath
    //cy.get('[data-test="username"]').type('standard_user')
    //cy.get('[data-test="password"]').type('secret_sauce')
    //cy.get('[data-test="login-button"]').click()
    })

  it('wrong password login attempt', () => {
    login_page.login_user("standard_user","secret_s")
    login_page.verify_login_error("Epic sadface: Username and password do not match any user in this service")
    })

  it('add item to cart', () => {
    login_page.login_user("standard_user","secret_sauce")
    shopping_page.click_product()
    shopping_page.verify_cart_visibility()
    })

})