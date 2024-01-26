const axios = require('axios');

const getPokemonData = (pokemon) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if (response.status === 200) {
                // Extracting just what i wanted, otherwise was way too much information on the API i chose
                const { name, types, height, weight, abilities } = response.data;

                console.log(`Name: ${name}`);
                console.log(`Height: ${height}`);
                console.log(`Weight: ${weight}`);
                console.log('Types:', types.map(typeInfo => typeInfo.type.name).join(', '));
                console.log('Abilities:', abilities.map(abilityInfo => abilityInfo.ability.name).join(', '));
            } else {
                // Handle responses with error status codes
                console.error('Error fetching data:', response.status, response.statusText);
            }
        }, error => {
            // Handleing network errors or other errors that prevented the request from completing
            console.error('Error making the request:', error.message);
        });
};

getPokemonData('charmander'); // try typing in another pokemon name, like bulbasaur or charmander
