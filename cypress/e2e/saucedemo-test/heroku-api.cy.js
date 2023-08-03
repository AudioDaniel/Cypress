/// <reference types="Cypress" />

const herokuapp_endpoint = `https://the-internet.herokuapp.com/basic_auth`

function verify_login (pkmn_name){
        // Send the API request to the PokeAPI endpoint with the provided name
        cy.request('GET', `${pokemon_endpoint}${pkmn_name}`).then((response) => {
          // Verify the status code of the response
          expect(response.status).to.equal(200);
      
          // Access the name from the response body
          const pokemonName = response.body.name;
      
          // Assert that the name is what you expect
          expect(pokemonName).to.equal(pkmn_name);
        });
      }


describe('Herokuapp API testing', () => {

    it('verify basic auth', () => {
        cy.visit(herokuapp_endpoint,{
            auth:{
                username: 'admin',
                password: 'admin'
            }
            })
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
        })

    it('verify basic auth with credentials in url', () => {
        cy.visit(`https://admin:admin@the-internet.herokuapp.com/basic_auth`)
        cy.get('p').should('include.text','Congratulations! You must have the proper credentials.')
        })



    it('verify basic auth wrong credentials', () => {
        cy.visit(herokuapp_endpoint,{failOnStatusCode: false},{
            auth:{
                username: 'admin',
                password: '123'
                }
            })
            cy.get('body').should('include.text','Not authorized')
        })

    it('verify form', () => {
        cy.visit('https://the-internet.herokuapp.com')
        cy.request({
            method:'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!'
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://the-internet.herokuapp.com/secure')
        cy.get('.subheader').should('include.text','Welcome to the Secure Area. When you are done click logout below.')
    })
})