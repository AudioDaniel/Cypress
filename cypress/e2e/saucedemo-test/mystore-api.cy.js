/// <reference types="Cypress" />
describe('Herokuapp API testing', () => {


    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const fecha_hora = new Date().toLocaleString()

    function generateString(length) {
        let result = ' ';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    
        return result;
    }

    const mystoreapi_endpoint = 'https://mystoreapi.com'
    const credentials = {
        username: fecha_hora,
        password: generateString(6)
    };

    before(() => {
        cy.log(generateString(10))
        cy.log(fecha_hora)
      })

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


        it('create and delete product', () => {
            const productData = {
                "name": "guild Surfliner Catalina Blue",
                "price": 400,
                "manufacturer": "guild",
                "category": "guitarrillas",
                "description": "Guitarra Surfliner en color Catalina Blue",
                "tags": "guild, guitarrilla"
            };
        
            // Create the product
            cy.request({
                method: 'POST',
                url: `${mystoreapi_endpoint}/catalog/product`,
                body: productData
            }).then((response) => {
                // Assuming the API response contains the new product's ID
                const productId = response.body.id;

                cy.request({
                    method: 'GET',
                    url: `${mystoreapi_endpoint}/catalog/product/${productId}`
                })
        
                // Delete the product using the obtained ID
                cy.request({
                    method: 'DELETE',
                    url: `${mystoreapi_endpoint}/catalog/product/${productId}`
                });

                cy.request({
                    method: 'GET',
                    url: `${mystoreapi_endpoint}/catalog/product/${productId}`,
                    failOnStatusCode: false // Allow 404 response without failing the test
                }).then((getResponse) => {
                    expect(getResponse.status).to.equal(404);
                });
            });

        });

        it('create user', () => {
            cy.request({
                method: 'POST',
                url: `${mystoreapi_endpoint}/auth/user`,
                body: credentials
            }).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body).to.have.property('status');
                expect(response.body.status).to.equal('active');
            });
        })

        it('should authenticate successfully', () => {
            cy.request({
                method: 'POST',
                url: `${mystoreapi_endpoint}/auth/login`,
                body: credentials
            }).then((response) => {
                expect(response.status).to.equal(201);
                expect(response.body).to.have.property('access_token');
                cy.log(response.body.access_token)
                cy.request({
                    method: 'GET',
                    url: `${mystoreapi_endpoint}/auth/me`,
                    headers: { Authorization : "Bearer " + response.body.access_token }
                }).then((response1) => {
                    expect(response1.body.username).to.equal(credentials.username)
                })
            });

        });
    })
