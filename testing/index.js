const pokeapi = require('hello-sdk');

pokeapi.getPokemonById(1).then((pokemon) => {
  console.log(pokemon.name);
});
