//TODO
/*
<div id="pokeTeam">
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
  PokemonTeamSlot
</div>
*/
import React from "react";
import PokeTeamSlot from "./PokeTeamSlot.jsx";

// ES6 NOTE for those who asked: technically, with arrow functions, if you only have one parameter,
// you do not need parentheses around the param. If you have two or more, they are necessary.
const PokeTeam = (props) => {
  return (
    <div id="pokeTeam">
      {/* FIX: passing in extra prop i={index} for PokeTeam to be able to access
          PRETTY FIX: when you have a lot of props, it's recommended to style it like below. */}
      {props.pokeTeam.map((pokemon, index) => (
        <PokeTeamSlot
          pokemon={pokemon}
          key={index}
          index={index}
          addPokemon={props.addPokemon}
        />
      ))}
    </div>
  );
};

export default PokeTeam;
