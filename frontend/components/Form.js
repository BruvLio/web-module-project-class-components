import React from 'react'

export default class Form extends React.Component {

  constructor(){
    super();
    this.state = {
      imput: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(this.state.input);
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  render() {
    return (<form>
        <input onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}
