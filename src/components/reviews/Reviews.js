import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <React.Fragment>
        <h5>Reviews</h5>
        <ul>
          {this.props.reviews.map(r => <Review onDelete={this.props.onDelete} key={r.id} review={r} />)}
        </ul>
      </React.Fragment>
    );
  }
};

export default Reviews;