import React from 'react';

class AddPokeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeInput: ''
    }
  }

  handleChange(e) {
    this.setState({
      pokeInput: e.target.value
    })
  }

  handleSubmit(e) {
    //FIXED: adding e.preventDefault() prevents the page from refreshing (and losing our data)
    e.preventDefault();
    //FIXED: this.props.key => this.props.index
    this.props.addPokemon(this.state.pokeInput, this.props.index);
  }

  render() {
    return (
      <form type="submit" onSubmit={this.handleSubmit.bind(this)} className="pokeTeamSlot">
        Enter a Pokemon Name or ID:
        <input onChange={this.handleChange.bind(this)}></input>
        <button>Add Pokemon</button>
      </form>
    )
  }
}

export default AddPokeForm;