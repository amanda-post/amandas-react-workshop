import axios from 'axios';

// This function makes a call to the PokeAPI, using a query that can be
// either a string (name), or the pokemon's number in the PokeDex.
const getPokemon = (query, callback) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}/`)
    .then(data => callback(data))
    .catch(err => console.log(`Error getting pokemon: ${err}`))
}

export default getPokemon;