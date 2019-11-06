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
    this.props.addPokemon(this.state.pokeInput, this.props.key);
  }

  render() {
    return (
      <form type="submit" onSubmit={this.handleSubmit.bind(this)}>
        Enter a Pokemon Name or ID:
        <input onChange={this.handleChange.bind(this)}></input>
        <button>Add Pokemon</button>
      </form>
    )
  }
}

export default AddPokeForm;