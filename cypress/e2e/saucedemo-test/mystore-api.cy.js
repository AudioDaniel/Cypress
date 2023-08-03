/// <reference types="Cypress" />
describe('Herokuapp API testing', () => {


    const mystoreapi_endpoint = 'https://mystoreapi.com'

    it('verify basic auth', () => {
        cy.request({
            method:'GET',
            url:`${mystoreapi_endpoint}/catalog/categories`,
            })
            .its('body.categories')
            .should('be.an','array')
            .then((categories) => {
                // Verify the status code of the response
                //expect(categories.status).to.equal(200);
                const fruitsCategory = categories.find((item) => item.category === 'fruits');
                expect(fruitsCategory).to.exist;
                const fruitsValue = fruitsCategory.category;
                
            })
        })
    })