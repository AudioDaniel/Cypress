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
    click_product(){
        common.click(shoppingPage.sauce_labs_backpack)
    }
    verify_cart_visibility(){
        common.verify_visibility(shoppingPage.cart_badge)

    }
}