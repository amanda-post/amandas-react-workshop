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

const PokeTeamSlot = (props) => {
  (props.pokemon) ? (
    <div className="pokeTeamSlot">
      <div>Name: {props.pokemon.name}</div>
      <div>Id: {props.pokemon.id}</div>
      <img src={props.pokemon.sprites.front_default} alt="pokemon image" />
    </div>
  ) : (
    <AddPokeForm addPokemon={props.addPokemon} index={props.key}/>
  );
};

export default PokeTeamSlot;
