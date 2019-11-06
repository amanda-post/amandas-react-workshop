//TODO
/*
<div>
  <h1>My PokeTeam!</h1>
  <<PokeTeam goes here>>
</div>
*/
import React from 'react';
import PokeTeam from './PokeTeam.jsx';
import examplePokeTeam from '../../../data/examplePokeTeam.js'
import getPokemon from '../../../lib/getPokemon.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // FIXED: JavaScript says you cannot attempt to map an array created via Array(6).
      // therefore, we can just set the default array to mappable values that are falsy.
      pokeTeam: [null, null, null, null, null, null]
    }
  }

  addPokemon(query, index) {
    getPokemon(query, ({ data }) => {
      // FIXED: create a shallow copy of the state, alter that copy, then use setState()
      let copiedState = [...this.state.pokeTeam];
      copiedState[index] = data;
      this.setState({
        pokeTeam: copiedState
      })
    })
  }

  render() {
    return (
      <div>
        <h1>My PokeTeam!</h1>
        <PokeTeam pokeTeam={this.state.pokeTeam} addPokemon={this.addPokemon.bind(this)}/>
      </div>
    )
  }
}

export default App