/// <reference types="Cypress" />

const pokemon_endpoint = `https://pokeapi.co/api/v2/pokemon/`

function verify_pkmn_name (pkmn_name){
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


describe('PokeAPI Testing', () => {

    it('verify pokemon name', () => {
        verify_pkmn_name('pikachu')
        })
    
  })