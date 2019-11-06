//TODO
/*
  <div className="pokeTeamSlot">
    <div>Name: Pokemon Name</div>
    <div>Id: Pokemon Id</div>
    <img src="" alt="pokemon image"/> 
  </div>
*/
import React from "react";
import AddPokeForm from "./AddPokeForm.jsx";

const PokeTeamSlot = (props) => (
  (props.pokemon) ? (
    <div className="pokeTeamSlot">
      <div>Name: {props.pokemon.name}</div>
      <div>Id: {props.pokemon.id}</div>
      <img src={props.pokemon.sprites.front_default} alt="pokemon image" />
    </div>
  ) : (
    // FIXED: continuing to pass down the index via a prop that is not 'key'
    <AddPokeForm addPokemon={props.addPokemon} index={props.index}/>
  )
);

export default PokeTeamSlot;
