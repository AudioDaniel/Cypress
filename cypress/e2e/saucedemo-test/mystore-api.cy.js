/// <reference types="Cypress" />
describe('Herokuapp API testing', () => {


    const mystoreapi_endpoint = 'https://mystoreapi.com'

    it('verify product to exist', () => {
        cy.request({
            method:'GET',
            url:`${mystoreapi_endpoint}/catalog/categories`,
            })
            .its('body.categories')
            .should('be.an','array')
            .then((categories) => {
                // Verify the status code of the response
                //expect(categories.status).to.equal(200);
                const guitarrillasCategory = categories.find((item) => item.category === 'guitarrillas');
                expect(guitarrillasCategory).to.exist;
            })
        })


    it('create product', () => {
        const productData = {
            "name": "guild Surfliner Catalina Blue",
            "price": 400,
            "manufacturer": "guild",
            "category": "guitarrillas",
            "description": "Guitarra Surfliner en color Catalina Blue",
            "tags": "guild, guitarrilla"
        };
        cy.request({
            method: 'POST',
            url: `${mystoreapi_endpoint}/catalog/product`,
            body: productData
        });
        })
    })
