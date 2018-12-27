import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  onFormSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.text)
    this.setState({ text: '' })
  }

  onInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Add a Restaurant</h1>
        <form onSubmit={this.onFormSubmit}>
          <label>Restaurant Name:</label>
          <input type="text" value={this.state.text} onChange={this.onInputChange} />
        </form>
      </React.Fragment>
    );
  }
};

export default RestaurantInput;
