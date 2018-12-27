import cuid from 'cuid';
export const cuidFn = cuid;

export default (state = {
  restaurants: [],
  reviews: []
}, action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        text: action.text,
        id: cuid()
      }
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
      return { ...state, reviews: state.reviews.filter(r => r.restaurantId !== action.id), restaurants: state.restaurants.filter(r => r.id !== action.id) }
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return { ...state, reviews: [...state.reviews, review] }
    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter(r => r.id !== action.id) }
    default:
      return state
  }
}