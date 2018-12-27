import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    return (
      <React.Fragment>
        <h2>Restaurants</h2>
        <ul>
          {this.props.restaurants.map(r => <Restaurant onDelete={this.props.onDelete} restaurant={r} key={r.id} />)}
        </ul>
      </React.Fragment>
    );
  }
};

export default Restaurants;