import { commons } from "./commons"

const common = new commons()
// LOCATORS
let shoppingPage = ""
before(function(){
    cy.fixture('saucedemo-locators').then(({

        shopping_page,
    }) => {
        shoppingPage = shopping_page
    })

})

export class saucedemo_shopping_page{
    login_user(username,password){
        common.type(loginPage.username_input,username)
        common.type('[data-test="password"]',password)
        common.click('[data-test="login-button"]')
    }
    verify_cart_visibility(){
        // CODE TO VERIFY CART
    }
}