import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} onFormSubmit={this.props.addReview} />
        <Reviews onDelete={this.props.deleteReview} reviews={this.props.reviews} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    reviews: state.reviews.filter(r => r.restaurantId === ownProps.restaurant.id)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const restaurantId = ownProps.restaurant.id
  return {
    addReview: text => dispatch({
      type: 'ADD_REVIEW',
      review: {
        text,
        restaurantId
      }
    }),
    deleteReview: id => dispatch({
      type: 'DELETE_REVIEW',
      id: id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
