import React, { Component } from 'react';

class ReviewInput extends Component {
  state = { text: '' }

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
        <h3>Add Review</h3>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" value={this.state.text} onChange={this.onInputChange} />Í
        </form>
      </React.Fragment>
    );
  }
};

export default ReviewInput;
