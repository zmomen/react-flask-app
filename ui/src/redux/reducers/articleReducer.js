const initialState = {};

export default function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ARTICLES":
      return [...action.payload];
    case "SAVE_ARTICLE":
      return [...state];
    case "GET_SAVED_ARTICLES":      
      return [...action.payload];
    default:
      return state;
  }
}
