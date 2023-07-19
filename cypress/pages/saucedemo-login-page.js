import { commons } from "./commons"

const common = new commons()
// LOCATORS
let loginPage = ""
before(function(){
    cy.fixture('saucedemo-locators').then(({

        login_page,
    }) => {
        loginPage = login_page
    })

})

export class saucedemo_login_page{
    login_user(username,password){
        common.type(loginPage.username_input,username)
        common.type('[data-test="password"]',password)
        common.click('[data-test="login-button"]')
        // cy.get('[data-test="username"]').type(username)
        // cy.get('[data-test="password"]').type(password)
        // cy.get('[data-test="login-button"]').click()
    }
}